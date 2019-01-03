import { Controller, Get, Ctx } from 'koa-controllers'
import * as Koa from 'koa';

@Controller
export class MainIndexController {
  @Get('/index/main/index/datalist')
  public async login(@Ctx ctx: Context) {
    
  }
}

// 小知识
// __dirname: 当前这个文件所在的绝对路径
// process.cwd 当前运行改文件命令 所在的目录 