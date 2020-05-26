var express = require('express')
var router = express.Router()
var user = require('../models/user')
router.get('/', (req, res) => { 
    user.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
        console.log("Jane's auto-generated ID:", jane.id);
      });

    res.render('index', {})
})

module.exports = router