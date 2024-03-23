import Joi from 'joi';

const memberSchema = Joi.object({
    id: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.object({
        city: Joi.string().required(),
        street: Joi.string().required(),
        housenumber: Joi.string().required(),
    }),
    birthDate: Joi.date().required(),
    phone: Joi.string().required(),
    mobile: Joi.string().required(),
    // photo: Joi.string()
});


const validateMemberData = (data) => {
    if (data._id ) {
        delete data.__v
        delete data._id
        delete data.address._id
    }

    return memberSchema.validate(data);
};

export { validateMemberData };
