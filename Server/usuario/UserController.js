const database = require('../models')
const bcrypt = require('bcrypt')
class UserController{
    
  static async registrar(req, res) {
    const { senha, nome, email, cargo } = req.body
    try {
      const password_hash = await bcrypt.hash(senha, 10)
      const novoUsuarioCriado = await database.Users.create({nome, email, cargo, senha: password_hash})

      novoUsuarioCriado.senha = undefined
      return res.status(200).json(novoUsuarioCriado)
    } catch (error) {
      console.log(error);
      return res.status(500).json(error.message)
    }
  }

  static async logado(req,res){
    
  }

  static async login(req, res){

    const Email = req.body.email
    const Senha = req.body.senha
    
    const emailbd = database.Users.findOne({where:{email:Email}})
    
    const senhaHash = database.Users.findOne({where:{senha:Senha}})
    try {
      if( emailbd == Email){

        bcrypt.compare(Senha, senhaHash).then((result)=>{
          res.status(200).json({message: 'sucesso'})
        })
      }
      else{
        return res.status(400).json({message: 'Email inválido'})
      }
        
    } catch (error) {
      return res.status(500).json(error.message)
    }
   
  }
}

module.exports = UserController