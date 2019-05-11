'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [
          'admin',
          'shopkeeper',
          'customer',
          'restaurant_admin'
        ],
        validate: {
          notEmpty: true
        }
      },
      id_number: {
        allowNull: false,
        type: Sequelize.BIGINT,
        unique: true,
        validate: {
          notEmpty: true,
          not: ['[a-z]', 'i']
        }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      phone: {
        allowNull: false,
        type: Sequelize.BIGINT,
        validate: {
          notEmpty: true,
          not: ['[a-z]', 'i']
        }
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          notEmpty: true,
          isEmail: true
        }
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
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
    return queryInterface.dropTable('Users');
  }
};
