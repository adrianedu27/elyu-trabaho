import React from 'react';

export default function DashboardCard({ icon, label, value, color = 'primary' }) {
  return (
    <div className="dashboard-card" style={{ borderTop: `4px solid var(--${color})` }}>
      <div style={{ fontSize: '24px' }}>{icon}</div>
      <div className="dashboard-card-value">{value}</div>
      <div className="dashboard-card-label">{label}</div>
    </div>
  );
}
