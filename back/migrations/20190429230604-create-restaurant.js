'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurant_admin_id: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING,
        unique: true
      },
      position: {
        allowNull: false,
        type: Sequelize.GEOMETRY('POINT', 4326),
        validate: {
          notEmpty: true
        }
      },
      name: {
        type: Sequelize.STRING
      },
      url_img: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Restaurants');
  }
};
