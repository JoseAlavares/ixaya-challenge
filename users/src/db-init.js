'use strict'

const { logger } = require('./middlewares/logger')
const { UserModel } = require('./models/user.model')
const bcrypt = require('bcrypt')

const saltRounds = 10;

const users = [{
    'user_id': 1,
    'user': '00001',
    'password': bcrypt.hashSync('00001', saltRounds),
    'name': 'Jose Francisco',
    'active': true
}, {
    'user_id': 2,
    'user': '00002',
    'password': bcrypt.hashSync('00002', saltRounds),
    'name': 'Miguel Alonso',
    'active': true
}, {
    'user_id': 3,
    'user': '00003',
    'password': bcrypt.hashSync('00003', saltRounds),
    'name': 'Miguel Alonso',
    'active': true
}, {
    'user_id': 4,
    'user': '00004',
    'password': bcrypt.hashSync('00004', saltRounds),
    'name': 'Juan Garcia',
    'active': true
}, {
    'user_id': 5,
    'user': '00005',
    'password': bcrypt.hashSync('00005', saltRounds),
    'name': 'John Doe',
    'active': true
}, ]

try {
    UserModel.deleteMany({}).then(() => UserModel.insertMany(users))

    logger.log('info', 'Successful seeding process')
} catch (error) {
    logger.log('error', 'Error in the seeding process', error)
}
