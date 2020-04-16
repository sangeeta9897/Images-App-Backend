const express = require('express')
const cors = require('cors')
require('./src/db/mongoose')
const utils = require('./src/controllers/utils')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors());

const Authenticate = require('./src/controllers/authenticate')
const UserService = require('./src/controllers/userServices')


app.post('/signUp', Authenticate.signUp);
app.post('/signIn', Authenticate.signIn);

app.get('/getImages', utils.isTokenValid, UserService.getImages);

app.use('/*', (req, res) => { utils.sendResponse(res, 404, false, 'Route Not Found'); })


app.listen(port, () => {
    console.log('Listening to port ' + port)
})