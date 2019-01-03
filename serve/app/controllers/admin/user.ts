import { Controller, Get, Ctx, Post } from 'koa-controllers'
import { Context } from 'koa';
import {UserModel}  from '../../models/user'
import * as Sequelize from 'sequelize'
import Tree from '../../libs/Tree'
import * as md5 from 'md5'
@Controller
export class AdminIndexUser {
  // 获取主表数据
  @Get('/api/admin/user')
  public async index(@Ctx ctx: Context ) {
    //页码数 从 1 开始计算 
    let page = Number(ctx.query.page) || 1
    // 每页显示2条
    let limit = Number(ctx.query.limit) || 2
    let offset = (page - 1) * limit 
    
    let data = await UserModel.findAndCountAll({
      attributes:{
        exclude:['password']
      },
      // 每次返回几条数据
      limit,
      // 从第几条开始
      offset
    })
    return ctx.body = {
      code: 200,
      data
    }
  }

  // 用于更新是否禁用用户
  @Post('/api/admin/user/status')
  public async static(@Ctx ctx:Context) {
    let id = Number(ctx.request.body.id)
    let data = await UserModel.findById(id)
    if (!data) {
      return ctx.body = {
        code:201,
        data:'不存在该用户'
      }
    }
    data.set('disabled', !data.get('disabled'))
    await data.save()
    return ctx.body = {
      code: 200,
      data: {
        id: data.get('id'),
        disabled: Number(data.get('disabled'))
      }
    }
  }
  // 删除用户
  @Post('/api/admin/user/delate')
  public async removeUser(@Ctx ctx:Context) {
    let id = ctx.request.body.id
    let data = await UserModel.findById(id)
    if (!data) {
      return ctx.body = {
        code: 201,
        data: '你输入的ID不存在'
      }
    }
    data.destroy()
    return ctx.body = {
      code: 200,
      data: '成功'
    }
  }
  // 用户注册
  @Post('/api/main/user/register')
  public async register( @Ctx ctx: Context ) {
    let {username, password, repassword} = ctx.request.body

    if (!username || !password || !repassword) {
      return ctx.body = {
        code: 1,
        data: '存在null值'
      }
    }
    if (!Object.is(password,repassword)) {
      return ctx.body = {
        code: 2,
        data: '两次密码输入的不一致'
      }
    }
    
    let data = await UserModel.findOne({
      where: {
        username:username
      }
    })
    if (data) {
      return ctx.body = {
        code: 3,
        data: '用户名存在重复'
      }
    }
    let sucData = await UserModel.build({
      username:username,
      password:md5(password),
      createdIpAt:ctx.ip,
      updatedIpAt:ctx.ip
    })
    await sucData.save()
    return ctx.body = {
      code:0,
      data: 'sucess'
    }
  }
  // 用户登录
  @Post('/api/main/user/login')
  public async login(@Ctx ctx: Context) {
    let {username, password} = ctx.request.body
    if (!username||!password) {
      return ctx.body = {
        code: 1,
        body: '你输入的存在问题'
      }
    }
    let data = await UserModel.findOne({
      where:{
        username
      }
    })
    console.log( data )
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
      return ctx.body = {
        data: {
          code: 0,
          data: 'success 登录成功'
        }
      }
    }
  }
}

// 小知识
// __dirname: 当前这个文件所在的绝对路径
// process.cwd 当前运行改文件命令 所在的目录 