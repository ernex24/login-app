const express = require('express')
require('dotenv').config()
var bodyParser = require('body-parser')
require('./db/db')
const userRouter = require('./routes/user')
const User = require('./model/user.js')

const app = express()
// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(userRouter)

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))