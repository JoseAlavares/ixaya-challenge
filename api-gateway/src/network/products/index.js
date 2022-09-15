'use strict'

// Packages
const cote = require('cote')
const router = require('express').Router()
const { isNil } = require('lodash')
const dayjs = require('dayjs')

// Modules
const { config } = require('../../config/environment')
const { logger } = require('../../middlewares/logger')

// Constants
const requesterProducts = new cote.Requester({ 
    name: config.microservicesNameSpaces.products.name, 
    key: config.microservicesNameSpaces.products.key
})

router.get('/', async (request, response) => {
    let dateFilter = null

    if (!isNil(request.query?.date))
        dateFilter = dayjs(request.query.date)

    try {
        const result = await requesterProducts.send({
            type: config.microservicesNameSpaces.products.types.getProducts,
            _request: dateFilter
        })

        if (!isNil(result))
            return response.status(200).json(result)

        logger.log('warn' `Couldn't get the products from the microservice products`)
        return response.status(500).json({ message: 'Internal server error' })
    } catch (error) {
        logger.log('error', `Couldn't get the products from the microservice products`, error)
        return response.status(500).json({ message: 'Internal server error' })
    }
})

module.exports = router