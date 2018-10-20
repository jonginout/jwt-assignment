const router = require('express').Router()
const controller = require('./jwt.controller')
const middle = require('../../middleware')

router.post('/encode', middle.requireData, controller.encode)
router.post('/decode', middle.invalidToken, controller.decode)
router.delete('/destroy', middle.invalidToken, controller.destroy)

module.exports = router