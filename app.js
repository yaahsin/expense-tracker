// app.js

const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')

const routes = require('./routes')
require('./config/mongoose')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

// route setting 重構至routes裡面

app.listen(port, () => {
  console.log(`Express is running on http://localhost${port}`)
})