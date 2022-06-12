// app.js

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')

const routes = require('./routes')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// 取得資料庫連線狀態
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

// route setting 重構至routes裡面

app.listen(port, () => {
  console.log(`Express is running on http://localhost${port}`)
})