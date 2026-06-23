import React from 'react';
import { Link } from 'wouter';

export default function ProjectCard({ project, onEdit, onDelete, currentUserRole }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'ongoing':
        return 'info';
      case 'planning':
        return 'warning';
      default:
        return 'primary';
    }
  };

  return (
    <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
      <div className="card-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h3 style={{ margin: 0, marginBottom: 'var(--spacing-sm)' }}>{project.name}</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '14px' }}>
              {project.company}
            </p>
          </div>
          <span className={`badge badge-${getStatusColor(project.status)}`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>
      </div>

      <div className="card-body">
        <p>{project.description}</p>

        <div style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-lg)' }}>
            <div>
              <small style={{ color: 'var(--text-secondary)' }}>Location</small>
              <p style={{ margin: 0, fontWeight: 600 }}>{project.location}</p>
            </div>
            <div>
              <small style={{ color: 'var(--text-secondary)' }}>Budget</small>
              <p style={{ margin: 0, fontWeight: 600 }}>{project.budget}</p>
            </div>
            <div>
              <small style={{ color: 'var(--text-secondary)' }}>Start Date</small>
              <p style={{ margin: 0, fontWeight: 600 }}>{project.startDate}</p>
            </div>
            <div>
              <small style={{ color: 'var(--text-secondary)' }}>End Date</small>
              <p style={{ margin: 0, fontWeight: 600 }}>{project.endDate}</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <small style={{ color: 'var(--text-secondary)' }}>Progress</small>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            marginTop: 'var(--spacing-sm)',
          }}>
            <div style={{
              width: `${project.progress}%`,
              height: '100%',
              backgroundColor: 'var(--primary)',
              transition: 'width 0.3s ease',
            }} />
          </div>
          <p style={{ margin: 'var(--spacing-sm) 0 0 0', fontSize: '12px', color: 'var(--text-secondary)' }}>
            {project.progress}% Complete
          </p>
        </div>

        {project.team && project.team.length > 0 && (
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <small style={{ color: 'var(--text-secondary)' }}>Team Members: {project.team.length}</small>
          </div>
        )}
      </div>

      <div className="card-footer">
        <Link href={`/projects/${project.id}`} className="btn btn-primary">
          View Details
        </Link>
        {currentUserRole === 'employer' && (
          <>
            <button className="btn btn-outline" onClick={() => onEdit(project.id)}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={() => onDelete(project.id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
