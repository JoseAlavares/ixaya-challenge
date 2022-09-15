'use strict'

// Packages
const cote = require('cote')
const router = require('express').Router()
const { isNil } = require('lodash')
const dayjs = require('dayjs')

// Modules
const { config } = require('../../config/environment')

// Constants
const requesterProducts = new cote.Requester({ name: config.microservicesNameSpaces.products.name })

router.get('/', async (resquest, response) => {
    let dateFilter = null

    if (!isNil(request.query?.date))
        dateFilter = dayjs(request.query.date)

    try {
        const result = await requesterProducts.send({ type: config.microservicesNameSpaces.products.types.getProducts, _request: dateFilter })

        if (!isNil(result))
            return response.apiResponse('ok', 200, result)

        // logger.warn({ message: `Couldn't get the products from the microservice products` })
        return response.apiResponse('Internal server error', 500)
    } catch (error) {
        // logger.error({ message: `Couldn't get the products from the microservice products`, meta: error })
        return response.apiResponse('Internal server error', 500)
    }
})
