// 数据库模型文件
// 1. 通过类对象 来完成数据库的链接

import * as Sequelize from 'sequelize'
import * as configs from '../../config/config.json'

// 根据当前环境变量动态加载 config  获取环境变量 node： process
const env = process.env.NODE_ENV || 'development'
const config = configs[env]

export default new Sequelize(config.database, config.username, config.password, config)
