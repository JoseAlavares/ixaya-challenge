const config = {
    microservicesNameSpaces: {
        product: {
            name: 'responder_product',
            key: 'products',
            types: {
                getProducts: 'get-products'
            }
        }
    }
}

module.exports = { config }