import { Controller, Get, Ctx, Post, RequestParam, Before, MultipartFile } from 'koa-controllers'
import { Context } from 'koa';
import { UserModel } from '../../models/user'
import * as md5 from 'md5'
import UserAuth from '../../middlewares/user_auth'
const multer = require('koa-multer');

@Controller
export class MainUserController {
  // 用户登录
  @Post('/index/main/user/login')
  public async login(@Ctx ctx: Context) {
    let { username, password } = ctx.request.body
    if (!username || !password) {
      return ctx.body = {
        code: 1,
        body: '你输入的存在问题'
      }
    }
    let data = await UserModel.findOne({
      where: {
        username
      }
    })
    if (data && data.get('disabled')) {
      return ctx.body = {
        code: 3,
        message: '该用户已经被禁用'
      }
    }
    if (!data || md5(password) != data.get('password')) {
      return ctx.body = {
        data: '用户名或密码不对'
      }
    } else {
      ctx.session.username = "张三"
      return ctx.body = {
        data: {
          code: 0,
          data: data.get('password')
        }
      }
    }
  }

  // @Get('/user/logout')
  // public logout(@Ctx ctx: Context) {
  //   ctx.session = null
  // }

  @Before(UserAuth)
  @Get('index/main/user/login')
  public async postTest(@Ctx ctx: Context) {
    return ctx.body = {
      data: '你还没有登录啊'
    }
  }

  // 用户退出登录
  // @Post('/user/avatar')
  // public postAvatar(@RequestParam('avatar', {file: true}) avatar:MultipartFile, @Ctx ctx: Context) {
  //   // console.log( avatar)
  // }
}

// 小知识
// __dirname: 当前这个文件所在的绝对路径
// process.cwd 当前运行改文件命令 所在的目录 