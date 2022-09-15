'use strict'

const config = {
    environment: {
        appPort: process.env.PORT,
        apiKey: process.env.API_KEY
    },
    microservicesNameSpaces: {
        products: {
            name: 'requester_products',
            key: 'products',
            types: {
                getProducts: 'get-products'
            }
        },
        orders: {
            name: 'requester_orders',
            key: 'orders',
            types: {
                getOrders: 'get-orders'
            }
        }
    }
}

module.exports = { config }