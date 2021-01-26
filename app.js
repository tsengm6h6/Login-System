// user清單
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

// require express
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars
const hbs = require('express-handlebars')

// require body-parser
const bodyParser = require('body-parser')

// setting template engine
app.engine('handlebars', hbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting static files
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = users.find(user => user.email === email && user.password === password)
  user ? res.redirect(`/dashboard/${user.email.toLowerCase()}`) : res.render('index', { error: true })
})

app.get('/dashboard/:user', (req, res) => {
  const user = users.find(user => user.email === req.params.user)
  res.render('dashboard', { user: user.firstName })
})

app.listen(port, () => {
  console.log(`The server is listening to port ${port}`)
})