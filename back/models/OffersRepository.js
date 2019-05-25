const Offer = require('../sequelize-models').Offer;
let sequelize = require('../sequelize-models').sequelize;

module.exports.getById = async function(offer_id) {
    return await Offer.findOne({
        include: [
            {
                model: sequelize.models.Restaurant,
                as: 'restaurant'
            }
        ],
        where: {
            id: offer_id,
            availability: true
        }
    });
}