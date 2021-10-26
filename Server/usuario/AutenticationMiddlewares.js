const passport = require('passport')

module.exports = {
    local(req,res,next){
        passport.authenticate('local',
        {session: false},
        (erro,usuario, info) => {
            if (erro){
                return res.status(500).json({message: 'erro'})
            }
            if (!usuario){
                return res.status(401).json({message: 'não encontrado'})
            }
            req.user = usuario
            return next()
        }
        )(req,res,next)
    }





}