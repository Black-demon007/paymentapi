const mongoose = require('mongoose');

const ItrLedgerSchema = new mongoose.Schema({
    memberId : String,
    credit : String,
    amount : String,
    narration : String,
}, {timestamps : true});

module.exports = mongoose.model('ItrLedger', ItrLedgerSchema);
module.exports = ItrLedgerSchema;