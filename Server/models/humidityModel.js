const mongoose = require('mongoose')

const humiditySchema = mongoose.Schema(
    {
        measurement: {
            type: Number,
            required: false
        },
        unit: {
            type: String,
            required: false
        },
        time: {
            type: Date,
            required: false
        }

    },
    {
        timestamps: true,
    }
)

const Humidity = mongoose.model('Humidity', humiditySchema)

module.exports = Humidity