const config = {
    microservicesNameSpaces: {
        products: {
            name: 'requester_products',
            key: 'products',
            types: {
                getProducts: 'get-products',
                getTopProductsByDates: 'get-top-products-by-dates',
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