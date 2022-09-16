'use strict'

// Packages
const { Requester } = require('cote')
const router = require('express').Router()
const { isNil } = require('lodash')

// Modules
const { config } = require('../../config/environment')
const { logger } = require('../../middlewares/logger')

// Constants
const requesterUsers = new Requester({
    name: config.microservicesNameSpaces.users.name,
    key: config.microservicesNameSpaces.users.key,
})

router.get('/', async (request, response) => {
    try {
        const result = await requesterUsers.send({ type: config.microservicesNameSpaces.users.types.getUsers })

        if (!isNil(result))
            return response.status(200).json(result)

        logger.log('warn' `Couldn't get the users from the microservice users`)
        return response.status(500).json({ message: 'Internal server error' })
    } catch (error) {
        logger.log('error', `Couldn't get the users from the microservice users`, error)
        return response.status(500).json({ message: 'Internal server error' })
    }
})

router.post('/login', async (request, response) => {
    if (isNil(request.body?.user) || isNil(request.body?.password))
        return response.status(400).json({ message: 'Bad request' })

    const payload = {
        user: request.body.user,
        password: request.body?.password
    }

    try {
        const result = await requesterUsers.send({ type: config.microservicesNameSpaces.users.types.loginUser, ...payload  })

        if(isNil(result)) {
            logger.log('warn', `Couldn't authenticate the users ${payload.user}`)
            return response.status(401).json({ message: 'Unauthorized access' })
        }

        logger.log('info', `Successful login fot the user: ${payload.user}`)
        return response.status(200).json({ message: 'successful', ...result })
    } catch (error) {
        logger.log('error', `Couldn't authenticate the users ${payload.user}`)
        return response.status(500).json({ message: 'Internal server error' })
    }
})

module.exports = router