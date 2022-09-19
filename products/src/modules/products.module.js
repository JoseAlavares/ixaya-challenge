// Modules
const { config } = require('../config/environment')
const { logger } = require('../middlewares/logger')
const { startSession } = require('mongoose')

// Packages
const { Responder, Subscriber } = require('cote')

// Constants
const productResponder = new Responder({
    name: config.microservicesNameSpaces.products.name,
    key: config.microservicesNameSpaces.products.key,
})
const proudctSubscriber = new Subscriber({
    name: config.publishersAndSubscribers.products.name,
    key: config.publishersAndSubscribers.products.key
})

// Models
const { SoldProductModel } = require('../models/sold-products.model')
const { SoldLoggsModel } = require('../models/sold-loggs.model')

// Action to get products
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

// Action to get the top products filter by dates
productResponder.on(config.microservicesNameSpaces.products.types.getTopProductsByDates, async (req) => {
    try {
        const topProducts = await SoldLoggsModel.aggregate([
            { $match: { created_at: { $gte: new Date(req.start), $lte: new Date(req.end) } } },
            { $group: { _id: '$product_id', quantity: { $sum: '$quantity' } } },
            { $lookup: { from: 'product-catalogues', localField: '_id', foreignField: 'product_id', as: 'product' } },
            { $sort: { quantity: -1 } },
            { $limit: 5}
        ])
        return topProducts
    } catch (error) {
        logger.log('error', `Couldn't get the top products by dates`)
        return null
    }
})

// Subscribers
// Subscriber ti update the sold quantity in the products when a order is created
proudctSubscriber.on(config.publishersAndSubscribers.products.types.updateSoldQuantity, async (req) => {
    const session = await startSession()

    try {
        session.startTransaction()

        req?.product_list.forEach(product => {
            const { product_id, qty} = product
            SoldProductModel.findOneAndUpdate(
                { product_id },
                { $inc: { quantity_sold: qty } }
            ).catch(err => console.error)
            const data = { product_id, quantity: qty, created_at: new Date() }
            const logg = new SoldLoggsModel(data)
            logg.save()
        })

        await session.commitTransaction()
    } catch (error) {
        await session.abortTransaction()
        logger.log('error', 'Coudl`nt update the quantity sold in the products', error)
    } finally {
        session.endSession()
    }
})
