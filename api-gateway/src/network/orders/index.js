'use strict'

// Packages
const cote = require('cote')
const router = require('express').Router()
const { isNil } = require('lodash')

// Modules
const { config } = require('../../config/environment')
const { logger } = require('../../middlewares/logger')

// Constants
const requesterOrders = new cote.Requester({
    name: config.microservicesNameSpaces.orders.name,
    key: config.microservicesNameSpaces.orders.key
})

router.get('/', async (request, response) => {
    try {
        const result = await requesterOrders.send({ type: config.microservicesNameSpaces.orders.types.getOrders })

        if (!isNil(result))
            return response.status(200).json(result)

        logger.log('warn' `Couldn't get the orders from the microservice orders`)
        return response.status(500).json({ message: 'Internal server error' })
    } catch (error) {
        logger.log('error', `Couldn't get the orders from the microservice orders`, error)
        return response.status(500).json({ message: 'Internal server error' })
    }
})

module.exports = router