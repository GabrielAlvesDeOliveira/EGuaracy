const { Router } = require('express')
const UserController = require('../controller/UserController')
const rota = Router()

/*router."tipo de requisição"("caminho da rota","função")*/
    rota.post('/registrar', UserController.registrar)
module.exports = router