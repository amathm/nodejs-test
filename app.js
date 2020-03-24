const express = require('express');
const morgan = require('morgan');
const app = express();

const productsRoutes = require('./products.routes');

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/products', productsRoutes);

module.exports = app;