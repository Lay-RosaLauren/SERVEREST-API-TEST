import Joi from 'joi';

const carrinhoSchema = Joi.object({
    quantidade: Joi.number(),
    produtos: Joi.array().items(
        Joi.object({
            nome: Joi.string(),
            preco: Joi.number().integer(),
            descricao: Joi.string(),
            quantidade: Joi.number().integer(),
            _id: Joi.string()
        })
    )
})

export default carrinhoSchema;