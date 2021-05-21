const bodyParser = require('body-parser')
const app = require('../index')
const usuarios = require('./usuariosRota')
const cors = require('cors')
module.exports = app => {
    app.use(cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
      }))
    app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }),usuarios)
    }
   