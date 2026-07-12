const User = require('../models/contactModel')

const contactControllerLogic = async (req,res) => {
    await User.create(req.body)
    res.status(201).json({
        status: true,
        message: "Your response has been saved successfully"
    });
}

module.exports = {
    contactControllerLogic
}