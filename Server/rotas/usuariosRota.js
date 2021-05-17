const { Router } = require('express')
const UserController = require('../controller/UserController')
const router = Router()

/*router."tipo de requisição"("caminho da rota","função")*/
    router.post('/registrar', UserController.registrar)
module.exports = router