// Modules
const { config } = require('../config/environment')
const { logger } = require('../middlewares/logger')

// Packages
const { Responder } = require('cote')

// Constants
const productResponder = new Responder({
    name: config.microservicesNameSpaces.products.name,
    key: config.microservicesNameSpaces.products.key,
})

// Models
const { SoldProductModel } = require('../models/sold-products.model')

productResponder.on(config.microservicesNameSpaces.products.types.getProducts, async (req, callback) => {
    delete req.type
    try {
        const products = await SoldProductModel.aggregate([
            { $lookup: { from: 'product-catalogues', localField: 'product_id', foreignField: 'product_id', as: 'product' } },
            { $sort: { quantity_sold: -1 } },
            { $limit: 5}
        ])
        return products
    } catch (error) {
        logger.log('error', `Couldn't get the products from the collection in mongo`, error)
        return null
    }
})
