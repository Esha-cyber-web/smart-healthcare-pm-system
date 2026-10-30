const mongoose = require('mongoose');

const defectSchema = new mongoose.Schema({
    defectDescription: String, // e.g., Appointment scheduling / patient record critical defect
    severity: { type: String, enum: ['Critical', 'Major', 'Minor'] },
    assignedPersonnel: String,
    resolutionStatus: { type: String, enum: ['Open', 'In Progress', 'Resolved'], default: 'Open' }
});

const riskSchema = new mongoose.Schema({
    riskDescription: String,
    likelihood: { type: Number, min: 1, max: 5 },
    impact: { type: Number, min: 1, max: 5 },
    riskScore: Number,
    mitigationAction: String // PDPC / Response action
});

const qualityRiskSchema = new mongoose.Schema({
    defects: [defectSchema],
    qualityChecklist: [{ item: String, passed: Boolean }],
    risks: [riskSchema]
});

module.exports = mongoose.model('QualityRisk', qualityRiskSchema);