require('dotenv').config();
const jwt = require('jsonwebtoken')

const auth = async(req, res, next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ', '');
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decode;

        next();
    } catch(e){
        res.status(401).send({message: 'Please authenticate your user!'})
    }
}
module.exports={auth}