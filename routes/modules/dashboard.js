const express = require('express')
const router = express.Router()
const users = require('../../users')

router.get('/', (req, res) => {
  // 依據登入時在session中存取的userId找到該使用者，並顯示個人化訊息（在此為使用者姓名）
  const user = users.find(user => user.id === req.session.userId)
  return res.render('dashboard', { user: user.firstName })
})

router.post('/logout', (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      res.redirect('/dashboard')
    }
  })
  // default cookie name is 'connect_sid')
  res.clearCookie('connect.sid')
  res.redirect('/')
})

module.exports = router
