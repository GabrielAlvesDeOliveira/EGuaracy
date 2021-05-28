const database = require('../models')

class UserController{
    
  static async registrar(req, res) {
    const novoUsuario = req.body
    try {
      const novoUsuarioCriado = await database.Users.create(novoUsuario)
      return res.status(200).json(novoUsuarioCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UserController