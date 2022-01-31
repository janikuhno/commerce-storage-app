const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validInfo');
const authorize = require('../middleware/authorize');

// register
router.post('/register', validInfo, async (req, res) => {
  try {
    // destructure the req.body (name, password)
    const { name, password } = req.body;
    // check if users exists, if user exists then throw error
    const user = await pool.query('SELECT * FROM users WHERE user_name = $1', [
      name,
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).json('User already exists');
    }

    // bcrypt the user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    // enter the new user into the database
    const newUser = await pool.query(
      'INSERT INTO users (user_name, user_password) VALUES ($1, $2) RETURNING *',
      [name, bcryptPassword]
    );

    // generate jwt token
    const jwtToken = jwtGenerator(newUser.rows[0].user_id);

    res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// login route
router.post('/login', validInfo, async (req, res) => {
  try {
    // destructure the req.body
    const { name, password } = req.body;

    // check if user does not exist, if not then throw error
    const user = await pool.query('SELECT * FROM users WHERE user_name = $1', [
      name,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json('Password or username is incorrect!');
    }

    // check if incoming password is the same as the database password
    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json('Password is incorrect!');
    }

    // give them the jwt token
    const jwtToken = jwtGenerator(user.rows[0].user_id);

    res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// verify
router.get('/verify', authorize, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
