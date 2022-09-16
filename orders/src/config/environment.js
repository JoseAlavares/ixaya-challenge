const config = {
    microservicesNameSpaces: {
        orders: {
            name: 'responder_orders',
            key: 'orders',
            types: {
                getOrdersByUser: 'get-orders-by-user',
                getOrdersListRecord: 'get-orders-list-record',
                getOrderDetail: 'get-order-detail',
                createOrder: 'create-order'
            }
        }
    },
    publishersAndSubscribers: {
        products: {
            name: 'publisher-products',
            key: 'products',
            types: {
                updateSoldQuantity :'update-sold-quantity'
            }
        }
    }
}

module.exports = { config }