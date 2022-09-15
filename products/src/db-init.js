'use strict'

const data = [{
    model: 'product-catalogues',
    documents: [{
        'product_id': 1,
        'product_name': 'Macbook Pro 13in',
        'price': 1200,
        'type_product': 'laptop',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 2,
        'product_name': 'Macbook Pro 15in',
        'price': 1500,
        'type_product': 'laptop',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 3,
        'product_name': 'Macbook Air 13in',
        'price': 1100,
        'type_product': 'laptop',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 3,
        'product_name': 'Macbook 13in',
        'price': 1100,
        'type_product': 'laptop',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 4,
        'product_name': 'Macbook 15in',
        'price': 1500,
        'type_product': 'laptop',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 5,
        'product_name': 'Asus XP',
        'price': 1000,
        'type_product': 'laptop',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 6,
        'product_name': 'Asus XP100',
        'price': 1200,
        'type_product': 'laptop',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 7,
        'product_name': 'Asus MateBook',
        'price': 2200,
        'type_product': 'laptop',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 8,
        'product_name': 'Apple iWatch 1',
        'price': 300,
        'type_product': 'smart watch',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 9,
        'product_name': 'Apple iWatch 2',
        'price': 350,
        'type_product': 'smart watch',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 10,
        'product_name': 'Apple iPhone 11',
        'price': 500,
        'type_product': 'telephone',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 11,
        'product_name': 'Apple iPhone 12',
        'price': 550,
        'type_product': 'telephone',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 12,
        'product_name': 'Xiaomi POCO X3',
        'price': 400,
        'type_product': 'telephone',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 13,
        'product_name': 'Xiaomi POCO X3 PRO',
        'price': 550,
        'type_product': 'telephone',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 14,
        'product_name': 'Xiaomi POCO X3 PRO 128MB',
        'price': 600,
        'type_product': 'telephone',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 15,
        'product_name': 'Xiaomi POCO X3 PRO 256MB',
        'price': 650,
        'type_product': 'telephone',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    }, {
        'product_id': 16,
        'product_name': 'Xiaomi POCO X3 PRO 512MB',
        'price': 700,
        'type_product': 'telephone',
        'active': true,
        'created_at': '2022-09-15T13:00:00'
    },]
}, {
    model: 'sold-products',
    documents: [{
        'product_id': 1,
        'quantity_sold': 100,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 2,
        'quantity_sold': 273,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 3,
        'quantity_sold': 153,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 4,
        'quantity_sold': 346,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 5,
        'quantity_sold': 453,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 6,
        'quantity_sold': 67,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 7,
        'quantity_sold': 237,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 8,
        'quantity_sold': 178,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 9,
        'quantity_sold': 285,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 10,
        'quantity_sold': 566,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 11,
        'quantity_sold': 78,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 12,
        'quantity_sold': 346,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 13,
        'quantity_sold': 283,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 14,
        'quantity_sold': 124,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 15,
        'quantity_sold': 45,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }, {
        'product_id': 16,
        'quantity_sold': 434,
        'active': true,
        'created_at': '2020-01-11T13:00:00'
    }]
}]

const { logger } = require('./middlewares/logger')
const { ProductCatalogueModel } = require('./models/product-catalogue.model')
const { SoldProductModel } = require('./models/sold-products.model')

const products = [{
    'product_id': 1,
    'product_name': 'Macbook Pro 13in',
    'price': 1200,
    'type_product': 'laptop',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 2,
    'product_name': 'Macbook Pro 15in',
    'price': 1500,
    'type_product': 'laptop',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 3,
    'product_name': 'Macbook Air 13in',
    'price': 1100,
    'type_product': 'laptop',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 4,
    'product_name': 'Macbook 13in',
    'price': 1100,
    'type_product': 'laptop',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 5,
    'product_name': 'Macbook 15in',
    'price': 1500,
    'type_product': 'laptop',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 6,
    'product_name': 'Asus XP',
    'price': 1000,
    'type_product': 'laptop',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 7,
    'product_name': 'Asus XP100',
    'price': 1200,
    'type_product': 'laptop',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 8,
    'product_name': 'Asus MateBook',
    'price': 2200,
    'type_product': 'laptop',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 9,
    'product_name': 'Apple iWatch 1',
    'price': 300,
    'type_product': 'smart watch',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 10,
    'product_name': 'Apple iWatch 2',
    'price': 350,
    'type_product': 'smart watch',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 11,
    'product_name': 'Apple iPhone 11',
    'price': 500,
    'type_product': 'telephone',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 12,
    'product_name': 'Apple iPhone 12',
    'price': 550,
    'type_product': 'telephone',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 13,
    'product_name': 'Xiaomi POCO X3',
    'price': 400,
    'type_product': 'telephone',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 14,
    'product_name': 'Xiaomi POCO X3 PRO',
    'price': 550,
    'type_product': 'telephone',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 15,
    'product_name': 'Xiaomi POCO X3 PRO 128MB',
    'price': 600,
    'type_product': 'telephone',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 16,
    'product_name': 'Xiaomi POCO X3 PRO 256MB',
    'price': 650,
    'type_product': 'telephone',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}, {
    'product_id': 17,
    'product_name': 'Xiaomi POCO X3 PRO 512MB',
    'price': 700,
    'type_product': 'telephone',
    'active': true,
    'created_at': '2022-09-15T13:00:00'
}]
const sold = [{
    'product_id': 1,
    'quantity_sold': 100,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 2,
    'quantity_sold': 273,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 3,
    'quantity_sold': 153,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 4,
    'quantity_sold': 346,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 5,
    'quantity_sold': 453,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 6,
    'quantity_sold': 67,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 7,
    'quantity_sold': 237,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 8,
    'quantity_sold': 178,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 9,
    'quantity_sold': 285,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 10,
    'quantity_sold': 566,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 11,
    'quantity_sold': 78,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 12,
    'quantity_sold': 346,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 13,
    'quantity_sold': 1283,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 14,
    'quantity_sold': 124,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 15,
    'quantity_sold': 45,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 16,
    'quantity_sold': 434,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}, {
    'product_id': 17,
    'quantity_sold': 567,
    'active': true,
    'created_at': '2020-01-11T13:00:00'
}]

try {
    ProductCatalogueModel.deleteMany({}).then(() => ProductCatalogueModel.insertMany(products))
    SoldProductModel.deleteMany({}).then(() => SoldProductModel.insertMany(sold))

    logger.log('info', 'Successful seeding process')
} catch (error) {
    logger.log('error', 'Error in the seeding process', error)
}
