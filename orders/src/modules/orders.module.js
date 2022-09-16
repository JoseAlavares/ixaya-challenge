// Modules
const { config } = require('../config/environment')
const { logger } = require('../middlewares/logger')
const { ObjectId } = require('mongoose')

// Packages
const { Responder } = require('cote')

// Constants
const orderResponder = new Responder({
    name: config.microservicesNameSpaces.orders.name,
    key: config.microservicesNameSpaces.orders.key
})

// Models
const { OrderModel } = require('../models/order.model')

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

orderResponder.on(config.microservicesNameSpaces.orders.types.getOrderDetail, async (req, callback) => {
    delete req.type

    console.log(req)
    try {
        // const query = { _id: ObjectId(req.orderId) }
        const order = await OrderModel.findById(req.orderId)
        console.log(order)
        return order
    } catch (error) {
        logger.log('error', `Couldn't get the orders from the collection in mongo`, error)
        return null
    }
})
