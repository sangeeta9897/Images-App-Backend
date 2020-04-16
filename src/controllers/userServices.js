const utils = require('./utils')
const Images = require('../models/Images')
const images = Images.Images

const getImages = function (req, res) {
    images.find({},
        function (err, obj) {
            if (err) {
                utils.sendResponse(res, 400, false, 'Please try again later.', err);
            } else {
                utils.sendResponse(res, 200, true, 'Got images from DB', obj);
            }
        })
}

module.exports = {
    getImages
}