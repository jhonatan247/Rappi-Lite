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
}

module.exports.getById = async function(shopkeeper_id) {
  return await Shopkeeper.findOne({
      where: {
          user_id: shopkeeper_id
      }
  });
}
