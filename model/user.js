const mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:String,
    phoneNumber:Number,
    dob: { type: Date, default: Date.now },
    gender: String,
    ethnicity: String,
    fromPlace: String,
    toPlace: String,
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Users', userSchema);