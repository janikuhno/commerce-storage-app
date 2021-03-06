const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(express.json());

// production path
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// routes
app.use('/authentication', require('./routes/authentication'));
app.use('/dashboard', require('./routes/products'));
app.use('/allproducts', require('./routes/products'));
app.use('/addproduct', require('./routes/products'));

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
