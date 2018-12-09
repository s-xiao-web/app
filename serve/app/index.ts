import * as Koa from 'koa'
import { useControllers } from 'koa-controllers'
const app = new Koa()

useControllers(app, __dirname + '/controllers/**/*.js', {
  multipart: {
    dest: './uploads'
  }
})
app.listen(8888)