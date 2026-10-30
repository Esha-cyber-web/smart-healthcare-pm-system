const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    activityName: String,
    assignedMember: String, // PM, Backend, Frontend, DB, QA
    durationWeeks: Number,
    dependencies: [String],
    startDate: Date,
    endDate: Date,
    isDelayed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Schedule', activitySchema);