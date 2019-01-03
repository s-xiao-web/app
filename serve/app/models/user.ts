import * as Sequelize from 'sequelize'
import {Instance} from 'sequelize'
import sequelize from "./index";
import Fields from "./file_interface"
interface UserFields extends Fields{
  username?:string;
  password?:string;
  disabled?: boolean;
  avatar?: string;
  createdIpAt?: string;
  updatedIpAt?: string;
}

export const UserModel = sequelize.define<Instance<UserFields>,UserFields>('user', {
  
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull:false
  },
  username: {
    type: Sequelize.STRING(50),
    unique: true,
    allowNull: false,
    defaultValue: ''
  },
  avatar: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  password: {
    type: Sequelize.CHAR(32),
    allowNull: false,
    defaultValue: ''
  },
  disabled: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  createdIpAt: {
    type: Sequelize.CHAR(15),
    allowNull: false,
    defaultValue: ''
  },
  updatedIpAt: {
    type: Sequelize.CHAR(15),
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
  tableName: 'user'
})