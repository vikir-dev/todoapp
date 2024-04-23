const mongoose = require('mongoose');

var folderSchema = new mongoose.Schema({
    folderId: {
        type: String,
        required: true,
        unique: true
    },
    folderName: {
        type: String
    },
    textNodes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TextNode'
    }


});

// Ensure that folderName is unique within the context of each user
folderSchema.index({ folderName: 1, userId: 1 }, { unique: true });

const Folder = mongoose.model("Folder",folderSchema);

module.exports = Folder;