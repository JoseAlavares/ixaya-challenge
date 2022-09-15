'use strict'

const mongoose = require('mongoose')

const SchemaSoldProduct = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true,
    },
    quantity_sold: {
        type: Number,
        required: true
    },
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

const SoldProductModel = mongoose.model('sold-products', SchemaSoldProduct)
module.exports = { SoldProductModel }