import { Controller, Get, Ctx,Post } from 'koa-controllers'
import { Context } from 'koa';
import {UserModel} from '../../models/user'
@Controller
export class MainUserController {
  
}

// 小知识
// __dirname: 当前这个文件所在的绝对路径
// process.cwd 当前运行改文件命令 所在的目录 