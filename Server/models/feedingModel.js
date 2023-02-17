const mongoose = require('mongoose')

const feedingSchema = mongoose.Schema(
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

const Feeding = mongoose.model('Feeding', feedingSchema)

module.exports = Feeding