const express = require('express')
const User = require('../model/user.js')

const router = express.Router()

router.get('/', (req, res) => res.send('Hello World!'))

router.post('/', (req, res) => {
    
})

module.exports = router