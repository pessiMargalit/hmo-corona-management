const Joi = require('joi');
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    city: String,
    street: String,
    housenumber: String
}, { _id: false });


const memberSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: addressSchema,
    birthDate: { type: Date, required: true },
    phone: { type: String, required: true },
    mobile: { type: String, required: true },
    // photo: { type: String, required: false },
}, { collection: "members" });

const MemberModel = mongoose.model("Member", memberSchema);

const validateMember = (memberData) => {
    const schema = Joi.object({
        id: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        address: Joi.object({
            city: Joi.string().required(),
            street: Joi.string().required(),
            housenumber: Joi.string().required()
        }),
        birthDate: Joi.date().required(),
        phone: Joi.string().required(),
        mobile: Joi.string().required(),
        // photo: Joi.string()
    });
    return schema.validate(memberData);
};

module.exports = {
    MemberModel: MemberModel,
    validateMember: validateMember
};
