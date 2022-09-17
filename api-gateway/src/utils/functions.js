// Packages
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")

// Modules
const { config } = require('../config/environment')
const { logger } = require('../middlewares/logger')

const JWT_PASSWORD = config.environment.jwtPassword

const generatePassword = (plainText) => {
	const saltRounds = 10
	return bcrypt.hashSync(plainText || 'admin', saltRounds)
}

const validatePassword = (plainText, hash) => {
	return bcrypt.compareSync(plainText, hash)
}

const generateToken = (id, user) => {
	return jwt.sign(
		{data: {
			id: id,
			user: user
		}},
		JWT_PASSWORD
	)
}

const verifyToken = async (token) => {
	if(!token) {
		return false
	}

	const _token = token.replace('Bearer ', '')
	let valid = false

	try {
		await jwt.verify(_token, JWT_PASSWORD, function(error, token) {
			if(error) {
				logger.log('error', `Error in the util function verifyToken, couldn't generate a json web token`, error)
				valid = false
			}
			else {
				valid = true
			}
		})

		return valid
	} catch(err) {
		logger.log('error', `Error in the util function verifyToken, couldn't generate a json web token`, error)
		throw new Error('Ocurrio un error')
	}
}

module.exports = {
	generatePassword,
	validatePassword,
	generateToken,
	verifyToken
}