require('dotenv').config()
const express = require('express')
const ejs = require('ejs')
const db = require('./property/Database')
const app = express()
const port = process.env.PORT
const bodyParser = require('body-parser')
var path = require('path');

// ====== app set =============
app.use(express.static('public'))
app.use('/user', express.static( 'public'))
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
app.use('/',require('./router/home_page'))
app.use('/users', require('./router/user'))


app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
// ====== static file =============



app.listen(port, () => {} );