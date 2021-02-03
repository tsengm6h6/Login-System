// require express
const express = require('express')
const app = express()
const port = 3000

// require express-session
const session = require('express-session')
// connect Mongodb
const MongoStore = require('connect-mongo')(session)

// require express-handlebars
const hbs = require('express-handlebars')

// require body-parser
const bodyParser = require('body-parser')

// require router
const routes = require('./routes')

// setting template engine
app.engine('handlebars', hbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60
  },
  store: new MongoStore({
    url: 'mongodb://localhost/login-session',
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}))

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting static files
app.use(express.static('public'))

// setting router
app.use(routes)

app.listen(port, () => {
  console.log(`The server is listening to port ${port}`)
})
