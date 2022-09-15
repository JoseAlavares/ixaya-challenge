const config = {
    microservicesNameSpaces: {
        products: {
            name: 'requester_products',
            key: 'products',
            types: {
                getProducts: 'get-products'
            }
        },
    }
}

module.exports = { config }