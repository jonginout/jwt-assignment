const jwt = require('jsonwebtoken')
const config = require('../../../config')
const CustomError = require('../../../addons/customError')

const encode = (req, res, next) => {
    jwt.sign(
        req.body, req.app.get('jwt-secret'), 
        {
            expiresIn: '7d',
            issuer: config.domain,
            subject: 'jwtTest'
        }, 
        (err, token)=>{
            if (err || !token) return next(new CustomError(err.message, 500))
            req.session[token] = true
            res.json({success:true, token})
        }
    )
}

const decode = (req, res, next) => {
    jwt.verify(
        req.body.token, req.app.get('jwt-secret'), 
        (err, decoded)=>{
            if(err || !decoded) return next(new CustomError(err.message, 500))
            res.json({success:true, decoded})
        }
    )
}

const destroy = (req, res, next) => {
    delete req.session[req.body.token]
    // req.session.destroy()
    res.json({success:true})
}

module.exports = {
    encode,
    decode,
    destroy
}