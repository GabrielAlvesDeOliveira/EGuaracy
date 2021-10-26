const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const {strategyAutentication} = require('./usuario')

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


module.exports = app