const jwt = require('jsonwebtoken')
const result = require('./result')
const config = require('../config/config')


function myAuth(req,res,next){
    const allowedUrls = ['/api/auth/register','/api/auth/login']
    const url = req.url
    if(allowedUrls.includes(url)){
        next()
    }
    else{
        const bearerToken = req.headers.authorization
        if(!bearerToken){
            return res.send(result.createResult('Token is missing'))
        }
        const token = bearerToken.split(" ")[1]
        try{
            const payload = jwt.verify(token, config.secret || process.env.JWT_SECRET)
            req.uid = payload.uid
            next()
        }
        catch(error){
            res.send(result.createResult('Token is invalid'))
        }   
    }
}
module.exports = myAuth;