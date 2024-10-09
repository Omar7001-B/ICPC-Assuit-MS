import User from "../models/userModel.js";


export const loginController = async (req,res) => {

    const userData=req.body;

    const loginUserGmail=userData.gmail;
    const loginUserPassword=userData.password;
    if (loginUserGmail.length == 0 || loginUserPassword == 0)
    {
        return res.status(400).json({
            status: "fail",
            message: "You should enter gmail and password",
            data: null, 
        })
    }


    const authUser=await User.findOne({gmail: loginUserGmail},(err) =>{
        if (err)
        {
            return json({
                status: "fail",
                message: "database error occured",
                data: err,
            })
        }
    })

    if (!authUser)
    {
        return res.status(400).json({
            status: "fail",
            message: "Invalid gmail , please try again",
            data : null,
        })
    }

    const salt= await bcrypt.gensalt(10);
    const targetPassword=bcrypt.hash(loginUserPassword,salt);
    if (targetPassword!=authUser.password)
    {
        return res.status(400).json({
            status:"fail",
            message:"Invalid password , please try again",
            data: null,           
        })
    }
    res.status(202).json({
        status:"authorized",
        data : authUser,
    })
   
}

