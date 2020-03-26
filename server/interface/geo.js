const Router = require('koa-router')
const axios = require('./utils/axios')

let router = new Router({
  prefix: '/users'
})

const sign = 'abcd';

router.get('/getPosition', async (ctx) => {
  let {
    status,
    data: {
      province,
      city
    }
  } = await axios(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  if (status === 200) {
    ctx.body = {
      province,
      city
    }
  } else {
    ctx.body = {
      province: '',
      city: ''
    }
  }
})

exports = router
