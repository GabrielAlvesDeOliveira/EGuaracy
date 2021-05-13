const express = require('express')
const app = express()
const rotas = require('./rotas/index')
const port = 3001

rotas(app)

app.listen(port,() => {
    console.log(`rodando na porta ${port}`)
})

module.exports = app