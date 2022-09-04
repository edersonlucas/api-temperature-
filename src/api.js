const express = require('express');
const city = require('./Routes/cityRouter')

const app = express();

app.use(express.json());
app.use('/city', city);

module.exports = app;