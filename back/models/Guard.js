let jwt = require('jsonwebtoken');
const config = require('../config/config.js');
let User = require('./').User;

let checkToken = (req) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            return {
                error: error,
                decoded: decoded
            };
        });
    } else {
        return false;
    }
};

let createToken = (req) => {
    let email = req.body.email;
    let password = req.body.password;
    if(email && password) {
        User.findByEmail(req.body.email).then((user) => {
            if (password === user.password) {
                let token = jwt.sign({ email: email }, config.secret, { expiresIn: '24h' });
                return {
                    token: token,
                    user_data: {
                        type: user.type,
                        name: user.name,
                        id_number: user.id_number,
                        phone: user.phone,
                        email: user.email,
                    }
                };
            } else {
                return false;
            }
        });
    } else {
        return false;
    }
}

let deleteToken = (req) => {
    //Manage the signout of a user.
}
  
module.exports = {
    checkToken: checkToken,
    createToken: createToken,
    deleteToken: deleteToken
}