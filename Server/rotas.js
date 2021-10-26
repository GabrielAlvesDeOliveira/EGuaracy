const usuarios = require('./usuario')

module.exports = app => {
    usuarios.rotas(app)
}
   