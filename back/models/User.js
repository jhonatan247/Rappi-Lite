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

let register = function(userData) {
    return new Promise(function(solve, reject) {
        let salt = '#{MATH.floor((Math.random() * 10) + 1)}salt';
        console.log('salt: ' + salt);
        User.create({
            email: userData.email,
            password: userData.password,
            type: userData.type,
            id_number: userData.id_number,
            name: userData.name,
            phone: userData.phone,
            salt: salt
        })
        .then((user) => {
            if(user) {
                solve(true);
            } else {
                solve(false);
            }
        })
        .catch((error) => { 
            reject(error); 
        });
    });
};
  
module.exports = {
    findByEmail: findByEmail,
    register: register
}