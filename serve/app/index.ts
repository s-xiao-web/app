import * as Koa from 'koa'
import { useControllers } from 'koa-controllers'
import * as KoaBodyParser from 'koa-bodyparser'
const app = new Koa()
app.use(KoaBodyParser())
useControllers(app, __dirname + '/controllers/**/*.js', {
  multipart: {
    dest: './uploads'
  }
})
app.listen(8888)