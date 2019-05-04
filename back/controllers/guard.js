let Guard = require('../models').Guard;

let authorize = (req, res, next) => {
    Guard.checkToken(req)
    .then((decoded) => {
        req.decoded = decoded;
        next();
    }).catch((error) => res.status(400).send({ error: error }));
};

let authenticate = (req, res) => {
    Guard.createToken(req)
    .then((passport) => 
        res.json({
            success: true,
            message: 'Authentication successful',
            token: passport.token,
            user_data: passport.user_data
        })
    )
    .catch((error) => res.status(400).send({ error: error }));
};

let disavow = (req, res) => {
    Guard.deleteToken(req.decoded)
    .then(() => 
        res.json({
            success: true,
            message: 'Token already disavowed'
        })
    )
    .catch((error) => res.status(400).send({ error: error }));
};

module.exports = {
    authorize: authorize,
    authenticate: authenticate,
    disavow: disavow 
}