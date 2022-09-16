// Modules
const { config } = require('../config/environment')
const { logger } = require('../middlewares/logger')

// Packages
const { Responder, Publisher } = require('cote')

// Constants
const orderResponder = new Responder({
    name: config.microservicesNameSpaces.orders.name,
    key: config.microservicesNameSpaces.orders.key
})
const productPublisher = new Publisher({
    name: 'proudct-publisher',
    // namespace: 'rnd',
    key: 'products',
    // broadcasts: ['randomUpdate'],
});


// Models
const { OrderModel } = require('../models/order.model')

// Action to get a order by a user_id
orderResponder.on(config.microservicesNameSpaces.orders.types.getOrdersByUser, async (req, callback) => {
    delete req.type

    try {
        const query = { user_id: parseInt(req.userIdFilter) }
        const orders = await OrderModel.find(query)

        return orders.map(order => ({ order_id: order._id }))
    } catch (error) {
        logger.log('error', `Couldn't get the orders from the collection in mongo`)
        return null
    }
})

// Action to get the orders history
orderResponder.on(config.microservicesNameSpaces.orders.types.getOrdersListRecord, async (req, callback) => {
    delete req.type

    try {
        const orders = await OrderModel.find({})
        return orders.map(order => ({ order_id: order._id }))
    } catch (error) {
        logger.log('error', `Couldn't get the orders from the collection in mongo`)
        return null
    }
})

// Action to get a order with their details
orderResponder.on(config.microservicesNameSpaces.orders.types.getOrderDetail, async (req, callback) => {
    delete req.type

    try {
        const order = await OrderModel.findById(req.orderId)
        return order
    } catch (error) {
        logger.log('error', `Couldn't get the orders from the collection in mongo`, error)
        return null
    }
})

// Action to create a order
orderResponder.on(config.microservicesNameSpaces.orders.types.createOrder, async (req, callback) => {
    delete req.type

    try {
        const newOrder = new OrderModel(req)
        const order = await newOrder.save(req)
        productPublisher.publish('update-quantity', order, 5000)
        logger.log('info', `The order ${order._id} was created successful`)
        return order
    } catch (error) {
        logger.log('error', `Couldn't create the order for the user_id: ${order.user_id}`, error)
        return null
    }
})
