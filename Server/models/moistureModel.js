const mongoose = require('mongoose')

const moistureSchema = mongoose.Schema(
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

const Moisture = mongoose.model('Moisture', moistureSchema)

module.exports = Moisture