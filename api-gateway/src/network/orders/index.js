'use strict'

// Packages
const cote = require('cote')
const router = require('express').Router()
const { isNil } = require('lodash')

// Modules
const { config } = require('../../config/environment')
const { logger } = require('../../middlewares/logger')
const { validatorCreateOrder } = require('../../validators/validator-create-order')

// Constants
const requesterOrders = new cote.Requester({
    name: config.microservicesNameSpaces.orders.name,
    key: config.microservicesNameSpaces.orders.key
})

router.get('/', async (request, response) => {
    try {
        if (isNil(request.query?.user_id))
            return response.status(400).json({ message: 'Bad request' })

        const userIdFilter = request.query.user_id

        const result = await requesterOrders.send({ 
            type: config.microservicesNameSpaces.orders.types.getOrdersByUser,
            userIdFilter
        })

        if (!isNil(result))
            return response.status(200).json(result)

        logger.log('warn' `Couldn't get the orders from the microservice orders`)
        return response.status(500).json({ message: 'Internal server error' })
    } catch (error) {
        logger.log('error', `Couldn't get the orders from the microservice orders`, error)
        return response.status(500).json({ message: 'Internal server error' })
    }
})

router.get('/list_record', async (request, response) => {
    try {
        const result = await requesterOrders.send({
            type: config.microservicesNameSpaces.orders.types.getOrdersListRecord
        })

        if (!isNil(result))
            return response.status(200).json(result)

        logger.log('warn' `Couldn't get the orders from the microservice orders`)
        return response.status(500).json({ message: 'Internal server error' })
    } catch (error) {
        logger.log('error', `Couldn't get the orders from the microservice orders`, error)
        return response.status(500).json({ message: 'Internal server error' })
    }
})

router.post('/detail', async (request, response) => {
    if (isNil(request.body?.order_id))
        return response.status(400).json({ message: 'Bad request' })

    const orderId = request.body.order_id

    try {
        const result = await requesterOrders.send({
            type: config.microservicesNameSpaces.orders.types.getOrderDetail,
            orderId
        })

        if (!isNil(result))
            return response.status(200).json(result)

        logger.log('warn', `Couldn't get the orders from the microservice orders`)
        return response.status(500).json({ message: 'Internal server error' })
    } catch (error) {
        logger.log('error', `Couldn't get the orders from the microservice orders`, error)
        return response.status(500).json({ message: 'Internal server error' })
    }
})

router.post('/', async (request, response) => {
    const { body } = request
    body.active = true
    body.created_at = new Date()

    try {
        const result = await requesterOrders.send({
            type: config.microservicesNameSpaces.orders.types.createOrder,
             ...body
        })

        if (result)
            return response.status(201).json({ message: 'Created' })

        return response.status(500).json({ message: 'Internal server error' })
    } catch (error) {
        logger.log('error', `Couldn't create a order`, error)
        return response.status(500).json({ message: 'Internal server error' })
    }
})

module.exports = router