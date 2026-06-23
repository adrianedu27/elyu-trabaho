import React from 'react';
import { Link } from 'wouter';

export default function JobCard({ job, onApply, isApplied, currentUserRole }) {
  return (
    <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
      <div className="card-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h3 style={{ margin: 0, marginBottom: 'var(--spacing-sm)' }}>{job.title}</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '14px' }}>
              {job.company}
            </p>
          </div>
          <span className={`badge badge-${job.status === 'open' ? 'success' : 'warning'}`}>
            {job.status === 'open' ? 'Open' : 'Closed'}
          </span>
        </div>
      </div>

      <div className="card-body">
        <p>{job.description}</p>

        <div style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
          <h5 style={{ marginBottom: 'var(--spacing-sm)' }}>Requirements:</h5>
          <ul style={{ marginLeft: '20px', color: 'var(--text-secondary)' }}>
            {job.requirements?.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
          <div>
            <small style={{ color: 'var(--text-secondary)' }}>Location</small>
            <p style={{ margin: 0, fontWeight: 600 }}>{job.location}</p>
          </div>
          <div>
            <small style={{ color: 'var(--text-secondary)' }}>Salary</small>
            <p style={{ margin: 0, fontWeight: 600 }}>{job.salary}</p>
          </div>
          <div>
            <small style={{ color: 'var(--text-secondary)' }}>Type</small>
            <p style={{ margin: 0, fontWeight: 600 }}>{job.jobType}</p>
          </div>
          <div>
            <small style={{ color: 'var(--text-secondary)' }}>Applicants</small>
            <p style={{ margin: 0, fontWeight: 600 }}>{job.applicants || 0}</p>
          </div>
        </div>

        {job.skills && job.skills.length > 0 && (
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <small style={{ color: 'var(--text-secondary)' }}>Required Skills:</small>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap', marginTop: 'var(--spacing-sm)' }}>
              {job.skills.map((skill, idx) => (
                <span key={idx} className="badge badge-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="card-footer">
        {currentUserRole === 'job_seeker' && (
          <button
            className={`btn ${isApplied ? 'btn-outline' : 'btn-primary'}`}
            onClick={() => onApply(job.id)}
            disabled={isApplied}
          >
            {isApplied ? '✓ Applied' : 'Apply Now'}
          </button>
        )}
        {currentUserRole === 'employer' && (
          <Link href={`/jobs/${job.id}`} className="btn btn-primary">
            View Details
          </Link>
        )}
      </div>
    </div>
  );
}
