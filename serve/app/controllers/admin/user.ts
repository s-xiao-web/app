import { Controller, Get, Ctx, Post } from 'koa-controllers'
import { Context } from 'koa';
import {UserModel}  from '../../models/user'
import * as Sequelize from 'sequelize'
import Tree from '../../libs/Tree'

@Controller
export class AdminIndexUser {
  // 获取主表数据
  @Get('/api/admin/user')
  public async index(@Ctx ctx:Context) {
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
}

// 小知识
// __dirname: 当前这个文件所在的绝对路径
// process.cwd 当前运行改文件命令 所在的目录 