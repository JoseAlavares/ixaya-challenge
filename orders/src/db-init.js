'use strict'

const { logger } = require('./middlewares/logger')
const { OrderModel } = require('./models/order.model')

const orders = [{
    'user_id': 1,
    'street_name': 'Elm 12',
    'zip_code': 10000,
    'address': 'Col lomas del paseo',
    'state': 'Monterrey',
    'city': 'Nuevo Leon',
    'product_list': [{
        'product_id': 1,
        'qty': 50
    }],
    'active': true,
    'created_at': '2022-09-14T13:00:00'
}, {
    'user_id': 1,
    'street_name': 'Paseo de las rosas',
    'zip_code': 10000,
    'address': 'Col lomas del paseo',
    'state': 'Monterrey',
    'city': 'Nuevo Leon',
    'product_list': [{
        'product_id': 1,
        'qty': 50
    },],
    'active': true,
    'created_at': '2022-09-14T13:00:00'
}, {
    'user_id': 2,
    'street_name': 'Paseo de las magnolias',
    'zip_code': 10000,
    'address': 'Col lomas del paseo',
    'state': 'Monterrey',
    'city': 'Nuevo Leon',
    'product_list': [{
        'product_id': 2,
        'qty': 73
    }, {
        'product_id': 3,
        'qty': 100
    },],
    'active': true,
    'created_at': '2022-09-14T13:00:00'
}, {
    'user_id': 3,
    'street_name': 'Paseo de los plumbagos',
    'zip_code': 10000,
    'address': 'Col lomas del paseo',
    'state': 'Monterrey',
    'city': 'Nuevo Leon',
    'product_list': [{
        'product_id': 2,
        'qty': 200
    }, {
        'product_id': 3,
        'qty': 53
    },],
    'active': true,
    'created_at': '2022-09-14T13:00:00'
}, {
    'user_id': 4,
    'street_name': 'Paseo de los espinas',
    'zip_code': 10000,
    'address': 'Col lomas del paseo',
    'state': 'Monterrey',
    'city': 'Nuevo Leon',
    'product_list': [{
        'product_id': 4,
        'qty': 346
    }, {
        'product_id': 5,
        'qty': 453
    }, {
        'product_id': 6,
        'qty': 67
    }, {
        'product_id': 7,
        'qty': 237
    }, {
        'product_id': 8,
        'qty': 178
    },],
    'active': true,
    'created_at': '2022-09-14T13:00:00'
}, {
    'user_id': 5,
    'street_name': 'Paseo de los reyes',
    'zip_code': 10000,
    'address': 'Col lomas del paseo',
    'state': 'Monterrey',
    'city': 'Nuevo Leon',
    'product_list': [{
        'product_id': 9,
        'qty': 85
    }, {
        'product_id': 10,
        'qty': 200
    }, {
        'product_id': 11,
        'qty': 18
    },],
    'active': true,
    'created_at': '2022-09-14T13:00:00'
}, {
    'user_id': 6,
    'street_name': 'Paseo de los reyes',
    'zip_code': 10000,
    'address': 'Col lomas del paseo',
    'state': 'Monterrey',
    'city': 'Nuevo Leon',
    'product_list': [{
        'product_id': 9,
        'qty': 200
    }, {
        'product_id': 10,
        'qty': 366
    }, {
        'product_id': 11,
        'qty': 60
    },],
    'active': true,
    'created_at': '2022-09-14T13:00:00'
}, {
    'user_id': 7,
    'street_name': 'Paseo de los mares',
    'zip_code': 10000,
    'address': 'Col lomas del paseo',
    'state': 'Monterrey',
    'city': 'Nuevo Leon',
    'product_list': [{
        'product_id': 12,
        'qty': 346
    }, {
        'product_id': 13,
        'qty': 1283
    }, {
        'product_id': 14,
        'qty': 124
    },],
    'active': true,
    'created_at': '2022-09-14T13:00:00'
}, {
    'user_id': 8,
    'street_name': 'Paseo de los mares',
    'zip_code': 10000,
    'address': 'Col lomas del paseo',
    'state': 'Monterrey',
    'city': 'Nuevo Leon',
    'product_list': [{
        'product_id': 15,
        'qty': 45
    }, {
        'product_id': 16,
        'qty': 434
    }, {
        'product_id': 17,
        'qty': 567
    },],
    'active': true,
    'created_at': '2022-09-14T13:00:00'
}]

try {
    OrderModel.deleteMany({}).then(() => OrderModel.insertMany(orders))

    logger.log('info', 'Successful seeding process')
} catch (error) {
    logger.log('error', 'Error in the seeding process', error)
}
