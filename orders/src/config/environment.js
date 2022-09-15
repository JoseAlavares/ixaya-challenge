const config = {
    microservicesNameSpaces: {
        orders: {
            name: 'responder_orders',
            key: 'orders',
            types: {
                getOrders: 'get-orders'
            }
        }
    }
}

module.exports = { config }