const express = require('express')
const router = express.Router()
const users = require('../../users')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = users.find(user => user.email === email && user.password === password)
  if (!user) {
    res.render('index', { error: true })
  } else {
    res.setHeader('Set-Cookie', `user = ${user.email}`)
    res.redirect(`/dashboard/${user.email.toLowerCase()}`)
  }
})

module.exports = router
