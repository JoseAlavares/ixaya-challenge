const config = {
    microservicesNameSpaces: {
        orders: {
            name: 'responder_orders',
            key: 'orders',
            types: {
                getOrdersByUser: 'get-orders-by-user',
                getOrdersListRecord: 'get-orders-list-record',
                getOrderDetail: 'get-order-detail'
            }
        }
    }
}

module.exports = { config }