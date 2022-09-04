const express = require('express');
const Router = express.Router();

Router.get('/:name', (req, res) => {
  const { name } = req.params;
  return res.status(200).json({name})
})

module.exports = Router;