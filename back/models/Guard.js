let jwt = require('jsonwebtoken');
const config = require('../config/config.js');
let User = require('./User');

let checkToken = function(req) {
    return new Promise(function(solve, reject){
        let token = req.headers['x-access-token'] || req.headers['authorization'];
        if (token) {
            if (token.startsWith('Bearer '))
                token = token.slice(7, token.length);
            jwt.verify(token, config.secret, (error, decoded) => {
                if(error) reject(error);
                else solve(decoded);
            });
        } else {
            reject(Error("Auth token was not supplied"));
        }
    });
};

let createToken = function(req) {
    let email = req.body.email;
    let password = req.body.password;
    return new Promise(function(solve, reject){
        if (email && password) {
            User.findByEmail(email)
            .then((user) => {
                if (password === user.password) {
                    let token = jwt.sign({
                        type: user.type,
                        name: user.name,
                        id_number: user.id_number,
                        phone: user.phone,
                        email: user.email
                    }, config.secret, { expiresIn: /*'120000'*/'24h' });
                    solve({
                        token: token,
                        user_data: {
                            id: user.id,
                            type: user.type,
                            name: user.name,
                        }
                    });
                } else {
                    reject(Error("Wrong password"));
                }
            })
            .catch((error) => reject(error));
        } else {
            reject(Error("There is no user or email"));
        } 
    });
}

let deleteToken = function(req) {
    return new Promise(function(solve, reject){
        solve();
    });
}

module.exports = {
    checkToken: checkToken,
    createToken: createToken,
    deleteToken: deleteToken
}