const config = {
    microservicesNameSpaces: {
        products: {
            name: 'requester_products',
            key: 'products',
            types: {
                getProducts: 'get-products'
            }
        },
    },
    publishersAndSubscribers: {
        products: {
            name: 'subscriber-products',
            key: 'products',
            types: {
                updateSoldQuantity :'update-sold-quantity'
            }
        }
    }
}

module.exports = { config }