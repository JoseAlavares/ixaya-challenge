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
                getProducts: 'get-products',
                getTopProductsByDates: 'get-top-products-by-dates',
            }
        },
        orders: {
            name: 'requester_orders',
            key: 'orders',
            types: {
                getOrdersByUser: 'get-orders-by-user',
                getOrdersListRecord: 'get-orders-list-record',
                getOrderDetail: 'get-order-detail',
                createOrder: 'create-order'
            }
        },
        users: {
            name: 'requester_users',
            key: 'users',
            types: {
                getUsers: 'get-users',
                createUser: 'create-user',
                loginUser: 'login-user'
            }
        }
    }
}

module.exports = { config }