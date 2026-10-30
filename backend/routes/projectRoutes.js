const express = require('express');
const router = express.Router();

const ProjectCharter = require('../models/ProjectCharter');
const ScopeWBS = require('../models/ScopeWBS');
const Schedule = require('../models/Schedule');
const CostEVM = require('../models/CostEVM');
const QualityRisk = require('../models/QualityRisk');

// Get all project data according to the case study
router.get('/project-data', async (req, res) => {
    try {
        const charter = await ProjectCharter.findOne();
        const scopeWbs = await ScopeWBS.findOne();
        const schedule = await Schedule.find();
        const costEvm = await CostEVM.findOne();
        const qualityRisk = await QualityRisk.findOne();

        res.status(200).json({
            success: true,
            charter,
            scopeWbs,
            schedule,
            costEvm,
            qualityRisk
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;