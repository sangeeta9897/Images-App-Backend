const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    user_name: {
        type: String,
        required: true
    },
    emailID: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
})

module.exports = {
    Users: mongoose.model('Users',userSchema)
}