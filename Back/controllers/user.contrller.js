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
                codeforces : curUser.codeforcesHandle,
                vjHandle : curUser.vjudgeHandle,
                image : "imgage" 
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


import dataUser from '../../models/userModel.js';
import JWT from 'jsonwebtoken';

export const editUserInfo = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            status: 'fail',
            message: 'Token not provided',
            data: null,
        });
    }

    try {
        const decodedToken = JWT.verify(token, process.env.JWT_SECRET); 
        const curUser = await dataUser.findById(decodedToken.id); 

        if (!curUser) {
            return res.status(404).json({
                status: 'fail',
                message: 'User not found',
                data: null,
            });
        }

        Object.keys(req.body).forEach(key => {
            curUser[key] = req.body[key];
        });

        await curUser.save();

        res.status(200).json({
            status: 'success',
            message: 'User info has been edited successfully',
            data: {
                fName: curUser.firstName,
                lName: curUser.lastName,
            },
        });
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                status: 'fail',
                message: 'Token expired',
                data: null,
            });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid token',
                data: null,
            });
        }
        
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong',
            data: null,
        });
    }
};
