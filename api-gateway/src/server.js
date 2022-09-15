'use strict'

// Modules
const { config } = require('./config/environment')

// Packages
const express = require('express')

// Constants
const app = express()
app.use('/api/product', require('./network/products'))

app.get('/', (req, resp) => {
    return resp.status(200).json('Api Gateway ready')
})

app.listen(config.environment.appPort, () => console.log('Api Gateway'))