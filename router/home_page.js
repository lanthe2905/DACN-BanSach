const express = require('express')
const router = express.Router()

router.get([,'/','/home','/trangchu','/index'],(req,res) =>{
    res.render('index',{})
})

module.exports = router