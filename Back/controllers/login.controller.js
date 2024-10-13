import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { generateJWT } from "../utils/generate.JWT.js";

// expexted request body
const userDATA = {
    gmail: "gmail or codeforces handle" , 
    password: "password"
}

export const loginController = async (req, res) => {
    const userData = req.body;

    console.log(userData.gmail) ; 
    const inUser = await User.findOne( { $or: [{ gmail: userData.gmail },
                                               { codeforcesHandle: userData.gmail }] } );

    if (!inUser) {
        return res.status(400).json({
            status: "fail",
            message: "Password or Gmail is incorrect",
            data: null,
        });
    }

    const ismatch = await bcrypt.compare(userData.password, inUser.password)
    if(ismatch){
       
        const token = await generateJWT({
            firstName: inUser.firstName,
            lastName: inUser.lastName,
            email: inUser.email,
            role: inUser.role,
            codeforcesHandle: inUser.codeforcesHandle ,
            id : inUser._id
        });

        inUser.token = token;
        inUser.save();

        return res.status(200).json({
            status: "success",
            message: "User logged in successfully",
            data: inUser.token,
        });
    } else {
        return res.status(400).json({
            status: "fail",
            message: "Password or Gmail is incorrect",
            data: null,
        }) ; 
    }
}


// the front end must save the token in the local storage and must send it in the header of every request 
// to auth the entered user
// if the token is valid or not expired the user will be able to access the data
// else the user will be redirected to the login page