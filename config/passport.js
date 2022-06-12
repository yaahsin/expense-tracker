// config/passport.js

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

// 直接打包匯出
module.exports = app => {
  // 初始化 Passport 模組
  app.use(passport.initialize())
  app.use(passport.session())
  // 設定本地登入策略
  // 1. 調整名詞
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
    // 2. 操作行為 done為內建的功能, done(程式null or err, 回傳值)
    (req, email, password, done) => {
      User.findOne({ email })
        .then(user => {
          if (!user) {
            return done(null, false, req.flash('warning_msg', 'That email is not registered!'))
          }
          if (user.password !== password) {
            return done(null, false, req.flash('warning_msg', 'Email or Password incorrect.'))
          }
          return done(null, user)
        })
    .catch(err => done(err, false))
    }))

// 設定序列化與反序列化
passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser((id, done) => {
  User.findById(id)
    .lean()
    .then(user => done(null, user))
    .catch(err => done(err, null))
})
}