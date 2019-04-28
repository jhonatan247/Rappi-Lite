const User = require('../sequelize-models').User;

let findByEmail = (email) => {
    USer.findAll({ where: { email: email } })
    .then((users) => { return users[0] ? users[0].data : false})
    .catch((error) => { return error });
}
  
module.exports = {
    findByEmail: findByEmail
}