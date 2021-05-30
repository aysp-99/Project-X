const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{ type: String, reruired: true},
    password:{ type: String, reruired: true},
    gender:{ type: String, reruired: true}
}, { timestamps: true});

const User = mongoose.model('users', userSchema);

module.exports = User;