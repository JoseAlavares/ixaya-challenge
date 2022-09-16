const mongoose = require('mongoose')

const SchemaUser = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
})

const UserModel = mongoose.model('users', SchemaUser)
module.exports = { UserModel }