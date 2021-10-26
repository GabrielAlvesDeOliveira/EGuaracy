const UserController = require('./UserController')
const AutenticationMiddlewares = require('./AutenticationMiddlewares')
module.exports = app => {
    app
    .route('/registrar')
    .post(UserController.registrar)

    app
    .route('/login')
    .post( AutenticationMiddlewares.local, UserController.login)
    .get(UserController.logado)
}