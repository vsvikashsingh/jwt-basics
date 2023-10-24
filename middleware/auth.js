const { CustomAPIError, BadRequest, Unauthenticated } = require('../errors/index')

const jwt = require('jsonwebtoken')



const authMiddleware = (req, res, next)=>{
    //access token for auth
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new BadRequest('Requires authorization')
    }
    const token = authHeader.split(' ')[1];
    //verify token

    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const { id, username} = decoded;
        req.user = { id, username }
        next();
    }catch(err){
        throw new Unauthenticated('Unauthorized to access data')
    }
    
}

module.exports = authMiddleware;
