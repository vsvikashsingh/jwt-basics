const jwt = require('jsonwebtoken');
require('dotenv').config();

const CustomAPIError = require('../errors/custom-error');


const login = async(req, res)=>{
    //get username and password from request body
    const { username, password } = req.body;
//if either userame or password absent
    if(!username || !password){
        throw new CustomAPIError('Please provide username and password', 400)
    }
    const id = new Date().getDate();
//generate token
const token = jwt.sign({id, username}, process.env.SECRET_KEY, { expiresIn: '30d'})

    res.status(200).json({msg:`user created ${username}`,secret: token})
}

const dashboard = async(req, res)=>{
    //access token for auth
    // const authHeader = req.headers.authorization;
    // if(!authHeader || !authHeader.startsWith('Bearer ')){
    //     throw new CustomAPIError('Requires authorization', 401)
    // }
    // const token = authHeader.split(' ')[1];
    // try{
    //     const decoded = jwt.verify(token, process.env.SECRET_KEY)
    //     console.log(decoded)
        const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({ msg: `Hello ${req.user.username}`, secret:`You have accessed authorized data, Your lucky no is ${luckyNumber}`})
    // }catch(err){
    //     throw new CustomAPIError('Unauthorized to access data', 401)
    // }
    
}


module.exports = { login, dashboard };