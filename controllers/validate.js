const Joi = require('joi');

const registerValidate = (data) => {

    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().required().min(7).max(100),
        password: Joi.string().required().min(8).max(200),
        admin: Joi.boolean()
    })

    return schema.validate(data)
}


const loginValidate = (data) => {

    const schema = Joi.object({
        email: Joi.string().required().min(7).max(100),
        password: Joi.string().required().min(8).max(200),
    })

    return schema.validate(data)
}

module.exports.loginValidate = loginValidate;
module.exports.registerValidate = registerValidate;
