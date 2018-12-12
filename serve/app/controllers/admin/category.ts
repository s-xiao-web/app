import { Controller, Get, Ctx, Post } from 'koa-controllers'
import { Context } from 'koa';
import {CategoryModel}  from '../../models/category'
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
}

// 小知识
// __dirname: 当前这个文件所在的绝对路径
// process.cwd 当前运行改文件命令 所在的目录 