let Restaurant = require('../sequelize-models').Restaurant;
let ShoppingCart = require('../sequelize-models').ShoppingCart;
/*
let functionName = function(params) {
    return new Promise(function(solve, reject) {
        
    });
};
*/

let listOfNearby = function(address) {
    return new Promise(function(solve, reject) {
        if(address){
            Restaurant.findAll({
              order: [
                ["createdAt", 'DESC'],
                // [{ model: Address }, 'createdAt', 'DESC'],
              ],
            })
            .then((restaurants) => {
                restaurants[0].getOffers().then((offers) => {
                    offers[0].getShoppingCarts().then((carts) => {
                        carts[0].getCustomer().then((customer) => {
                            customer.getUser().then((user) => {
                                console.log('\n' + JSON.stringify(user) + '\n');
                            });
                        });
                    });
                    /*
                    ShoppingCart.findAll().then((carts) => {
                        console.log('\n' + carts.dataValues + '\n');
                        offers[0].addShoppingCart(carts[0]);
                    });
                    */
                    /*
                    offers[0].getShoppingCarts().then((carts) => {
                        console.log('\n' + carts + '\n');
                    });
                    */
                });
                solve(restaurants);
            })
            .catch((error) => reject(error));
        } 
        else {
            solve(false);
        }
    });
};

module.exports = {
    listOfNearby: listOfNearby
};