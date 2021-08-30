import Joi from 'joi';

const usuariosSchema = Joi.object({
    quantidade: Joi.number().required(),
    usuarios: Joi.array().items(
        Joi.object({
            nome: Joi.string().required(),
            email: Joi.string(),
            password: Joi.string(),
            administrador: Joi.boolean(),
            _id: Joi.string().required(),
        })
    )
})

export default usuariosSchema;