const { json } = require("express")

const validationDetails = (req,res,next) => {
    const {username , email , subject , message} = req.body
    if(!username || !email || !subject || !message){
        return res.json({
            status : false,
            message : "Missing Feilds..."
        })
    }
    if(!username){
        return res.json({
            status : false,
            message : "Username missing..."
        })
    }
    if(!email.endsWith("@gmail.com")){
        return res.json({
            status : false,
            message : "Email ends with (@gmail.com) "
        })
    }
    if(!email){
        return res.json({
            status : false,
            message : "Email is missing"
        })
    }
    if(!subject){
        return res.json({
            status : false,
            message : "Subject is mising"
        })
    }
    if(!message){
        return res.json({
            status : false,
            message : "Enter Message"
        })
    }
    next()
}

module.exports = {
    validationDetails
}