// Importing mongoose 
const mongoose = require('mongoose');

// Creating a schema for an Item
const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
});

// Exporting the model
module.exports = mongoose.model('item', ItemSchema);
