// Modules
const { config } = require('../config/environment')

// Packages
const { Responder } = require('cote')

// Constants
const productResponder = new Responder({
    name: config.microservicesNameSpaces.product.name,
    key: config.microservicesNameSpaces.product.key,
    port: 8111
})

// Models
const { ProductCatalogueModel } = require('../models/product-catalogue.model')

productResponder.on(config.microservicesNameSpaces.product.types.getProducts, async (req, callback) => {
    delete req.type

    try {
        const products = await ProductCatalogueModel.find({})
        return products
    } catch (error) {
        // logger.erro({ message: 'Couldn't get the products from the collection in mongo', meta: error })
        return null
    }
})
