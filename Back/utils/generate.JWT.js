import jwt from 'jsonwebtoken';

export let generateJWT = async (payload , Exp = "20h") => {
   const token =  await jwt.sign(
                        payload,
                        process.env.JWT_SECRET,
                        { expiresIn: Exp });
    return token;
}