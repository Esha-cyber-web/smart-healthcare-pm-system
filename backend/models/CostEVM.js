const mongoose = require('mongoose');

const costEVMSchema = new mongoose.Schema({
    plannedValuePV: Number,
    earnedValueEV: Number,
    actualCostAC: Number,
    cpi: Number, // Cost Performance Index (EV / AC)
    spi: Number, // Schedule Performance Index (EV / PV)
    warningStatus: { type: String, default: 'Normal' }
});

module.exports = mongoose.model('CostEVM', costEVMSchema);