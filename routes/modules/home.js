const express = require('express')
const router = express.Router()
const users = require('../../users')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  // 尋找帳號密碼皆相同的使用者
  const user = users.find(user => user.email === email && user.password === password)
  // 若使用者不存在，返回首頁並顯示錯誤訊息
  if (!user) {
    res.render('index', { error: true })
  } else { // 若使用者存在，則在session中存取user.id供後續使用，並前往個人化頁面
    req.session.name = user.firstName
    console.log(req.session)
    res.redirect('/dashboard')
  }
})

router.post('/register', (req, res) => {
  const { username, email, password } = req.body
  const exist = users.find(user => user.email === email)
  if (exist) {
    res.render('register', { error: true })
  } else {
    users.push({
      firstName: username,
      email,
      password
    })
    req.session.name = username
    res.redirect('/dashboard')
  }
})

module.exports = router
