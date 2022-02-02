const router = require('express').Router();
const authorize = require('../middleware/authorize');
const pool = require('../db');

router.post('/products', authorize, async (req, res) => {
  try {
    const { code, name, image, weight } = req.body;
    const newProduct = await pool.query(
      `INSERT INTO products(code, full_name, image_path, weight) VALUES($1, $2, $3, $4) RETURNING *`,
      [code, name, image, weight]
    );

    res.json(newProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;