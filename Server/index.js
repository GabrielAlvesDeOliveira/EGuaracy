const app = require('./app')
const port = 3001


const rotas = require('./rotas')
rotas(app)
app.listen(port,() => {
    console.log(`rodando na porta ${port}`)
})

