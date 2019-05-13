let jwt = require('jsonwebtoken');
let crypto = require('crypto');
const config = require('../config/config.js');
let User = require('./User');

var generateRandomString = function(length) {
    return crypto.randomBytes(Math.ceil(length/2))
    .toString('hex')
    .slice(0,length);
};

let generateCredentials = function(password) {
    let salt = generateRandomString(16);
    let hash = crypto.createHash('SHA256').update(password + salt).digest('hex');
    return {
        hash: hash,
        salt: salt
    }
}

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
                let hash = crypto.createHash('SHA256').update(password + user.salt).digest('hex');
                if (hash === user.hash) {
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
    generateCredentials: generateCredentials,
    checkToken: checkToken,
    createToken: createToken,
    deleteToken: deleteToken
}