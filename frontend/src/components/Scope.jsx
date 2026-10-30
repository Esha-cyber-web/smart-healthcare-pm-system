import React, { useState } from 'react';

function Scope() {
  const [requirements] = useState([
    { title: "Appointment Module", desc: "Manage bookings for 5 hospitals", status: "Approved" },
    { title: "Billing System", desc: "Integrated hospital billing", status: "Approved" }
  ]);

  const [wbsPackages] = useState([
    { code: "1.1", name: "Requirements Gathering", level: "Level 1" },
    { code: "1.2", name: "Backend & Database Setup", level: "Level 1" },
    { code: "1.3", name: "Frontend GUI Integration", level: "Level 1" }
  ]);

  const [changeRequests, setChangeRequests] = useState([
    { title: "AI-based preliminary diagnosis module and Mobile App", impact: "+PKR 800,000 | +3 Weeks", status: "Approved" }
  ]);

  const [newChangeTitle, setNewChangeTitle] = useState('');
  const [newCost, setNewCost] = useState('');
  const [newWeeks, setNewWeeks] = useState('');

  const handleAddChangeRequest = (e) => {
    e.preventDefault();
    if (!newChangeTitle) return;
    setChangeRequests([
      ...changeRequests,
      {
        title: newChangeTitle,
        impact: `+PKR ${newCost || '500,000'} | +${newWeeks || '2'} Weeks`,
        status: "Pending"
      }
    ]);
    setNewChangeTitle('');
    setNewCost('');
    setNewWeeks('');
  };

  return (
    <div className="container-fluid px-0">
      
      {/* Page Title Header */}
      <div className="mb-3">
        <h4 className="fw-bold m-0 text-dark">2. Scope Management & Work Breakdown Structure (WBS)</h4>
        <p className="text-muted small m-0">Baseline scope definition, WBS packages, and formal change control mechanism</p>
      </div>

      {/* 1. Approved Requirements Baseline */}
      <div className="mb-3">
        <h6 className="fw-bold text-dark mb-2">Approved Requirements:</h6>
        <div className="d-flex flex-column gap-2">
          {requirements.map((req, idx) => (
            <div key={idx} className="p-2 px-3 border rounded-3 d-flex justify-content-between align-items-center bg-white shadow-sm">
              <div className="text-dark" style={{ fontSize: '0.88rem' }}>
                <strong className="fw-bold">{req.title}:</strong> <span className="text-secondary">{req.desc}</span>
              </div>
              <span className="badge bg-success text-white px-2 py-1 fw-bold" style={{ fontSize: '0.75rem' }}>
                {req.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Hierarchical WBS Work Packages */}
      <div className="mb-3">
        <h6 className="fw-bold text-dark mb-2">Hierarchical WBS Work Packages:</h6>
        <div className="d-flex flex-column gap-2">
          {wbsPackages.map((wbs, idx) => (
            <div key={idx} className="p-2 px-3 border rounded-3 d-flex justify-content-between align-items-center bg-white shadow-sm">
              <div className="text-dark" style={{ fontSize: '0.88rem' }}>
                <span className="text-danger fw-bold me-2">[{wbs.code}]</span>
                <span className="fw-bold">{wbs.name}</span>
              </div>
              <span className="text-muted small fw-semibold">({wbs.level})</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Change Request Mechanism (Impact on Scope & Budget) */}
      <div className="mb-3">
        <h6 className="fw-bold text-dark mb-2">Change Request Mechanism (Impact on Scope & Budget):</h6>
        <div className="bg-light border rounded-3 p-3 shadow-sm">
          <form onSubmit={handleAddChangeRequest}>
            <div className="row g-2">
              <div className="col-md-5">
                <input 
                  type="text" 
                  className="form-control form-control-sm" 
                  placeholder="Proposed Change (e.g., AI Module)" 
                  value={newChangeTitle}
                  onChange={(e) => setNewChangeTitle(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-3">
                <input 
                  type="text" 
                  className="form-control form-control-sm" 
                  placeholder="Cost Impact (PKR)" 
                  value={newCost}
                  onChange={(e) => setNewCost(e.target.value)}
                />
              </div>
              <div className="col-md-2">
                <input 
                  type="text" 
                  className="form-control form-control-sm" 
                  placeholder="Weeks" 
                  value={newWeeks}
                  onChange={(e) => setNewWeeks(e.target.value)}
                />
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary btn-sm w-100 fw-bold">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* 4. Approved Change Requests Log */}
      <div className="mb-3">
        <h6 className="fw-bold text-dark mb-2">Approved Change Requests Log:</h6>
        <div className="d-flex flex-column gap-2">
          {changeRequests.map((req, idx) => (
            <div key={idx} className="p-2 px-3 border rounded-3 d-flex justify-content-between align-items-center bg-white shadow-sm">
              <div className="text-dark" style={{ fontSize: '0.88rem' }}>
                <strong className="fw-bold">{req.title}</strong> <span className="text-muted fw-normal">— {req.impact}</span>
              </div>
              <span className={`badge ${req.status === 'Approved' ? 'bg-success text-white' : 'bg-warning text-dark'} px-2 py-1 fw-bold`} style={{ fontSize: '0.75rem' }}>
                {req.status}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Scope;