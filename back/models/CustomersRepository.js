let sequelize = require('../sequelize-models').sequelize;
const Customer = require('../sequelize-models').Customer;
let ShoppingCartRepository = require('./ShoppingCartsRepository');
let User = require('./UsersRepository');

module.exports.create = function(userData) {
    return sequelize.transaction(t =>
      User.create(userData, t).then(user =>
        Customer.create({ user_id: user.dataValues.id }, { transaction: t }).then(customer => 
          ShoppingCartRepository.create(customer.user_id, t)
        )
      )
    );
  };