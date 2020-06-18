const express = require('express')
const router = express.Router()
const HomeController = require('../Controller/HomeController')

router.get([,'/','/home','/trangchu','/index'], (req,res) =>{
    HomeController.buildHomePage(req,res)
})

module.exports = router