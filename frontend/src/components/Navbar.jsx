import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const tabs = [
    { path: '/', label: '📊 Overview' },
    { path: '/charter', label: '📋 Module 1: Charter' },
    { path: '/requirements', label: '📑 Module 2: Requirements' },
    { path: '/change-requests', label: '🔄 Change Requests' },
    { path: '/schedule', label: '📅 Module 3: WBS & Timeline' },
    { path: '/cost', label: '💲 Module 4: Cost & EVM' },
    { path: '/quality', label: '🛡️ Module 5: Quality & Risks' },
    { path: '/report', label: '📄 Module 6: Master Report' }
  ];

  return (
    <div className="nav-pills-wrapper mb-4">
      <div className="d-flex gap-2">
        {tabs.map((tab, index) => (
          <Link 
            key={index}
            to={tab.path} 
            className={`nav-pill-btn ${location.pathname === tab.path ? 'active' : ''}`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;