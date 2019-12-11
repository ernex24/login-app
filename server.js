const express = require('express')
require('dotenv').config()
var bodyParser = require('body-parser')
require('./db/db')
const User = require('./model/user.js')
const Profile = require('./model/profile.js')
const Ad = require('./model/ad.js')

const userRouter = require('./routes/user')
const profileRouter = require('./routes/profile')
const adRouter = require('./routes/ad')


const app = express()
// Init Middleware
app.use(express.json({ extended: false }));
// parse application/json
app.use(bodyParser.json({ extended: false}))

app.use('/api', userRouter)
app.use('/api/profile', profileRouter)
app.use('/api/ad', adRouter)

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))