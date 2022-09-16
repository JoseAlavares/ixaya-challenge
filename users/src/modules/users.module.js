// Modules
const { config } = require('../config/environment')
const { logger } = require('../middlewares/logger')
const { validatePassword, generateToken } = require('../utils/functions')

// Packages
const { Responder } = require('cote')

// Constants
const userResponder = new Responder({
    name: config.microservicesNameSpaces.users.name,
    key: config.microservicesNameSpaces.users.key,
})

// Models
const { UserModel } = require('../models/user.model')

userResponder.on(config.microservicesNameSpaces.users.types.getUsers, async (req, callback) => {
    delete req.type
    try {
        const users = await UserModel.find({ active: true }).select('_id', 'user_id', 'user', 'name')
        return users
    } catch (error) {
        logger.log('error', `Couldn't get the users from the collection in mongo`, error)
        return null
    }
})

userResponder.on(config.microservicesNameSpaces.users.types.loginUser, async (req, callback) => {
    delete req.type


    try {
        const user = await UserModel.findOne({ user: req.user, active: true }).select(['_id', 'user_id', 'user', 'name', 'password'])

        if (user && validatePassword(req.password, user.password)) {
            const token = await generateToken(user._id, user.user)
            return { user, token }
        }

        return null
    } catch (error) {
        logger.log('error', `Couldn't get the users from the collection in mongo`, error)
        return null
    }
})
