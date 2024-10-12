import jwt from 'jsonwebtoken';

const verifyToken= (req,res,next)=>{
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    if(!authHeader) return res.status(401).json({message:"No token provided"});
    const token = authHeader.split(' ')[1];

    try{
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch(err){
        return res.status(403).json({message:"Unauthorized"});
    }
}