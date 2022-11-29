const mongoose = require('mongoose')
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name']
    },
    email: {
        type: String,
        required: [true, 'A user must have an email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'A user must have a password'],
        minlength: 6
    },
    phoneNumber: {
        type: String,
        // required: [true, 'A user must have a phone number']
    },
    // confirmPassword: {
    //     type: String,
    //     required: [true, 'Please confirm your password'],
    //     validate: {
    //         validator: function (el) {
    //             return el === this.password;                
    //         }
    //     }
    // }
})
  
 
const User = mongoose.model('User', userSchema)


module.exports = User;