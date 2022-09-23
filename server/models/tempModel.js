const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Temperature = new Schema(
    {
        tempValue: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('temperature', Temperature)