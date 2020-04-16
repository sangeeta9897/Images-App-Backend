const mongoose = require('mongoose')

const Schema = mongoose.Schema

const imagesSchema = new Schema({
    url: {
        type: String,
        required: true
    }    
})

module.exports = {
    Images: mongoose.model('Images',imagesSchema)
}