const mongoose = require('mongoose');

var textNodeSchema = new mongoose.Schema({
    nodeId: {
        type: String,
        required: true,
        unique: true
    },
    text: {
        type: String
    }


});

const TextNode = mongoose.model("TextNode",textNodeSchema);

module.exports = TextNode;