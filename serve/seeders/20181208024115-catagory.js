const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('category', [
      {
        id: 1,
        name: '常见菜式',
        pid: 0,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 2,
        name: '主食/小吃',
        pid: 0,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 3,
        name: '甜品/饮品',
        pid: 0,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 4,
        name: '适宜人群',
        pid: 0,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 5,
        name: '食疗食补',
        pid: 0,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 6,
        name: '场景',
        pid: 0,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 7,
        name: '饮食方式',
        pid: 0,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 8,
        name: '中式菜系',
        pid: 0,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 9,
        name: '外国美食',
        pid: 0,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 10,
        name: '烘焙',
        pid: 0,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 11,
        name: '传统美食',
        pid: 0,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 12,
        name: '节日食俗',
        pid: 0,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 13,
        name: '热菜',
        pid: 1,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 14,
        name: '凉菜',
        pid: 1,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 15,
        name: '炒饭',
        pid: 2,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 16,
        name: '面食',
        pid: 2,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 17,
        name: '甜品',
        pid: 3,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 18,
        name: '冰品',
        pid: 3,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 19,
        name: '儿童',
        pid: 4,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 20,
        name: '老人',
        pid: 4,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 21,
        name: '川菜',
        pid: 8,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 22,
        name: '鲁菜',
        pid: 8,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 23,
        name: '湘菜',
        pid: 8,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('category', null, {});
  }
};
