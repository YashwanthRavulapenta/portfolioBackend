const User = require('../models/contactModel')

const contactControllerLogic = async (req,res) => {
    await User.create(req.body)
    res.send("Yes user data saved success...")
}

module.exports = {
    contactControllerLogic
}