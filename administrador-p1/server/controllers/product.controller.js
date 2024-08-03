const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { name, price, description } = request.body;
    Product.create({
        name, 
        price, 
        description
    })
    .then(product => response.json(product))
    .catch(err => response.json(err));
}

