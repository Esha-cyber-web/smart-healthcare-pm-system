import React from 'react';

function Charter({ charter }) {
  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="text-secondary mb-3">1. Project Initiation & Charter</h3>
      <hr />
      
      <h5 className="text-dark fw-bold mt-3">Objectives (5 Hospitals Scope):</h5>
      <ul className="list-group list-group-flush mb-3">
        {charter.objectives.map((o, i) => (
          <li key={i} className="list-group-item">{o}</li>
        ))}
      </ul>

      <h5 className="text-dark fw-bold">Key Stakeholders:</h5>
      <p className="text-muted">{charter.stakeholders.join(', ')}</p>

      <h5 className="text-dark fw-bold mt-4">Project Milestones:</h5>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Milestone Title</th>
              <th>Target Week</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {charter.milestones.map((m, i) => (
              <tr key={i}>
                <td className="fw-semibold">{m.title}</td>
                <td>Week {m.week}</td>
                <td><span className="badge bg-info text-dark">{m.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Charter;