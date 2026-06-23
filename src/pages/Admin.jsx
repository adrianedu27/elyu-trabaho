import React, { useState } from 'react';
import { getAll, remove, STORAGE_KEYS } from '../data/storage.js';

export default function Admin({ currentUser }) {
  const [users, setUsers] = useState(getAll(STORAGE_KEYS.USERS));
  const [jobs, setJobs] = useState(getAll(STORAGE_KEYS.JOBS));
  const [projects, setProjects] = useState(getAll(STORAGE_KEYS.PROJECTS));
  const [applications, setApplications] = useState(getAll(STORAGE_KEYS.APPLICATIONS));
  const [activeTab, setActiveTab] = useState('users');

  const handleDeleteUser = (userId) => {
    if (confirm('Are you sure you want to delete this user?')) {
      remove(STORAGE_KEYS.USERS, userId);
      setUsers(users.filter((u) => u.id !== userId));
      alert('User deleted successfully!');
    }
  };

  const handleDeleteJob = (jobId) => {
    if (confirm('Are you sure you want to delete this job?')) {
      remove(STORAGE_KEYS.JOBS, jobId);
      setJobs(jobs.filter((j) => j.id !== jobId));
      alert('Job deleted successfully!');
    }
  };

  const handleDeleteProject = (projectId) => {
    if (confirm('Are you sure you want to delete this project?')) {
      remove(STORAGE_KEYS.PROJECTS, projectId);
      setProjects(projects.filter((p) => p.id !== projectId));
      alert('Project deleted successfully!');
    }
  };

  const handleDeleteApplication = (appId) => {
    if (confirm('Are you sure you want to delete this application?')) {
      remove(STORAGE_KEYS.APPLICATIONS, appId);
      setApplications(applications.filter((a) => a.id !== appId));
      alert('Application deleted successfully!');
    }
  };

  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      <h1 style={{ marginBottom: 'var(--spacing-xl)' }}>Admin Panel</h1>

      <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-2xl)', borderBottom: '2px solid var(--border-color)' }}>
        <button
          className={`btn ${activeTab === 'users' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setActiveTab('users')}
        >
          Users ({users.length})
        </button>
        <button
          className={`btn ${activeTab === 'jobs' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setActiveTab('jobs')}
        >
          Jobs ({jobs.length})
        </button>
        <button
          className={`btn ${activeTab === 'projects' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects ({projects.length})
        </button>
        <button
          className={`btn ${activeTab === 'applications' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setActiveTab('applications')}
        >
          Applications ({applications.length})
        </button>
      </div>

      {activeTab === 'users' && (
        <div>
          <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Users Management</h2>
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`badge badge-${user.role === 'admin' ? 'danger' : user.role === 'employer' ? 'secondary' : 'primary'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>{user.location || '-'}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'jobs' && (
        <div>
          <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Jobs Management</h2>
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Applicants</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>{job.location}</td>
                    <td>
                      <span className={`badge badge-${job.status === 'open' ? 'success' : 'warning'}`}>
                        {job.status}
                      </span>
                    </td>
                    <td>{job.applicants || 0}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteJob(job.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'projects' && (
        <div>
          <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Projects Management</h2>
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{project.company}</td>
                    <td>{project.location}</td>
                    <td>
                      <span className={`badge badge-${project.status === 'completed' ? 'success' : project.status === 'ongoing' ? 'info' : 'warning'}`}>
                        {project.status}
                      </span>
                    </td>
                    <td>{project.progress}%</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteProject(project.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'applications' && (
        <div>
          <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Applications Management</h2>
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Applicant</th>
                  <th>Status</th>
                  <th>Applied Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td>{app.jobTitle}</td>
                    <td>{app.userName}</td>
                    <td>
                      <span className={`badge badge-${app.status === 'accepted' ? 'success' : app.status === 'rejected' ? 'danger' : 'warning'}`}>
                        {app.status}
                      </span>
                    </td>
                    <td>{new Date(app.appliedDate).toLocaleDateString()}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteApplication(app.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
