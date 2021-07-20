const database = require('../models')
const bcrypt = require('bcrypt')

class UserController{
    
  static async registrar(req, res) {
    const { senha, nome, email, cargo } = req.body
    try {
      const password_hash = await bcrypt.hash(senha, 10);
      const novoUsuarioCriado = await database.Users.create({nome, email, cargo, senha: password_hash});

      novoUsuarioCriado.senha = undefined;
      return res.status(200).json(novoUsuarioCriado)
    } catch (error) {
      console.log(error);
      return res.status(500).json(error.message)
    }
  }

  static async logado(req,res){
  if (req.session.login) {
    res.send({loggedIn: true, user: req.session.user })
  } else {
    res.send({loggedIn:false})
  }}

  static async login(req, res){

    const Email = req.body.email
    const Senha = req.body.senha
    
    const emailbd = database.Users.findOne({where:{email:Email}})
    
    const senhaHash = database.Users.findOne({where:{senha:Senha}})
    try {
        if(emailbd){
          bcrypt.compare(Senha, senhaHash, (err, result) => {
            if(result){
            req.session.user = result
            res.send(result)
            console.log('ok')
          }else {
            res.send({ message: "erro" })
          }})
            
        }
        else{
          res.send({message:"usuario não existe"})
        }
    } catch (error) {
      return res.status(500).json(error.message)
    }
   
  }
}

module.exports = UserController