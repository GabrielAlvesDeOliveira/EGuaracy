const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const usuarios = require('./usuariosRota')
const cors = require('cors')

module.exports = app => {
    app.use(cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
      }))
    app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }),usuarios)
    app.use(cookieParser())
    app.use(session({
      secret: "GRC21S",
      resave: false,
      saveUninitialized: true,
      cookie: {secure: true}
    }))
    }
   