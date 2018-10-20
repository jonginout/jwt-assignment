const router = require('express').Router()
const jwt = require('./jwt')

router.use('/', jwt)

module.exports = router