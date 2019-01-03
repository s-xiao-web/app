import * as Koa from 'koa'
import { useControllers } from 'koa-controllers'
import * as KoaBodyParser from 'koa-bodyparser'
import * as session from 'koa-session'
const app = new Koa()

app.keys=['sunxiao']
app.use(session({},app))
app.use(KoaBodyParser())

useControllers(app, __dirname + '/controllers/**/*.js', {
  multipart: {
    dest: './uploads'
  }
})
app.listen(8888)