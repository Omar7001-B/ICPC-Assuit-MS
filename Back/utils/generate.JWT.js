import jwt from 'jsonwebtoken';

export let generateJWT = async (payload) => {
   const token =  await jwt.sign(
                        payload,
                        process.env.JWT_SECRET,
                        { expiresIn: "20h" });
    return token;
}