const mongoose = require('mongoose')

const SchemaProductCatalogue = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type_product: {
        type: String,
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

const ProductCatalogueModel = mongoose.model('product-catalogues', SchemaProductCatalogue)
module.exports = { ProductCatalogueModel }