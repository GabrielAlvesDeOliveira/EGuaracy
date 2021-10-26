const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Usuario = require('./UserController')
const bcrypt = require('bcrypt')
function verifyUser(usuario){
    if (!usuario){
        throw new Error('Não existe usuário')
    }
}
async function verifyPassword(senha,senhaHash){
    senhaValida = await bcrypt.compare(senha, senhaHash)
    if(!senhaValida){
        throw new Error('Senha ou email inválido')
    }
}
passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
        session: false
    }, async (Email, senha, done) => {
        try {
            const usuario = await database.Users.findone({ where: {email:Email}})
            verifyUser(usuario)
            await verifyPassword(senha, usuario.senhaHash)

            done(null, usuario)
        } catch (erro) {
            done(erro)
        }
    })
)