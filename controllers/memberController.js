const Member = require('../models/memberModel');

exports.createMember = async (req, res) => {
    try {
        const newMember = new Member(req.body);
        const savedMember = await newMember.save();
        return res.send({
            data: savedMember,
            message: "Member Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getMembers = async (req, res) => {
    try {
        const members = await Member.find();
        return res.send({
            data: members,
            message: "Members Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getMemberById = async (req, res) => {
    try {
        const member = await Member.findById(req.query.id);
        if (!member) {
            return res.send({
                data: member,
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: members,
                message: "Members Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateMember = async (req, res) => {
    try {
        const updatedMember = await Member.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatedMember) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatedMember,
                message: "Members Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteMember = async (req, res) => {
    try {
        const deletedMember = await Member.findByIdAndDelete(req.query.id);
        if (!deletedMember) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletedMember,
                message: "Members Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getMemberuniqueId = async (req, res) => {
    try {
        const membersCount = await Member.countDocuments() + 1;
        return res.send({
            data: membersCount,
            message: "Member UniqueId Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
