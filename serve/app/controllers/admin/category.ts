import { Controller, Get, Ctx, Post } from 'koa-controllers'
import { Context } from 'koa';
import {CategoryModel}  from '../../models/category'
import Sequelize from 'sequelize'
import Tree from '../../libs/Tree'

@Controller
export class AdminIndexController {
  @Get('/api/admin/category')
  public async index( @Ctx ctx: Context ) {
    // CategoryModel.findById(1)
    const categoryData = await CategoryModel.findAll()
    let data = categoryData.map(category => {
      return {
        id: category.get('id'),
        pid: category.get('pid'),
        name: category.get('name'),
      }
    })
    let datas = new Tree(data).getTree(0)
    return ctx.body = datas
  }
  @Post('/api/admin/category/addCategory')
  public async add ( @Ctx ctx: Context ) {
    let name = ctx.request.body.name || ''
    let pid = parseFloat(ctx.request.body.pid) || 0
    if (!name) {
      return ctx.body = {
        code: 201,
        data: '输入的内容不能为空'
      }
    }
    let category = CategoryModel.build({
      name,pid
    })
    await category.save()

    return ctx.body = {
      code: 200,
      data: category
    }
  }

  @Post('/api/admin/category/uplodeCate')
  public async addChild ( @Ctx ctx: Context ) {
    let name = ctx.request.body.name || ''
    let id = parseFloat(ctx.request.body.id) || 0
    if (!name) {
      return ctx.body = {
        code: 201,
        data: '输入的内容不能为空'
      }
    }
    // let category = CategoryModel.update({
    //   name
    // },{
    //   where: {
    //     id:1000
    //   }
    // })
    
    let data = await CategoryModel.findById(id)
    if (!data) {
      return ctx.body = {
        code:201,
        data: '你输入的Id有问题'
      }
    } 
    data.set('name', name)
    data.save()
    return ctx.body = {
      code: 200,
      data
    }
  }


  @Post('/api/admin/category/remove')
  public async remove ( @Ctx ctx: Context ) {
    let id = parseFloat(ctx.request.body.id)
    
    let data = await CategoryModel.findById(id)
    if (!data) {
      return ctx.body = {
        code:201,
        data: '你输入的Id有问题'
      }
    }
    CategoryModel.destroy({
      where: {
        [Sequelize.Op.or]:[
          {id:id},
          {pid:id}
        ]
      }
    })
    
    return ctx.body = {
      code: 200,
      data: '删除成功'
    }
  }
}

// 小知识
// __dirname: 当前这个文件所在的绝对路径
// process.cwd 当前运行改文件命令 所在的目录 