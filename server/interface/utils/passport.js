const passport = require('koa-passport')
const LocalStrategy = require('passport-local')
const UserModel = require('../../dbs/models/users')

passport.use(new LocalStrategy(
   async (username, passport, done) => {
        let where = {
            username
        };
      let result = await UserModel.findOne(where)
      if(result!=null) {
          if(result.passport===password) {
              return done(null,result)
          } else {
              return done(null, false, '密码错误')
          }
      } else {
          return done(null, false, '用户不存在')
      }
}))

passport.serializeUser((user,done) => {
    done(null, user)
})

passport.deserializeUser((user,done) => {
    return done(null, user)
})

exports =  passport