const express = require('express');
const Router = express.Router();

Router.get('/:nome', (req, res) => {
  const { nome } = req.params;
  return res.status(200).json({message: `Tempo na cidade: ${nome}`})
})

module.exports = Router;