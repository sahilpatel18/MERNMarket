const Joi = require('joi')

const authSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(3).max(50).required(),
})

module.exports = {
    authSchema
}