const mongoose = require('mongoose');

const projectCharterSchema = new mongoose.Schema({
    projectName: { type: String, default: "Smart Healthcare Project Management System" },
    objectives: [String],
    stakeholders: [String],
    scopeBoundaries: [String],
    approvedBudget: { type: Number, default: 5000000 }, // PKR 5 Million
    deadlineWeeks: { type: Number, default: 16 },
    milestones: [{ title: String, week: Number, status: String }],
    closureRecords: { type: String, default: "" }
});

module.exports = mongoose.model('ProjectCharter', projectCharterSchema);