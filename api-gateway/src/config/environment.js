'use strict'

const config = {
    environment: {
        appPort: process.env.PORT,
        apiKey: process.env.API_KEY
    },
    microservicesNameSpaces: {
        products: {
            name: 'products',
            types: {
                getProducts: 'get-products'
            }
        }
    }
}

module.exports = { config }