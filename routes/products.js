const router = require('express').Router();
const authorize = require('../middleware/authorize');
const pool = require('../db');

router.post('/products', authorize, async (req, res) => {
  try {
    const { code, name, image, weight, kcal } = req.body;
    const newProduct = await pool.query(
      `INSERT INTO products(code, name, image_path, weight, kcal) VALUES($1, $2, $3, $4, $5) RETURNING *`,
      [code, name, image, weight, kcal]
    );

    res.json(newProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/products', authorize, async (req, res) => {
  try {
    const { code } = req.body;
    const product = await pool.query(
      'SELECT code, name, weight, kcal FROM products WHERE code = $1',
      [code]
    );

    res.json(product.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.put('/products/:code', authorize, async (req, res) => {
  try {
    const { code } = req.params;
    const { name, image, weight, kcal } = req.body;
    const updateProduct = await pool.query(
      'UPDATE products SET name = $1, image_path = $2, weight = $3, kcal = $4 WHERE code = $5 RETURNING *',
      [name, image, weight, kcal, code]
    );

    if (updateProduct.rows.length === 0) {
      return res.json('Unauthorized!');
    }

    res.json('Product was updated');
  } catch (err) {
    console.error(err.message);
  }
});

router.delete('/products/:code', authorize, async (req, res) => {
  try {
    const { code } = req.params;
    const deleteProduct = await pool.query(
      'DELETE FROM products WHERE code = $1 RETURNING *',
      [code]
    );

    if (deleteProduct.rows.length === 0) {
      return res.json('Unauthorized!');
    }

    res.json('Product was deleted');
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
