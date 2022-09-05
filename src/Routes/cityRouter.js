const express = require('express');
const Router = express.Router();
const getTemperatureFromGoogle = require('../Services/getTemperatureFromGoogle')

Router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const temperature = await getTemperatureFromGoogle(name)
  if(temperature) {
    return res.status(200).json(temperature)
  }
  return res.status(404).json(
    { message:
      'Não foi possível localizar a temperatura da cidade informada. Tente Novamente!'
    }
  )
})

module.exports = Router;