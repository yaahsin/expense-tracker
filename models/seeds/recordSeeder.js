// models/seeds/costSeeders.js
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Cost = require('../cost')
const User = require('../user')
const Category = require('../category')

const bcrypt = require('bcryptjs')
const db = require('../../config/mongoose')

const initialCost = require('../initialCost.json')

const SEED_USERS = [
  {
    name: '廣志',
    email: 'user1@example.com',
    password: 'loan32years',

  },
  {
    name: '小新',
    email: 'user2@example.com',
    password: 'nogreenpepper',
  }
]


// 取得資料庫連線狀態
db.once('open', () => {
  console.log('recordseeder is running')
  Promise.all(Array.from(SEED_USERS, seedUser => {
    return bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(seedUser.password, salt))
      .then(hash => User.create({
        name: seedUser.name,
        email: seedUser.email,
        password: hash
      }))

      .then(user => {
        return Promise.all(Array.from(initialCost, cost => {
          return Category.findOne({ name: cost.category })
            .lean()
            .then(category => {
              return Cost.create({
                name: cost.name,
                date: cost.date,
                amount: cost.amount,
                userId: user._id,
                category: cost.category,
                categoryId: category._id,
                icon: category.icon
              })
            })
        })
        )
      })
  }))
    .then(() => {
      console.log('done.')
      process.exit()
    })
})

