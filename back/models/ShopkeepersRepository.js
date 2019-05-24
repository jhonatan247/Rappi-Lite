const Shopkeeper = require('../sequelize-models').Shopkeeper;
let sequelize = require('../sequelize-models').sequelize;
let User = require('./UsersRepository');

module.exports.create = function(userData) {
  return sequelize.transaction(t =>
    User.create(userData, t).then(user =>
      Shopkeeper.create(
        { user_id: user.dataValues.id },
        { transaction: t }
      )
    )
  );
};
