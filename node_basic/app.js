const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const fs = require('fs')
const mongoose = require('mongoose')

const db = mongoose.connection;
const Book = require('./models/book')
db.on('error', console.error)
db.once('open', function(){
  console.log('Connected to mongod server')
})

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

const server = app.listen(3000, function () {
  console.log('Express server has started on port 3000')
})

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({
  secret: '@#@$MYSIGN#@$#$',
  resave: false,
  saveUninitialized: true
}));

const router = require('./router/index')(app, Book)