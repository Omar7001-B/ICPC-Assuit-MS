import dataUser from '../../models/userModel.js';
import JWT from 'jsonwebtoken';

export const getUserInfo = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    try{
        const decodedToken = JWT.verify(token, process.env.JWT_SECRET);
        console.log(decodedToken);
        const curUser = await dataUser.findById(decodedToken.id);
        
        res.status(200).json({
            status: 'success',
            message: 'User info has been retrieved successfully',
            data:{
                fName : curUser.firstName,
                lName : curUser.lastName , 
                email : curUser.gmail,
                phone : curUser.phone, 
                university : curUser.university, 
                level : curUser.level,
                faculty : curUser.faculty,
                codeforces : curUser.codeforcesHandle,
                vjHandle : curUser.vjudgeHandle,
                image : "image" 
            }
          });
    } catch{
        res.status(400).json({
            status: 'fail',
            message: 'Invalid or expired token',
            data: null,
          });
    }
}
