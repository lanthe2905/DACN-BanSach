require('dotenv').config()
const express = require('express')
const ejs = require('ejs')
const db = require('./property/Database')
const app = express()
const port = process.env.PORT
// ====== app set =============
app.use(express.static('public'))
app.set('view engine','ejs')

// ====== test Database =============


db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
// ====== middleware file =============
app.use('/users', require('./router/user'))

// ====== static file =============

app.get('/',(req,res) =>{
    res.send('asdasd')
})

app.listen(port, () => {} );