'use strict'

// Modules
const { config } = require('./config/environment')
const cors = require('cors')
const helmet = require('helmet')

// Packages
const express = require('express')

// Constants
const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json({limit: '50mb'}));
app.use('/api/product', require('./network/products'))
app.use('/api/order', require('./network/orders'))
app.use('/api/user', require('./network/users'))

app.get('/', (req, resp) => {
    return resp.status(200).json('Api Gateway ready')
})

app.listen(config.environment.appPort, () => console.log('Api Gateway'))