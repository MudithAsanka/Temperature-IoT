const express = require('express')

const TemperatureController = require('../controllers/tempController')

const router = express.Router()

router.post('/temperature', TemperatureController.createTemperature)
router.put('/temperature/:id', TemperatureController.updateTemperature)
router.delete('/temperature/:id', TemperatureController.deleteTemperature)
router.get('/temperature/:id', TemperatureController.getTemperatureById)
router.get('/temperatures', TemperatureController.getTemperature)

module.exports = router