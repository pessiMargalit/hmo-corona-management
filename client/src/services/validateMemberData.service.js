import Joi from 'joi';

const memberSchema = Joi.object({
    id: Joi.string().regex(/^\d{9}$/).required().messages({ 'string.pattern.base': 'ID must contain exactly 9 digits' }),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.object({
        city: Joi.string().required(),
        street: Joi.string().required(),
        housenumber: Joi.string().required(),
    }), 
    birthDate: Joi.date().required(),
    phone: Joi.string().regex(/^\d{9,10}$/).required().messages({ 'string.pattern.base': 'Phon number must contain 9 or 10 digits' }),
    mobile: Joi.string().regex(/^\d{10}$/).messages({ 'string.pattern.base': 'Mobile must contain exactly 10 digits' }).allow(''),
    // photo: Joi.string()
});


const validateMemberData = (data) => {
    if (data._id) {
        delete data.__v
        delete data._id
        delete data.address._id
    }

    return memberSchema.validate(data);
};

export { validateMemberData };
