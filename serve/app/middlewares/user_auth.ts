// 中间件
import {Middleware} from 'koa-controllers'

export default class userAuth implements Middleware {
  async middleware(ctx:any, next: any): void {
    // 判断当前用户是否登录
    if (ctx.session.id) {
      await next()
    } else {
      if (ctx.headers['x-requested-with'] === 'XMLHttpRequest') {
        return ctx.body = {
          code: 1,
          message: '你还没有登录，无权访问'
        }
      }
    }
  }
}