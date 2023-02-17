const mongoose = require('mongoose')

const wateringSchema = mongoose.Schema(
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

const Watering = mongoose.model('Watering', wateringSchema)

module.exports = Watering