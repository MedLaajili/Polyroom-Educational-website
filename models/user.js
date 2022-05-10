const mongoose = require('mongoose');
const { isEmail } = require('validator');
//const { stringify } = require('nodemon/lib/utils');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required:[true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate:[isEmail,'Please enter a valid email']
    },
    password:{
        type:String,
        required: [true,'please enter your password'],
        minlength: [6,'minimum password length is 6 characters']
    },
});

//fire a function before doc saved to db (hashing password)
userSchema.pre('save',function(next){
    
    //next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;