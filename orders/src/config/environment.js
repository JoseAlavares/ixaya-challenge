const config = {
    microservicesNameSpaces: {
        order: {
            name: 'responder_order',
            key: 'order',
            types: {
                getOrder: 'get-orders'
            }
        }
    }
}

module.exports = { config }