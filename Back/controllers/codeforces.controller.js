import axios from 'axios';

const verifyHandle = async (req,res) => {

    async function getUserInfo(handle) {
        try {
            const response = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
            if (response.data.status === 'OK') {
               const userInfo = response.data.result[0];
               res.status(200).json({
                   status: 'success',
                   message: 'OK',
                   data: {User: userInfo.handle}
               });
            } else {
                console.log("iam failed") ;   /// log
                res.status(400).json({
                    status: 'fail',
                    message: 'WA',
                    data: null
                });
            }
        } catch (error) {
            res.status(400).json({
                status: 'fail',
                message: 'WA',
                data: null
            });
        }
    }

    let handle = req.body.handle;
    handle = handle.trim();
    console.log(handle)          /// log
    getUserInfo(handle);

}

export {verifyHandle} ;
