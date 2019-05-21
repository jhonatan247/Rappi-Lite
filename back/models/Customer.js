const Customer = require('../sequelize-models').Customer;
let sequelize = require('../sequelize-models').sequelize;
let Address = require('./Address');
let User = require('./User');

module.exports.create = function(userData) {
  return sequelize.transaction(t =>
    User.create(userData, t).then(user =>
      Customer.create({ user_id: user.dataValues.id }, { transaction: t }).then(
        customer => user.setCustomer(customer, { transaction: t })
      )
    )
  );
};

module.exports.saveAddress = function(addressData, user_id) {
  addressData.user_id = user_id;
  return sequelize.transaction(t =>
    Address.save(addressData, t).then(address =>
      Customer.update(
        { actual_address_id: address.id },
        { where: { user_id: user_id } },
        { transaction: t }
      )
    )
  );
};

module.exports.addressesById = async function(user_id) {
  return await Customer.findOne({
    include: [
      {
        model: sequelize.models.Address,
        as: 'actualAddress'
      },
      {
        model: sequelize.models.Address,
        as: 'addresses',
        where: {
          id: {
            [ne]: 'actualAddress.id'
          }
        }
      }
    ],
    where: { user_id: user_id }
  });
};

module.exports.personalInfoById = async function(user_id) {
  return await Customer.findOne({
    include: [
      {
        model: sequelize.models.User,
        as: 'personalInfo'
      }
    ],
    where: { user_id: user_id }
  });
};

module.exports.getActualAddress = async function(user_id) {
  let customer = await Customer.findOne({
    include: [
      {
        model: sequelize.models.Address,
        as: 'actualAddress'
      }
    ],
    where: { user_id: user_id }
  });
  return customer.actualAddress;
};

module.exports.selectActualAddress = async function(user_id, address_id) {
  return await Customer.update(
    { actual_address_id: address_id },
    { where: { user_id: user_id } }
  );
};

module.exports.addToShoppingCart = function(offer_id, user_id) {};
