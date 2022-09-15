'use strict'

const { config } = require('../config/environment')
const { isNil } = require("lodash")

const apiResponse = (message, httpCode, data = null) => {
    return (request, response, next) => {
        response.status(httpCode).json({
            timestamp: new Date().toISOString(),
            message,
            data
        })
        next()
    }
}

const validApiKey = (request, response, next) => {
    if (isNil(request.headers['x-api-key']) || request.headers['x-api-key'] !== config.environment.apiKey)
        return request.status(401).json({ message: 'Unauthorized access' })

    next()
}

module.exports = {
    apiResponse,
    validApiKey
}