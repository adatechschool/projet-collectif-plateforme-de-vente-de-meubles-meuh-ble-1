const jwt = require("jsonwebtoken")
const User =  require("../models/usermodel")

const authentification = async (req, res, next) =>{
    try {
        const token = req?.headers?.authorization?.replace("Bearer ", "")
            console.log(token);
            const userPayload = jwt.verify(token, process.env.SECRET_KEY)
            console.log(userPayload)
            const user = await User.findOne({
                _id: userPayload.id
            })
            console.log(user);
            if(!user){
                res
                .status(401)
                .json({ status: "Error", error: "Please authenticate yourself!" });
            }else{
                req.user = user
                next()
            }
        
    } catch (error) {
        res
      .status(401)
      .json({ status: "Error", error: "Please authenticate yourself!" });
    }    

};

module.exports = authentification;  