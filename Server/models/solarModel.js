const mongoose = require('mongoose')

const solarSchema = mongoose.Schema(
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

const Solar = mongoose.model('Solar', solarSchema)

module.exports = Solar