const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, res) => {
  res.send('api!');
});
app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
  const produt = products.find((el) => el._id === req.params.id);
  res.json(produt);
});

app.listen(5000, console.log('Server runing on 5000'));
