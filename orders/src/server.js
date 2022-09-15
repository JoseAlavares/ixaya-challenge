'use strict'

const mongoose = require('mongoose')

const MONGO_DB_HOST = process.env.MONGO_DB_HOST
const MONGO_DB_NAME = process.env.MONGO_DB_NAME
const MONGO_DB_USER = process.env.MONGO_DB_USER
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD

const URI = `mongodb://${MONGO_DB_HOST}:27017/${MONGO_DB_NAME}`

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.catch(err => console.error('Error in the mongodb connection', err))

require('./modules/orders.module')