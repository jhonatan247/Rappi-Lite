const Customer = require('../sequelize-models').Customer;
let sequelize = require('../sequelize-models').sequelize;
let AddressesRepository = require('./AddressesRepository');

module.exports.saveAddress = function(user_id, addressData) {
  addressData.user_id = user_id;
  return sequelize.transaction(t =>
    AddressesRepository.create(addressData, t).then(address =>
      Customer.update(
        { actual_address_id: address.id },
        { where: { user_id: user_id } },
        { transaction: t }
      )
    )
  );
};

module.exports.addresses = async function(user_id) {
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

module.exports.personalInfo = async function(user_id) {
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

module.exports.actualAddress = async function(user_id) {
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

module.exports.addToShoppingCart = function(user_id, offer_id) {
  
};
