// Modules
const { config } = require('../config/environment')
const { logger } = require('../middlewares/logger')

// Packages
const { Responder } = require('cote')

// Constants
const productResponder = new Responder({
    name: config.microservicesNameSpaces.product.name,
    key: config.microservicesNameSpaces.product.key,
})

// Models
const { ProductCatalogueModel } = require('../models/product-catalogue.model')

productResponder.on('get-products'/*config.microservicesNameSpaces.product.types.getProducts*/, async (req, callback) => {
    delete req.type
    try {
        console.log('si llego')
        const products = await ProductCatalogueModel.find({})
        return products
    } catch (error) {
        logger.log('error', `Couldn't get the products from the collection in mongo`)
        return null
    }
})
