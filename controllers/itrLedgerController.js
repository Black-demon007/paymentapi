const ItrLedger = require('../models/ItrLedgerModel');

exports.createItrledger = async (req, res) => {
    try {
        const saveditrLedger = new ItrLedger(req.body);
        await saveditrLedger.save();
        return res.send({
            data: saveditrLedger,
            message: "ITR Ledger Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getItrledgers = async (req, res) => {
    try {
        const itrLedgers = await ItrLedger.find();
        return res.send({
            data: itrLedgers,
            message: "ITR Ledgers Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getItrledgerById = async (req, res) => {
    try {
        const itrLedger = await ItrLedger.findById(req.query.id);
        if (!itrLedger) {
            return res.send({
                data: itrLedger,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: itrLedger,
                message: "ITR Ledger Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateItrledger = async (req, res) => {
    try {
        const updateitrLedger = await ItrLedger.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updateitrLedger) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updateitrLedger,
                message: "ITR Ledger Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteItrledger = async (req, res) => {
    try {
        const deleteitrLedger = await ItrLedger.findByIdAndDelete(req.query.id);
        if (!deleteitrLedger) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteitrLedger,
                message: "ITR Ledger Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
