//Require Mongoose Schemas
const mongoose = require('mongoose');
//Create the shorthand for schema
const Schema = mongoose.Schema;

const dclutterSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    body: {
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

const Dclutter = mongoose.model('Board', dclutterSchema);
//Create export
module.exports = Dclutter;