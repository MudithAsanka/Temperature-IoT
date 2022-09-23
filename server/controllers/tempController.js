const Temperature = require('../models/tempModel')

createTemperature = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a temperature',
        })
    }

    const temperature = new Temperature(body)

    if (!temperature) {
        return res.status(400).json({ success: false, error: err })
    }

    temperature
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: temperature._id,
                message: 'Temperature Added!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Temperature not added!',
            })
        })
}

updateTemperature = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a temperature to update',
        })
    }

    Temperature.findOne({ _id: req.params.id }, (err, temperature) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Temperature not found!',
            })
        }
        temperature.tempValue = body.tempValue
        temperature
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: temperature._id,
                    message: 'Temperature updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Temperature not updated!',
                })
            })
    })
}

deleteTemperature = async (req, res) => {
    await Temperature.findOneAndDelete({ _id: req.params.id }, (err, temperature) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!temperature) {
            return res
                .status(404)
                .json({ success: false, error: `Temperature not found` })
        }

        return res.status(200).json({ success: true, data: temperature })
    }).catch(err => console.log(err))
}

getTemperatureById = async (req, res) => {
    await Temperature.findOne({ _id: req.params.id }, (err, temperature) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!temperature) {
            return res
                .status(404)
                .json({ success: false, error: `Temperature not found` })
        }
        return res.status(200).json({ success: true, data: temperature })
    }).catch(err => console.log(err))
}

getTemperature = async (req, res) => {
    await Temperature.find({}, (err, temperature) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!temperature.length) {
            return res
                .status(404)
                .json({ success: false, error: `Temperature not found` })
        }
        return res.status(200).json({ success: true, data: temperature })
    }).catch(err => console.log(err))
}

module.exports = {
    createTemperature,
    updateTemperature,
    deleteTemperature,
    getTemperature,
    getTemperatureById,
}