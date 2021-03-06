const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt')
//const { stringify } = require('nodemon/lib/utils');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
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
    status:{
        type:String,
    }
});

//fire a function before doc saved to db (hashing password)
userSchema.pre('save', async function(next){
    const salt =  await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;