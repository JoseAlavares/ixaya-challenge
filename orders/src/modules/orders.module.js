// Modules
const { config } = require('../config/environment')
const { logger } = require('../middlewares/logger')

// Packages
const { Responder } = require('cote')

// Constants
const orderResponder = new Responder({
    name: config.microservicesNameSpaces.product.name,
    key: config.microservicesNameSpaces.product.key,
    // port: 8112
})

// Models
const { OrderModel } = require('../models/order.model')

orderResponder.on(config.microservicesNameSpaces.order.types.getOrder, async (req, callback) => {
    delete req.type

    try {
        const order = await OrderModel.find({})
        return order
    } catch (error) {
        logger.log('error', `Couldn't get the orders from the collection in mongo`)
        return null
    }
})
