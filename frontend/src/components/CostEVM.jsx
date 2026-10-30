import React from 'react';

function CostEVM() {
  const pv = 3000000;
  const ev = 2600000;
  const ac = 2900000;
  const cpi = (ev / ac).toFixed(2); // 0.90
  const spi = (ev / pv).toFixed(2); // 0.87

  // Threshold check for automated warnings
  const isCostOverrun = cpi < 1.0;
  const isScheduleDelayed = spi < 1.0;

  const activityCosts = [
    { task: "System Requirements & SRS", estimated: "PKR 500,000", actual: "PKR 500,000", status: "Completed" },
    { task: "Database Design & Setup", estimated: "PKR 800,000", actual: "PKR 850,000", status: "Over Budget" },
    { task: "Appointment Scheduling Module", estimated: "PKR 1,200,000", actual: "PKR 1,350,000", status: "Over Budget" },
    { task: "Billing & POS Integration", estimated: "PKR 500,000", actual: "PKR 200,000", status: "In Progress" }
  ];

  return (
    <div className="container-fluid px-0">
      
      {/* Header */}
      <div className="mb-4">
        <h4 className="fw-bold m-0 text-dark">Cost Management & Earned Value Analysis (EVM)</h4>
        <p className="text-muted small m-0">Planned budget, actual expenditures, EVM metrics & automated threshold alerts</p>
      </div>

      {/* Automated Threshold Warning Banners */}
      {isCostOverrun && (
        <div className="alert alert-danger shadow-sm border-0 rounded-3 p-3 mb-4 d-flex align-items-center gap-3">
          <span className="fs-4">🚨</span>
          <div>
            <h6 className="fw-bold mb-1">Cost Overrun Warning (Threshold Exceeded):</h6>
            <p className="small mb-0 text-secondary">
              Cost Performance Index (CPI) is <b>{cpi}</b> (below 1.0 threshold). Project is currently spending more than planned for the work completed, resulting in a budget deficit.
            </p>
          </div>
        </div>
      )}

      {isScheduleDelayed && (
        <div className="alert alert-warning shadow-sm border-0 rounded-3 p-3 mb-4 d-flex align-items-center gap-3">
          <span className="fs-4">⚠️</span>
          <div>
            <h6 className="fw-bold mb-1">Schedule Deviation Warning (Threshold Exceeded):</h6>
            <p className="small mb-0 text-secondary">
              Schedule Performance Index (SPI) is <b>{spi}</b> (below 1.0 threshold). Progress is lagging behind the baseline schedule.
            </p>
          </div>
        </div>
      )}

      {/* EVM Metrics Grid */}
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="dash-card h-100">
            <h6 className="fw-bold text-dark mb-3">📊 Financial Metrics (EVM Baseline)</h6>
            <div className="d-flex justify-content-between py-2 border-bottom">
              <span className="text-secondary small">Planned Value (PV):</span>
              <span className="fw-bold text-dark">PKR {pv.toLocaleString()}</span>
            </div>
            <div className="d-flex justify-content-between py-2 border-bottom">
              <span className="text-secondary small">Earned Value (EV):</span>
              <span className="fw-bold text-dark">PKR {ev.toLocaleString()}</span>
            </div>
            <div className="d-flex justify-content-between py-2">
              <span className="text-secondary small">Actual Cost (AC):</span>
              <span className="fw-bold text-dark">PKR {ac.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="dash-card h-100">
            <h6 className="fw-bold text-dark mb-3">📈 Programmatic Performance Indicators</h6>
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span className="text-secondary small">Cost Performance Index (CPI = EV / AC):</span>
              <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 fw-bold">{cpi} (Over Budget)</span>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <span className="text-secondary small">Schedule Performance Index (SPI = EV / PV):</span>
              <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 fw-bold">{spi} (Delayed)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Cost Breakdown Table */}
      <div className="dash-card p-0 overflow-hidden mb-4">
        <div className="p-3 bg-light border-bottom">
          <h6 className="fw-bold text-dark m-0">💰 Activity-wise Cost Estimation & Actual Expenditure</h6>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3">Project Task / Activity</th>
                <th className="py-3 px-3">Estimated Cost (Planned)</th>
                <th className="py-3 px-3">Actual Expenditure</th>
                <th className="py-3 px-3">Variance Status</th>
              </tr>
            </thead>
            <tbody>
              {activityCosts.map((item, idx) => (
                <tr key={idx}>
                  <td className="fw-semibold px-3 text-dark">{item.task}</td>
                  <td className="px-3 text-secondary">{item.estimated}</td>
                  <td className="px-3 text-secondary">{item.actual}</td>
                  <td className="px-3">
                    <span className={`badge ${item.status === 'Over Budget' ? 'bg-danger' : item.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark'} bg-opacity-10 text-${item.status === 'Over Budget' ? 'danger' : item.status === 'Completed' ? 'success' : 'dark'} px-2 py-1`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default CostEVM;