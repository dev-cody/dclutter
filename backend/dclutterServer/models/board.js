//Require Mongoose Schemas
const mongoose = require('mongoose');
//Create the shorthand for schema
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    timeFrame: {
        type: Number,
        required: true,
        min: 14,
        max: 90
    }
}, {
    timestamps: true
});

const Board = mongoose.model('Board', boardSchema);
//Create export
module.exports = Board;