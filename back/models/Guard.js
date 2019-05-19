let jwt = require('jsonwebtoken');
let crypto = require('crypto');
const config = require('../config/config.js');
let User = require('./User');
let Customer = require('./').Customer;


let generateRandomString = function(length) {
    return crypto.randomBytes(Math.ceil(length/2))
    .toString('hex')
    .slice(0,length);
};

module.exports.generateCredentials = function(password) {
    let salt = generateRandomString(100);
    let hash = crypto.createHash('SHA256').update(password + salt).digest('hex');
    return {
        hash: hash,
        salt: salt
    }
}

module.exports.checkToken = async function(req) {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token) {
        if (token.startsWith('Bearer '))
            token = token.slice(7, token.length);
        let decoded = jwt.verify(token, config.secret);
        let user = await User.findByEmail(decoded.email);
        if(user && user.connected && user.token == token) {
            return user.dataValues;
        } else { 
            throw Error("Token unauthorized");
        }
    } else {
        throw Error("Auth token was not supplied");
    }
}

module.exports.createToken = async function(userData) {
    let email = userData.email;
    let password = userData.password;
    if (email && password) {
        let user = await User.findByEmail(email);
        let hash = crypto.createHash('SHA256').update(password + user.salt).digest('hex');
        if (hash === user.hash && !user.connected) {
            let token = jwt.sign({
                id: user.id,
                type: user.type,
                name: user.name,
                id_number: user.id_number,
                phone: user.phone,
                email: user.email
            }, config.secret, { expiresIn: /*'120000'*/'24h' });
            await user.update({token: token, connected: true});
            return {
                token: token,
                user_data: {
                    type: user.type,
                    name: user.name
                }
            }
        } else {
            throw Error("Wrong password or email");
        }
    } else {
        throw Error("There is no user or email");
    }
}

module.exports.deleteToken = async function(userData) {
    let user = await User.findByEmail(userData.email);
    await user.update({token: null, connected: false});
}