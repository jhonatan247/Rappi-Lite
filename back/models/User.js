const User = require('../sequelize-models').User;

let findByEmail = function(email) {
    return new Promise(function(solve, reject) {
        User.findAll({ where: { email: email } })
        .then((users) => {
            if(users[0]) solve(users[0].dataValues);
            else reject(false);
        })
        .catch((error) => { 
            reject(error); 
        });
    });
};
  
module.exports = {
    findByEmail: findByEmail
}