import React from 'react';

function Overview() {
  return (
    <div className="container-fluid px-0">
      
      {/* Header & Sync */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold m-0 text-dark">Project Overview & Comprehensive Reporting</h4>
          <p className="text-muted small m-0">Real-time indicators, progress tracking, budget status & critical alerts</p>
        </div>
        <button className="btn btn-dark btn-sm fw-semibold px-3 rounded-3 shadow-sm">
          🔄 Sync Database
        </button>
      </div>

      {/* Top Summary Metrics Cards (Smaller size, Black & Grey theme) */}
      <div className="row g-2 mb-4">
        <div className="col-md-3">
          <div className="dash-card p-2 px-3 border border-secondary border-opacity-50 rounded-3 bg-light">
            <span className="text-muted small d-block fw-semibold" style={{ fontSize: '0.7rem' }}>TOTAL REQUIREMENTS</span>
            <span className="fw-bold text-dark fs-5">5 Modules</span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dash-card p-2 px-3 border border-secondary border-opacity-50 rounded-3 bg-light">
            <span className="text-muted small d-block fw-semibold" style={{ fontSize: '0.7rem' }}>PENDING CHANGE REQ</span>
            <span className="fw-bold text-dark fs-5">1 Request</span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dash-card p-2 px-3 border border-secondary border-opacity-50 rounded-3 bg-light">
            <span className="text-muted small d-block fw-semibold" style={{ fontSize: '0.7rem' }}>DELAYED ACTIVITIES</span>
            <span className="fw-bold text-dark fs-5">2 Tasks</span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dash-card p-2 px-3 border border-secondary border-opacity-50 rounded-3 bg-light">
            <span className="text-muted small d-block fw-semibold" style={{ fontSize: '0.7rem' }}>UNRESOLVED DEFECTS</span>
            <span className="fw-bold text-dark fs-5">2 Critical</span>
          </div>
        </div>
      </div>

      {/* System Specifications Summary (Dark Banner Heading Style) */}
      <div className="dash-card p-0 overflow-hidden mb-4 shadow-sm">
        <div className="p-3 bg-dark text-white border-bottom">
          <h6 className="fw-bold m-0">📌 System Specifications & Baseline Summary</h6>
        </div>
        <div className="p-3">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="p-3 bg-light rounded-3 border">
                <span className="text-muted small d-block">Scope Architecture</span>
                <span className="fw-bold text-dark">5-Hospital Integrated Healthcare Network</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 bg-light rounded-3 border">
                <span className="text-muted small d-block">Approved Planned Budget</span>
                <span className="fw-bold text-dark">PKR 3,000,000 (PV)</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 bg-light rounded-3 border">
                <span className="text-muted small d-block">Total Project Duration</span>
                <span className="fw-bold text-dark">16 Weeks (+3 Weeks Delay)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Indicators (CPI & SPI) */}
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="dash-card h-100 border-secondary">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="fw-bold text-dark m-0">Cost Performance (CPI)</h6>
              <span className="badge bg-secondary bg-opacity-25 text-dark px-2 py-1 fw-bold">Over Budget</span>
            </div>
            <div className="fs-2 fw-bold text-dark mb-1">0.90</div>
            <p className="text-muted small m-0">Actual expenditure exceeds earned value; budget deficit detected.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="dash-card h-100 border-secondary">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="fw-bold text-dark m-0">Schedule Performance (SPI)</h6>
              <span className="badge bg-secondary bg-opacity-25 text-dark px-2 py-1 fw-bold">Behind Schedule</span>
            </div>
            <div className="fs-2 fw-bold text-dark mb-1">0.87</div>
            <p className="text-muted small m-0">Project progress is lagging behind baseline timeline milestones.</p>
          </div>
        </div>
      </div>

      {/* Consolidated Health Status & Reporting Table */}
      <div className="dash-card p-0 overflow-hidden mb-4 shadow-sm">
        <div className="p-3 bg-dark text-white border-bottom">
          <h6 className="fw-bold m-0">📊 Consolidated Project Health & Audit Report</h6>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3 fw-bold text-dark">Project Dimension</th>
                <th className="py-3 px-3 fw-bold text-dark">Current Status / Metric</th>
                <th className="py-3 px-3 fw-bold text-dark">Evaluation / Audit Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-bold px-3 text-dark">Overall Progress</td>
                <td className="px-3 text-secondary">82% Completed across modules</td>
                <td className="px-3"><span className="badge bg-success bg-opacity-10 text-success fw-bold px-2 py-1">On Track</span></td>
              </tr>
              <tr>
                <td className="fw-bold px-3 text-dark">Pending Change Requests</td>
                <td className="px-3 text-secondary">1 Change Request (AI Module addition)</td>
                <td className="px-3"><span className="badge bg-warning bg-opacity-10 text-dark fw-bold px-2 py-1">Under Review</span></td>
              </tr>
              <tr>
                <td className="fw-bold px-3 text-dark">Delayed Activities</td>
                <td className="px-3 text-secondary">Appointment Scheduling & Patient Records</td>
                <td className="px-3"><span className="badge bg-danger bg-opacity-10 text-danger fw-bold px-2 py-1">Critical Path Bottleneck</span></td>
              </tr>
              <tr>
                <td className="fw-bold px-3 text-dark">Budget Status</td>
                <td className="px-3 text-secondary">AC: PKR 2.9M vs EV: PKR 2.6M</td>
                <td className="px-3"><span className="badge bg-danger bg-opacity-10 text-danger fw-bold px-2 py-1">Cost Overrun</span></td>
              </tr>
              <tr>
                <td className="fw-bold px-3 text-dark">Unresolved Critical Defects</td>
                <td className="px-3 text-secondary">Date picker bug & 5-hospital sync failure</td>
                <td className="px-3"><span className="badge bg-danger bg-opacity-10 text-danger fw-bold px-2 py-1">Action Required</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Overview;