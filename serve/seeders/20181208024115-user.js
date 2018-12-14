const moment = require('moment');
const md5 = require('md5')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [
      {
        id: 1,
        username: 'sunxiao',
        password: md5('123456'),
        disabled: false,
        createdIpAt: '127.0.0.1',
        updatedIpAt: '127.0.0.1',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 2,
        username: 'admin',
        password: md5('123456'),
        disabled: false,
        createdIpAt: '127.0.0.1',
        updatedIpAt: '127.0.0.1',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
