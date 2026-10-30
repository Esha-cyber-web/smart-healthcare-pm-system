import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Charter from './components/Charter';
import Scope from './components/Scope';
import Schedule from './components/Schedule';
import CostEVM from './components/CostEVM';
import Quality from './components/Quality';

function App() {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/project-data')
      .then(res => {
        setProjectData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading || !projectData) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-secondary" role="status"></div>
        <span className="ms-3 text-secondary fw-semibold">Loading Healthcare System...</span>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="container py-4" style={{ maxWidth: '1280px' }}>
        
        {/* Sleek Dark Slate Grey Header Banner */}
        <header className="app-header-grey mb-4 d-flex justify-content-between align-items-center">
          <div>
            <h2 className="fw-extrabold mb-1 tracking-tight">{projectData.charter.projectName}</h2>
            <p className="mb-0 small opacity-75">
              🏥 5-Hospital Integrated Network &nbsp;•&nbsp; 💰 Budget: <b>PKR {projectData.charter.approvedBudget.toLocaleString()}</b> &nbsp;•&nbsp; ⏰ Timeline: <b>{projectData.charter.deadlineWeeks} Weeks</b>
            </p>
          </div>
          <span className="header-badge-grey">MERN Stack System</span>
        </header>

        {/* Modular Navigation Pills Bar */}
        <Navbar />

        {/* Separate Page Routes */}
        <div className="mt-3">
          <Routes>
            <Route path="/" element={<Dashboard data={projectData} />} />
            <Route path="/charter" element={<Charter charter={projectData.charter} />} />
            <Route path="/requirements" element={<Scope scopeWbs={projectData.scopeWbs} charter={projectData.charter} setProjectData={setProjectData} projectData={projectData} />} />
            <Route path="/change-requests" element={<Scope scopeWbs={projectData.scopeWbs} charter={projectData.charter} setProjectData={setProjectData} projectData={projectData} />} />
            <Route path="/schedule" element={<Schedule schedule={projectData.schedule} />} />
            <Route path="/cost" element={<CostEVM costEvm={projectData.costEvm} />} />
            <Route path="/quality" element={<Quality qualityRisk={projectData.qualityRisk} />} />
            <Route path="/report" element={<Dashboard data={projectData} />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;