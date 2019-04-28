let Guard = require('../models').Guard;

let authorize = (req, res, next) => {
    Guard.checkToken(req).then((passport) => {
        if (passport) {
            if (passport.error) {
                return res.status(400).send({
                    error: passport.error
                });
            } else {
                req.decoded = passport.decoded,
                next();
            }
        } else {
            return res.json({
                success: false,
                message: 'Auth token is not supplied'
            });
        }
    }).catch(() => res.json({
        success: false,
        message: 'Unknown error'
    }));
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
    // React to the sign out feature of the app
};

module.exports = {
    authorize: authorize,
    authenticate: authenticate,
    disavow: disavow 
}