require('dotenv').config()
const express = require('express')
const ejs = require('ejs')
const db = require('./property/Database')
const app = express()
const port = process.env.PORT
const bodyParser = require('body-parser')
const i18n = require("i18n");
const cookieParser = require('cookie-parser')
const path = require('path');
const { addHook } = require('./property/Database')

// ====== app set =============
app.engine('ejs', require('express-ejs-extend'));
app.set('view engine','ejs')
// ====== test Database =============

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});
// ====== I18n config=============
i18n.configure({
  locales:['en', 'vi'],
  directory: __dirname + '/locales',
  defaultLocale:'vi',
  cookie: 'lang',
});
i18n.setLocale('vi')

app.use(cookieParser())
app.use(i18n.init)


// ====== middleware file =============
app.use(express.static('public'))
app.use('/user', express.static('public'))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/',require('./router/home_page'))
app.use('/users', require('./router/user'))



// ====== Handling Error =============
// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })




app.listen(port, () => {} );