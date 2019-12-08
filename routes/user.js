const express = require('express')
const User = require('../model/user.js')
const { check, validationResult } = require('express-validator')

const router = express.Router()

router.get('/', (req, res) => res.send('Hello World!'))

router.post('/', (req, res) => {
    
})

module.exports = router