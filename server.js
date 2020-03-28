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


const app = express();

const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express.json({ extended: false }));
// parse application/json
app.use(bodyParser.json({ extended: false}))

app.use('/api', userRouter)
app.use('/api/profile', profileRouter)
app.use('/api/ad', adRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))