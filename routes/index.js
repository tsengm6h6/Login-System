const express = require('express')
const router = express.Router()

const home = require('./modules/home')
router.use('/', home)

const dashboard = require('./modules/dashboard')
router.use('/dashboard', dashboard)

module.exports = router