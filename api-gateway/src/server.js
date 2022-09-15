'use strict'

// Modules
const { config } = require('./config/environment')

// Packages
const express = require('express')

// Constants
const app = express()
// const router = 

app.get('/', (req, resp) => {
    return resp.status(200).json('Api Gateway ready')
})

app.listen(() => console.log('Api Gateway'), config.environment.appPort)