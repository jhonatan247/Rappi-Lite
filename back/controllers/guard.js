let Guard = require('../models').Guard;

module.exports.authorize = (req, res, next) => {
    Guard.checkToken(req)
    .then((decoded) => {
        req.decoded = decoded;
        next();
    })
    .catch((error) => res.status(500).json({message: error.message}));
}

module.exports.authenticate = (req, res) => {
    Guard.createToken(req.body)
    .then((passport) => 
        res.json({
            success: true,
            message: 'Authentication successful',
            token: passport.token,
            user_data: passport.user_data
        })
    )
    .catch((error) => res.status(500).json({message: error.message}));
}

module.exports.disavow = (req, res) => {
    Guard.deleteToken(req.decoded)
    .then(() => 
        res.json({
            success: true,
            message: 'Token already disavowed'
        })
    )
    .catch((error) => res.status(500).json({message: error.message}));
}
