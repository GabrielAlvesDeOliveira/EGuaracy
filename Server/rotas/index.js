const bodyParser = require('body-parser')
const app = require('../index')

module.exports = app => {
    app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }))
    }
   