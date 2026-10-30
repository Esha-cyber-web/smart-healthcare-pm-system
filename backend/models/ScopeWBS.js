const mongoose = require('mongoose');

const requirementSchema = new mongoose.Schema({
    title: String,
    description: String,
    priority: { type: String, enum: ['High', 'Medium', 'Low'] },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }
});

const changeRequestSchema = new mongoose.Schema({
    changeDescription: String, // e.g., AI diagnostic module & mobile app
    justification: String,
    costImpact: { type: Number, default: 800000 }, // PKR 800,000
    scheduleImpactWeeks: { type: Number, default: 3 }, // 3 weeks
    approvalStatus: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Approved' }
});

const scopeWBSSchema = new mongoose.Schema({
    requirements: [requirementSchema],
    wbsNodes: [{ taskCode: String, taskName: String, level: Number }],
    changeRequests: [changeRequestSchema]
});

module.exports = mongoose.model('ScopeWBS', scopeWBSSchema);