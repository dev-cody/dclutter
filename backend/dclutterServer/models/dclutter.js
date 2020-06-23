//Require Mongoose Schemas
const mongoose = require('mongoose');
//Create the shorthand for schema
const Schema = mongoose.Schema;

const dclutterSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Dclutter = mongoose.model('Board', dclutterSchema);
//Create export
module.exports = Dclutter;