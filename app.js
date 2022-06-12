// app.js

const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')
const routes = require('./routes')

const usePassport = require('./config/passport')

require('./config/mongoose')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 優先驗證
app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
// 有passport 路由才能比對, 所以要先放
usePassport(app)

// 收集req狀態來調整頁面顯示內容
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  next()
})

app.use(routes)

// route setting 重構至routes裡面

app.listen(port, () => {
  console.log(`Express is running on http://localhost${port}`)
})