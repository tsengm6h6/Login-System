const express = require('express')
const router = express.Router()
const users = require('../../users')

router.get('/:user', (req, res) => {
  const user = users.find(user => user.email === req.params.user)
  return res.render('dashboard', { user: user.firstName })
})

module.exports = router