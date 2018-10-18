// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var TrackSchema   = new mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    quantity: Number
});

// Export the Mongoose model
module.exports = mongoose.model('Track', TrackSchema);