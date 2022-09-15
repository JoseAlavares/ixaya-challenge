const mongoose = require('mongoose')

const SchemaOrder = new mongoose.Schema({
    street_name: {
        type: String,
        required: true
    },
    zip_code: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    product_list: [{
        product_id: {
            type: String,
            required: true
        },
        qty: {
            type: Number,
            required: true
        }
    }],
    active: {
        type: Boolean,
        required: true
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
})

const OrderModel = mongoose.model('orders', SchemaOrder)
module.exports = { OrderModel }