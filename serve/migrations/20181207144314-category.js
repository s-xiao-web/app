'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('category', {
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
      tableName: 'category',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('category')
  }
};
