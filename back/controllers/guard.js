let Guard = require('../models').Guard;

let authorize = (req, res, next) => {
    Guard.checkToken(req)
    .then((decoded) => {
        if (decoded) {
            req.decoded = decoded;
            next();
        } else {
            return res.json({
                success: false,
                message: 'Auth token is not supplied'
            });
        }
    }).catch((error) => res.status(400).send({ error: error }));
};

let authenticate = (req, res) => {
    Guard.createToken(req)
    .then((passport) => {
        if(passport) {
            return res.json({
                success: true,
                message: 'Authentication successful',
                token: passport.token,
                user_data: passport.user_data
            })
        } else {
            return res.json({
                success: false,
                massege: 'Incorrect email or password'
            })
        }
    })
    .catch((error) => res.status(400).send({ error: error }));
};

let disavow = (req, res) => {
    Guard.deleteToken(req.decoded)
    .then((status) => {
        var message = status ? 'Token already disavowed' : 'Cannot disavow token in this moment';
        return res.json({
            status: status,
            message: message,
        });
    })
    .catch((error) => res.status(400).send({ error: error }));
};

module.exports = {
    authorize: authorize,
    authenticate: authenticate,
    disavow: disavow 
}