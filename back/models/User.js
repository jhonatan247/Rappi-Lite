const User = require('../sequelize-models').User;
let Guard = require('./Guard');

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
    console.log('working here');
    return new Promise(function(solve, reject) {
        let credentials = Guard.generateCredentials(userData.password);
        User.create({
            email: userData.email,
            hash: credentials.hash,
            type: userData.type,
            id_number: userData.id_number,
            name: userData.name,
            phone: userData.phone,
            salt: credentials.salt
        })
        .then((user) => {
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