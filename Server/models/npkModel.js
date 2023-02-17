const mongoose = require('mongoose')

const npkSchema = mongoose.Schema(
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

const Npk = mongoose.model('Npk', npkSchema)

module.exports = Npk