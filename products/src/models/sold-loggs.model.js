'use strict'

const mongoose = require('mongoose')

const SchemaSoldLoggs = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date
    }
})

const SoldLoggsModel = mongoose.model('sold-loggs', SchemaSoldLoggs)
module.exports = { SoldLoggsModel }