const mongoose = require('mongoose');
const { isEmail } = require('validator');
//const { stringify } = require('nodemon/lib/utils');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required:[true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate:[(val)=>{ },'Please enter a valid email']
    },
    password:{
        type:String,
        required: [true,'please enter your password'],
        minlength: [6,'minimum password length is 6 characters']
    },
});

const User = mongoose.model('user', userSchema);

module.exports = User;