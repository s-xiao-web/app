import { Controller, Get, Ctx } from 'koa-controllers'
import { Context } from 'koa';
import {CategoryModel}  from '../../models/category'
import Tree from '../../libs/Tree'
@Controller
export class MainIndexController {
  @Get('/')
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
    ctx.body = datas
  }
}

// 小知识
// __dirname: 当前这个文件所在的绝对路径
// process.cwd 当前运行改文件命令 所在的目录 