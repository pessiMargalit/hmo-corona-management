const { connect } = require("../models/index");
const { CoronaDataModel } = require("../models/coronaData.model")

module.exports = class CoronaDataController {
    constructor() {
        connect();
    }

    async getAll() {
        let coronaDatas = await CoronaDataModel.find({}, { _id: 0 });
        return coronaDatas;
    }

    async getByMemberId(memberId) {
        const coronaData = await CoronaDataModel.findOne({ memberId: memberId });
        if (!coronaData) {
            return { error: 'Member not found'};
        }
        return { _id: coronaData._id.toString(), ...coronaData.toObject() };

    }

    async insert(data) {
        let coronaData = await CoronaDataModel.create(data);
        let result = await CoronaDataModel.findById(coronaData._id, { _id: 0 });
        return result;
    }

    async update(memberId, updatedCoronaData) {
        const coronaData = await CoronaDataModel.findOneAndUpdate(
            { memberId: memberId },
            updatedCoronaData,
            { new: true }
        );
        if (!coronaData) {
            return { error: "Member's corona data not found"};
        }
        return { _id: coronaData._id.toString(), ...coronaData.toObject() };
    }
    
    async delete(memberId) {
        const coronaData = await CoronaDataModel.findOneAndDelete({ memberId: memberId });
        if (!coronaData) {
            return { error: "Member's corona data not found"};
        }
        return { _id: coronaData._id.toString(), ...coronaData.toObject() };
    }

    async validateById(id) {
        let result = await CoronaDataModel.findOne({ memberId: id });
        return result;
    }

}