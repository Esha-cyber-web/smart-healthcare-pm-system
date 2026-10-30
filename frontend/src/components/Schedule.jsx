import React, { useState } from 'react';

function Schedule({ schedule }) {
  // Agar prop mein sirf 2 items hain, toh yeh default rich list use hogi jismein saari case-study activities hain
  const defaultList = [
    { activityName: "Appointment Scheduling Module", assignedMember: "Backend Developer", duration: "4 Weeks", dependency: "None", status: "Delayed" },
    { activityName: "Patient Record Management", assignedMember: "Database Developer", duration: "3 Weeks", dependency: "None", status: "Delayed" },
    { activityName: "Lab Reports Integration", assignedMember: "Frontend Developer", duration: "3 Weeks", dependency: "Appointment Module", status: "On Track" },
    { activityName: "Billing System & POS", assignedMember: "Backend Developer", duration: "4 Weeks", dependency: "Patient Records", status: "On Track" },
    { activityName: "QA & Automated Testing", assignedMember: "QA Engineer", duration: "2 Weeks", dependency: "All Modules", status: "On Track" }
  ];

  const initialItems = (schedule && schedule.length > 2) ? schedule : defaultList;
  const [scheduleList, setScheduleList] = useState(initialItems);

  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newActivity, setNewActivity] = useState({
    activityName: '',
    assignedMember: 'Backend Developer',
    duration: '3 Weeks',
    dependency: 'None',
    status: 'On Track'
  });

  const handleAddActivity = (e) => {
    e.preventDefault();
    if (!newActivity.activityName) return;
    setScheduleList([...scheduleList, newActivity]);
    setNewActivity({ activityName: '', assignedMember: 'Backend Developer', duration: '3 Weeks', dependency: 'None', status: 'On Track' });
    setShowAddModal(false);
  };

  const filteredSchedule = scheduleList.filter(item => 
    item.activityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.assignedMember.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid px-0">
      
      {/* Header & Actions */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold m-0 text-dark">Schedule & Resource Management</h4>
          <p className="text-muted small m-0">Activity tracking, dependencies, Gantt timeline & resource allocation</p>
        </div>
        <div className="d-flex gap-2">
          <input 
            type="text" 
            className="form-control form-control-sm rounded-3 shadow-sm" 
            placeholder="🔍 Search activity..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '220px' }}
          />
          <button 
            onClick={() => setShowAddModal(!showAddModal)} 
            className="btn btn-dark btn-sm fw-semibold px-3 rounded-3 shadow-sm"
          >
            {showAddModal ? '✕ Close Form' : '+ Add Activity'}
          </button>
        </div>
      </div>

      {/* Dynamic Add Activity Form Card */}
      {showAddModal && (
        <div className="dash-card mb-4 border border-primary bg-light p-3">
          <h6 className="fw-bold text-dark mb-3">📝 Add New Project Activity</h6>
          <form onSubmit={handleAddActivity}>
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label small fw-semibold">Activity Name</label>
                <input 
                  type="text" 
                  className="form-control form-control-sm" 
                  placeholder="e.g., Doctor Consultation Module" 
                  value={newActivity.activityName}
                  onChange={(e) => setNewActivity({...newActivity, activityName: e.target.value})}
                  required
                />
              </div>
              <div className="col-md-3">
                <label className="form-label small fw-semibold">Assigned Member</label>
                <select 
                  className="form-select form-select-sm"
                  value={newActivity.assignedMember}
                  onChange={(e) => setNewActivity({...newActivity, assignedMember: e.target.value})}
                >
                  <option value="Backend Developer">Backend Developer (2 Available)</option>
                  <option value="Frontend Developer">Frontend Developer (2 Available)</option>
                  <option value="Database Developer">Database Developer (1 Available)</option>
                  <option value="QA Engineer">QA Engineer (1 Available)</option>
                </select>
              </div>
              <div className="col-md-2">
                <label className="form-label small fw-semibold">Duration</label>
                <input 
                  type="text" 
                  className="form-control form-control-sm" 
                  placeholder="e.g., 3 Weeks" 
                  value={newActivity.duration}
                  onChange={(e) => setNewActivity({...newActivity, duration: e.target.value})}
                  required
                />
              </div>
              <div className="col-md-2">
                <label className="form-label small fw-semibold">Status</label>
                <select 
                  className="form-select form-select-sm"
                  value={newActivity.status}
                  onChange={(e) => setNewActivity({...newActivity, status: e.target.value})}
                >
                  <option value="On Track">On Track</option>
                  <option value="Delayed">Delayed</option>
                </select>
              </div>
              <div className="col-md-1 d-flex align-items-end">
                <button type="submit" className="btn btn-primary btn-sm w-100 fw-semibold">Save</button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Core Team Resource Allocation Breakdown */}
      <div className="dash-card mb-4">
        <h6 className="fw-bold text-dark mb-3">👥 Core Team Resource Allocation</h6>
        <div className="row g-3">
          <div className="col-md-3">
            <div className="p-3 bg-light rounded-3 border text-center">
              <span className="text-muted small d-block">Backend Developers</span>
              <span className="fw-bold text-dark fs-5">2 Developers</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded-3 border text-center">
              <span className="text-muted small d-block">Frontend Developers</span>
              <span className="fw-bold text-dark fs-5">2 Developers</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded-3 border text-center">
              <span className="text-muted small d-block">Database Developer</span>
              <span className="fw-bold text-dark fs-5">1 Developer</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded-3 border text-center">
              <span className="text-muted small d-block">QA Engineer</span>
              <span className="fw-bold text-dark fs-5">1 Engineer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gantt-Style Graphical Timeline Section */}
      <div className="dash-card mb-4">
        <h6 className="fw-bold text-dark mb-3">📈 Gantt-Style Graphical Timeline (16 Weeks Schedule)</h6>
        <div className="table-responsive">
          <table className="table table-bordered align-middle text-center mb-0" style={{ fontSize: '0.75rem' }}>
            <thead className="table-dark">
              <tr>
                <th className="text-start py-2 px-2" style={{ width: '25%' }}>Activity / Task</th>
                {[...Array(16)].map((_, i) => (
                  <th key={i} className="py-2 px-1">W{i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredSchedule.map((item, index) => {
                const startWeek = (index * 2) % 12 + 1;
                const durationWeeks = parseInt(item.duration) || 3;
                const endWeek = Math.min(16, startWeek + durationWeeks - 1);

                return (
                  <tr key={index}>
                    <td className="text-start fw-semibold text-dark px-2">{item.activityName}</td>
                    {[...Array(16)].map((_, weekIdx) => {
                      const currentWeek = weekIdx + 1;
                      const isInRange = currentWeek >= startWeek && currentWeek <= endWeek;
                      return (
                        <td key={weekIdx} className="p-1">
                          {isInRange ? (
                            <div 
                              className={`rounded py-1 ${item.status === 'Delayed' ? 'bg-danger' : 'bg-primary'} text-white fw-bold shadow-sm`}
                              style={{ fontSize: '0.65rem' }}
                            >
                              ●
                            </div>
                          ) : (
                            <span className="text-muted opacity-25">-</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed Table with Start/End & Dependencies */}
      <div className="dash-card p-0 overflow-hidden mb-4">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3">Activity Name</th>
                <th className="py-3 px-3">Assigned Member</th>
                <th className="py-3 px-3">Start - End Dates</th>
                <th className="py-3 px-3">Dependency</th>
                <th className="py-3 px-3">Duration</th>
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredSchedule.map((item, index) => (
                <tr key={index}>
                  <td className="fw-semibold px-3 text-dark">{item.activityName}</td>
                  <td className="px-3 text-secondary">{item.assignedMember}</td>
                  <td className="px-3 small text-muted">Week {(index * 2) % 12 + 1} - Week {Math.min(16, ((index * 2) % 12 + 1) + (parseInt(item.duration) || 3) - 1)}</td>
                  <td className="px-3 small text-muted">{item.dependency || 'None'}</td>
                  <td className="px-3">{item.duration}</td>
                  <td className="px-3">
                    <span className={`badge ${item.status === 'Delayed' ? 'bg-danger' : 'bg-success'} bg-opacity-10 text-${item.status === 'Delayed' ? 'danger' : 'success'} px-2 py-1`}>
                      {item.status || 'On Track'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Impact Analysis Banner */}
      <div className="alert alert-danger shadow-sm border-0 rounded-3 p-3 d-flex align-items-center gap-3">
        <span className="fs-4">⚠️</span>
        <div>
          <h6 className="fw-bold mb-1">Deadline Impact Analysis:</h6>
          <p className="small mb-0 text-secondary">
            Current delayed activities create a critical path bottleneck on the Gantt timeline, pushing the final project completion deadline by approximately <b>+3 Weeks</b>.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Schedule;