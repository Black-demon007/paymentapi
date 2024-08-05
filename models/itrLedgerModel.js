const mongoose = require('mongoose');

const ItrLedgerSchema = new mongoose.Schema({
    memberId: {
        type: String,
        required: true
    },
    credit: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    narration: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('ItrLedger', ItrLedgerSchema);
