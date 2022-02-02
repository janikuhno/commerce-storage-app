const router = require('express').Router();
const authorize = require('../middleware/authorize');
const pool = require('../db');

router.post('/products', authorize, async (req, res) => {
  try {
    const { code, name, image, weight } = req.body;
    const newProduct = await pool.query(``);
  } catch (err) {
    console.error(error.message);
  }
});
