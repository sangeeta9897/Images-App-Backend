const jwt = require('jsonwebtoken');

var isTokenValid = function (req, res, next) {
    var token = req.headers.token;
    if (token) {
        var valid = false;
        jwt.verify(token, 'abcd', (err, decode) => {
            if (err == null) {
                valid = true;
            }
        })
        if (valid) {
            next();
        } else {
            return sendResponse(res, 400, false, "Session Expired")
        }
    } else {
        return sendResponse(res, 400, false, "Token not provided")
    }
}

var sendResponse = function (resObj, status, success, msg, extraParams = {}) {
    var responseObj = {
        success: success,
        msg: msg,
    };
    if (extraParams !== {}) {
        responseObj.outputObj = extraParams;
    }
    resObj.status(status).send(responseObj);
}

module.exports = {
    isTokenValid,
    sendResponse
}