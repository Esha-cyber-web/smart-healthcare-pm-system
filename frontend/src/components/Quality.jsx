import React from 'react';

function QualityRisk() {
  const defects = [
    { title: "Critical defect in appointment scheduling date picker", severity: "Critical", assigned: "QA Engineer", status: "Open" },
    { title: "Patient record synchronization failure across 5 hospitals", severity: "Critical", assigned: "Backend Developer", status: "In Progress" },
    { title: "UI styling glitch in billing invoice table", severity: "Medium", assigned: "Frontend Developer", status: "Resolved" }
  ];

  const checklist = [
    { item: "API Response Validation & Payload Structure", result: "Passed" },
    { item: "Cross-browser UI Testing & Responsiveness", result: "Failed" },
    { item: "Database Connection & Cloud Cluster Security", result: "Passed" },
    { item: "Role-Based Access Control (RBAC) Verification", result: "Passed" }
  ];

  const risks = [
    { risk: "Scope creep due to AI module addition", likelihood: 4, impact: 4, score: 16, mitigation: "Formal Change Request approval process enforced" },
    { risk: "Database latency under 5-hospital peak load", likelihood: 3, impact: 4, score: 12, mitigation: "MongoDB indexing and query optimization" },
    { risk: "API integration failure with external lab systems", likelihood: 3, impact: 3, score: 9, mitigation: "Mock fallback service and rigorous Postman testing" }
  ];

  const pdpcSteps = [
    { problem: "Database Synchronization Delay", preventive: "Optimize indexes & connection pooling", corrective: "Failover to replica cluster immediately" },
    { problem: "Critical Developer Resource Shortage", preventive: "Cross-training frontend & backend members", corrective: "Reallocate QA to assist urgent backend bug fixing" },
    { problem: "API Endpoint Downtime / Timeout", preventive: "Implement automated health checks", corrective: "Switch to secondary backup server instance" }
  ];

  return (
    <div className="container-fluid px-0">
      
      {/* Header */}
      <div className="mb-4">
        <h4 className="fw-bold m-0 text-dark">Quality Management & Risk Control</h4>
        <p className="text-muted small m-0">Defect tracking, quality inspection checklist, risk prioritization matrix & PDPC risk response</p>
      </div>

      {/* 1. Defect Tracking Module */}
      <div className="dash-card p-0 overflow-hidden mb-4 shadow-sm">
        <div className="p-3 bg-dark text-white border-bottom">
          <h6 className="fw-bold m-0">🐛 Defect Tracking & Resolution Status</h6>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3 fw-bold text-dark">Defect Description (Main Issue)</th>
                <th className="py-3 px-3 fw-bold text-dark">Severity</th>
                <th className="py-3 px-3 fw-bold text-dark">Assigned Personnel</th>
                <th className="py-3 px-3 fw-bold text-dark">Resolution Status</th>
              </tr>
            </thead>
            <tbody>
              {defects.map((item, idx) => (
                <tr key={idx}>
                  <td className="fw-bold px-3 text-dark">{item.title}</td>
                  <td className="px-3">
                    <span className={`badge ${item.severity === 'Critical' ? 'bg-danger' : 'bg-warning text-dark'} bg-opacity-10 text-${item.severity === 'Critical' ? 'danger' : 'dark'} px-2 py-1 fw-bold`}>
                      {item.severity}
                    </span>
                  </td>
                  <td className="px-3 fw-semibold text-secondary">{item.assigned}</td>
                  <td className="px-3">
                    <span className={`badge ${item.status === 'Resolved' ? 'bg-success' : item.status === 'In Progress' ? 'bg-primary' : 'bg-danger'} bg-opacity-10 text-${item.status === 'Resolved' ? 'success' : item.status === 'In Progress' ? 'primary' : 'danger'} px-2 py-1 fw-bold`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Quality Inspection Checklist */}
      <div className="dash-card p-0 overflow-hidden mb-4 shadow-sm">
        <div className="p-3 bg-dark text-white border-bottom">
          <h6 className="fw-bold m-0">📋 Quality Inspection & Testing Checklist</h6>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3 fw-bold text-dark">Project Deliverable / Test Item</th>
                <th className="py-3 px-3 fw-bold text-dark">Inspection Result</th>
              </tr>
            </thead>
            <tbody>
              {checklist.map((item, idx) => (
                <tr key={idx}>
                  <td className="fw-bold px-3 text-dark">{item.item}</td>
                  <td className="px-3">
                    <span className={`badge ${item.result === 'Passed' ? 'bg-success' : 'bg-danger'} bg-opacity-10 text-${item.result === 'Passed' ? 'success' : 'danger'} px-2 py-1 fw-bold`}>
                      {item.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Risk Prioritization Matrix */}
      <div className="dash-card p-0 overflow-hidden mb-4 shadow-sm">
        <div className="p-3 bg-dark text-white border-bottom">
          <h6 className="fw-bold m-0">⚠️ Risk Prioritization Matrix (Likelihood vs Impact)</h6>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3 fw-bold text-dark">Risk Description</th>
                <th className="py-3 px-3 fw-bold text-dark">Likelihood (1-5)</th>
                <th className="py-3 px-3 fw-bold text-dark">Impact (1-5)</th>
                <th className="py-3 px-3 fw-bold text-dark">Risk Score</th>
                <th className="py-3 px-3 fw-bold text-dark">Mitigation Action</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((item, idx) => (
                <tr key={idx}>
                  <td className="fw-bold px-3 text-dark">{item.risk}</td>
                  <td className="px-3 fw-semibold text-secondary">{item.likelihood}</td>
                  <td className="px-3 fw-semibold text-secondary">{item.impact}</td>
                  <td className="px-3">
                    <span className="badge bg-danger bg-opacity-10 text-danger px-2 py-1 fw-bold">
                      {item.score}
                    </span>
                  </td>
                  <td className="px-3 text-secondary small fw-semibold">{item.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Process Decision Program Chart (PDPC) Risk Response View */}
      <div className="dash-card p-0 overflow-hidden mb-4 shadow-sm">
        <div className="p-3 bg-dark text-white border-bottom">
          <h6 className="fw-bold m-0">🔄 Process Decision Program Chart (PDPC) - Risk Response View</h6>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3 fw-bold text-dark">Potential Problem / Risk</th>
                <th className="py-3 px-3 fw-bold text-dark">Preventive Action</th>
                <th className="py-3 px-3 fw-bold text-dark">Corrective Action (Contingency)</th>
              </tr>
            </thead>
            <tbody>
              {pdpcSteps.map((item, idx) => (
                <tr key={idx}>
                  <td className="fw-bold px-3 text-danger">{item.problem}</td>
                  <td className="px-3 text-secondary small fw-semibold">{item.preventive}</td>
                  <td className="px-3 text-dark small fw-bold">{item.corrective}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default QualityRisk;