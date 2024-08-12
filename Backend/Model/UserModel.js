const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cpassword: {
        type: String,
        require: true
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;