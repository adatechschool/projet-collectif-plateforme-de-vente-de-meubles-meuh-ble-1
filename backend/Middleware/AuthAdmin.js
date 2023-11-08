const Admin = (req, res, next) => {
    if(req.user.admin){
        res
                .status(403)
                .json({ status: "Error", error: "Forbidden" });
    }else{
        next()
    }
}

module.exports = Admin