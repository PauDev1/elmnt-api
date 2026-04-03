import Joi from 'joi';

export const validateProductQuery = (req, res, next) => {
    const schema = Joi.object({
        category: Joi.string().alphanum().max(20).optional(),
        name: Joi.string().max(50).pattern(/^[a-zA-Z0-9 ]*$/).optional()
    });

    const { error } = schema.validate(req.query);
    if (error) {
        return res.status(400).json({ 
            mensaje: 'Parámetros de búsqueda inválidos', 
            detalle: error.details[0].message 
        });
    }
    next();
};


export const validateProductBody = (req, res, next) => {
    
    const isPost = req.method === 'POST';

    const schema = Joi.object({
        name: Joi.string().min(3).max(100).when('$isPost', { is: true, then: Joi.required() }),
        description: Joi.string().min(10).max(500).when('$isPost', { is: true, then: Joi.required() }),
        price: Joi.number().positive().precision(2).when('$isPost', { is: true, then: Joi.required() }),
        category: Joi.string().valid('Cleansers', 'Hydration', 'Treatment', 'Protection').when('$isPost', { is: true, then: Joi.required() }),
        image: Joi.string().uri().optional(), 
        stock: Joi.number().integer().min(0).default(0),
        volume: Joi.string().max(10).optional(),
        ingredients: Joi.string().max(1000).optional(),
        usage: Joi.string().max(500).optional()
    });

   
    const { error } = schema.validate(req.body, { context: { isPost } });

    if (error) {
        return res.status(400).json({ 
            mensaje: 'Datos del producto incorrectos', 
            detalle: error.details[0].message 
        });
    }
    next();
};

export const validateProductId = (req, res, next) => {
    const schema = Joi.string().hex().length(24).required();

    const { error } = schema.validate(req.params.id);

    if (error) {
        return res.status(400).json({ 
            mensaje: 'El ID del producto no es válido', 
            detalle: 'Debe ser un código hexadecimal de 24 caracteres.' 
        });
    }
    next();
};