'use strict'

const { logger } = require('./middlewares/logger')
const { OrderModel } = require('./models/order.model')

const orders = [{
    'street_name': 'Elm 12',
    'zip_code': 10000,
    'address': 'Col lomas del paseo',
    'state': 'Monterrey',
    'city': 'Nuevo Leon',
    'product_list': [{
        'product_id': 1,
        'qty': 50
    }]
}]

try {
    ProductCatalogueModel.deleteMany({}).then(() => ProductCatalogueModel.insertMany(products))
    SoldProductModel.deleteMany({}).then(() => SoldProductModel.insertMany(sold))

    logger.log('info', 'Successful seeding process')
} catch (error) {
    logger.log('error', 'Error in the seeding process', error)
}
