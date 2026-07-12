const express = require('express')
const contactController = require('../controllers/contactController')

const routerContact = express.Router()

routerContact.post('/contact',contactController.contactControllerLogic)

module.exports = routerContact