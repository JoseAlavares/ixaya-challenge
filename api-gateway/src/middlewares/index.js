'use strict'

const { config } = require('../config/environment')
const { isNil } = require("lodash")
const { createLogger, format, transports } = require('winston');


const validApiKey = (request, response, next) => {
    if (isNil(request.headers['x-api-key']) || request.headers['x-api-key'] !== config.environment.apiKey)
        return request.status(401).json({ message: 'Unauthorized access' })

    next()
}

module.exports = {
    validApiKey
}