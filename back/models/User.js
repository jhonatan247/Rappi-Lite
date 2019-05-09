const User = require('../sequelize-models').User;

let findByEmail = function(email) {
    return new Promise(function(solve, reject) {
        User.findOne({ where: { email: email } })
        .then((user) => {
            console.log(user.dataValues + '\ntrying to login into the app');
            if(user) solve(user.dataValues);
            else reject(Error("there is no user with email: " + email));
        })
        .catch((error) => reject(error));
    });
};

let register = function(userData) {
    return new Promise(function(solve, reject) {
        let salt = Math.floor((Math.random() * 10) + 1) + 'salt';
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
            console.log('trying to create a user: ' + user);
            if(user) solve();
            else reject(Error("can't create user"));
        })
        .catch((error) => reject(error));
    });
};
  
module.exports = {
    findByEmail: findByEmail,
    register: register
}