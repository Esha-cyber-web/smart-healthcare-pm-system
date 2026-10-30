const mongoose = require('mongoose');
require('dotenv').config();

const ProjectCharter = require('./models/ProjectCharter');
const ScopeWBS = require('./models/ScopeWBS');
const Schedule = require('./models/Schedule');
const CostEVM = require('./models/CostEVM');
const QualityRisk = require('./models/QualityRisk');

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    console.log("Connected for Seeding...");

    // Clear existing data
    await ProjectCharter.deleteMany({});
    await ScopeWBS.deleteMany({});
    await Schedule.deleteMany({});
    await CostEVM.deleteMany({});
    await QualityRisk.deleteMany({});

    // 1. Project Charter Data
    await ProjectCharter.create({
        projectName: "Smart Healthcare Project Management and Monitoring System",
        objectives: [
            "Appointment scheduling across 5 hospitals",
            "Patient record management",
            "Lab reports integration",
            "Doctor schedules and online consultations",
            "Hospital billing system"
        ],
        stakeholders: ["Hospital Management", "Project Manager", "Dev Team", "QA Engineer"],
        scopeBoundaries: ["5 network hospitals only", "Excludes third-party pharmacy systems"],
        approvedBudget: 5000000,
        deadlineWeeks: 16,
        milestones: [
            { title: "Initiation & Planning", week: 3, status: "Completed" },
            { title: "Development Phase", week: 11, status: "In Progress" },
            { title: "Testing & Deployment", week: 16, status: "Pending" }
        ]
    });

    // 2. Scope & WBS Data (With Change Request)
    await ScopeWBS.create({
        requirements: [
            { title: "Appointment Module", description: "Manage bookings for 5 hospitals", priority: "High", status: "Approved" },
            { title: "Billing System", description: "Integrated hospital billing", priority: "High", status: "Approved" }
        ],
        wbsNodes: [
            { taskCode: "1.1", taskName: "Requirements Gathering", level: 1 },
            { taskCode: "1.2", taskName: "Backend & Database Setup", level: 1 },
            { taskCode: "1.3", taskName: "Frontend GUI Integration", level: 1 }
        ],
        changeRequests: [
            { 
                changeDescription: "AI-based preliminary diagnosis module and Mobile App", 
                justification: "Requested by hospital management mid-project", 
                costImpact: 800000, 
                scheduleImpactWeeks: 3, 
                approvalStatus: "Approved" 
            }
        ]
    });

    // 3. Schedule Data (With Delays)
    await Schedule.insertMany([
        { activityName: "Appointment Scheduling Module", assignedMember: "Backend Developer", durationWeeks: 4, dependencies: [], isDelayed: true },
        { activityName: "Patient Record Management", assignedMember: "Database Developer", durationWeeks: 3, dependencies: ["Appointment Scheduling Module"], isDelayed: true }
    ]);

    // 4. Cost EVM Data (With Cost Overrun)
    await CostEVM.create({
        plannedValuePV: 3000000,
        earnedValueEV: 2600000,
        actualCostAC: 2900000,
        cpi: 0.89,
        spi: 0.86,
        warningStatus: "Warning: Cost Overrun and Schedule Delay Detected"
    });

    // 5. Quality & Risk Data
    await QualityRisk.create({
        defects: [
            { defectDescription: "Critical defect in appointment scheduling date picker", severity: "Critical", assignedPersonnel: "QA Engineer", resolutionStatus: "Open" },
            { defectDescription: "Patient record synchronization failure across 5 hospitals", severity: "Critical", assignedPersonnel: "Backend Developer", resolutionStatus: "In Progress" }
        ],
        qualityChecklist: [
            { item: "API Response Validation", passed: true },
            { item: "Cross-browser UI Testing", passed: false }
        ],
        risks: [
            { riskDescription: "Scope creep due to AI module addition", likelihood: 4, impact: 4, riskScore: 16, mitigationAction: "Formal Change Request approval process enforced" }
        ]
    });

    console.log("Sample Data Seeded Successfully!");
    process.exit();
})
.catch(err => {
    console.error("Seeding error: ", err);
    process.exit(1);
});