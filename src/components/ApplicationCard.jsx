import React from 'react';

export default function ApplicationCard({ application, onStatusChange, currentUserRole }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted':
        return 'success';
      case 'rejected':
        return 'danger';
      case 'pending':
        return 'warning';
      default:
        return 'info';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
      <div className="card-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h3 style={{ margin: 0, marginBottom: 'var(--spacing-sm)' }}>
              {application.jobTitle}
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '14px' }}>
              {currentUserRole === 'job_seeker' ? application.company : application.userName}
            </p>
          </div>
          <span className={`badge badge-${getStatusColor(application.status)}`}>
            {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
          </span>
        </div>
      </div>

      <div className="card-body">
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <small style={{ color: 'var(--text-secondary)' }}>Cover Letter</small>
          <p style={{ margin: 'var(--spacing-sm) 0 0 0' }}>{application.coverLetter}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-lg)' }}>
          <div>
            <small style={{ color: 'var(--text-secondary)' }}>Applied Date</small>
            <p style={{ margin: 0, fontWeight: 600 }}>{formatDate(application.appliedDate)}</p>
          </div>
          <div>
            <small style={{ color: 'var(--text-secondary)' }}>Status</small>
            <p style={{ margin: 0, fontWeight: 600, textTransform: 'capitalize' }}>
              {application.status}
            </p>
          </div>
        </div>
      </div>

      {currentUserRole === 'employer' && application.status === 'pending' && (
        <div className="card-footer">
          <button
            className="btn btn-accent"
            onClick={() => onStatusChange(application.id, 'accepted')}
          >
            Accept
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onStatusChange(application.id, 'rejected')}
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
}
