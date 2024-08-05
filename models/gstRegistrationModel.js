const mongoose = require('mongoose');

const GstRegistrationSchema = new mongoose.Schema({
    MemberId: String,
    Applicant: String,
    Pannumber: String,
    DOB: String,
    Mobile: String,
    EmailId: String,
    Detail: String,
    Year: String,
    VleMobile: String,
    Pincode: String,
    Address: String,
    State: String,
    City: String,
    AadharImage: String,
    PancardImage: String,
    Photo: String,
    Bill: String,
    CourtAgree: String,
    RentAgree: String,
    Receipt: String,
    Narration: String,
    Charge: String,
    Status: String,
}, {timestamps : true});

module.exports = mongoose.model('GstRegistration', GstRegistrationSchema);
module.exports = GstRegistrationSchema;
