const express = require('express')
const router = express.Router()
const users = require('../../users')

router.get('/', (req, res) => {
  // 依據登入時在session中存取的userId找到該使用者，並顯示個人化訊息（在此為使用者姓名）
  const user = users.find(user => user.firstName === req.session.name)
  // 計算dashboard訪問次數
  req.session.views ? req.session.views += 1 : req.session.views = 1
  return res.render('dashboard', { user: user.firstName, count: req.session.views })
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
