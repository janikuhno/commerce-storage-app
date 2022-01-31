module.exports = function (req, res, next) {
  const { name, password } = req.body;

  if (req.path === '/register') {
    if (![name, password].every(Boolean)) {
      return res.status(401).json('Missing Credentials');
    }
  } else if (req.path === '/login') {
    if (![password].every(Boolean)) {
      return res.status(401).json('Missing Credentials');
    }
  }

  next();
};
