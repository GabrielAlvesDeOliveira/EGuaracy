const bodyParser = require('body-parser')
const app = require('../index')
const usuarios = require('./usuariosRota')

module.exports = app => {
    app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }),usuarios)
    }
   