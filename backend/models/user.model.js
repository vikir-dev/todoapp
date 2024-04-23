const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    sessionToken: {
        type: String
    },
    folders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Folder'
    }]

});

const User = mongoose.model("User",userSchema);

module.exports = User;