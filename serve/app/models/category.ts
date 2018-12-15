import * as Sequelize from 'sequelize'
import {Instance} from 'sequelize'
import sequelize from "./index";
import Fields from "./file_interface"

interface CategoryFields extends Fields{
  name:string;
  pid:number;
}

export const CategoryModel = sequelize.define<Instance<CategoryFields>,CategoryFields>('category', {
  id: {
    type: Sequelize.INTEGER, // 整数类型
    primaryKey: true, // 是否为主键
    autoIncrement: true, // 自动增长
    allowNull: false // 是否为空
  },
  pid: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  name: {
    type: Sequelize.STRING, // string 可变长的字符串
    allowNull: false,
    defaultValue: ''
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
  }
}, {
  tableName: 'category'
})