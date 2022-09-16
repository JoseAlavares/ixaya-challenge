const joi = require('joi')

const schema = joi.object({
    user_id: joi.number().required(),
    street_name: joi.string().required(),
    zip_code: joi.string().required(),
    address: joi.string().required(),
    state: joi.string().required(),
    city: joi.string().required(),
    product_list: joi.array().items(
        joi.object({
            product_id: joi.number().required(),
            qty: joi.number().required()
        })
    ),
    // active: joi.boolean().required()
})

const validatorCreateOrder = (req, resp, next) => {
    const { body } = req
    const { error } = schema.validate(body)

    if (error) {
        console.error(error)
        let errors = error.details.map(e => e.message)
        return resp.status(400).json({
            message: 'Bad request',
            errors
        })
    }

    next()
}

module.exports = { validatorCreateOrder }