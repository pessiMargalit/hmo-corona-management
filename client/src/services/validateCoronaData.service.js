import Joi from 'joi';
import { VACCINE_MANUFACTURERS } from '../constant/vaccineManufacturers';


const vaccinationDateSchema = Joi.object({
    date: Joi.date().required(),
    manufacturer: Joi.string().valid(...VACCINE_MANUFACTURERS).required()
});

const coronaDataSchema = Joi.object({
    memberId: Joi.string().required(),
    vaccinationDates: Joi.array().items(vaccinationDateSchema).max(4).required(),
    recoveryDate: Joi.date().required(),
    positiveResultDate: Joi.date().required()
});

const validateCoronaData = (data) => {
    if (data._id ) {
        delete data.__v
        delete data._id
        delete data.vaccinationDates._id
    }

    return coronaDataSchema.validate(data);
};

export { validateCoronaData };
