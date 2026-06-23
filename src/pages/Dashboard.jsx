import React from 'react';
import { getAll, STORAGE_KEYS } from '../data/storage.js';
import DashboardCard from '../components/DashboardCard.jsx';

export default function Dashboard({ currentUser }) {
  const jobs = getAll(STORAGE_KEYS.JOBS);
  const projects = getAll(STORAGE_KEYS.PROJECTS);
  const applications = getAll(STORAGE_KEYS.APPLICATIONS);
  const users = getAll(STORAGE_KEYS.USERS);

  let stats = {};

  if (currentUser.role === 'job_seeker') {
    const myApps = applications.filter((a) => a.userId === currentUser.id);
    stats = {
      applications: myApps.length,
      accepted: myApps.filter((a) => a.status === 'accepted').length,
      pending: myApps.filter((a) => a.status === 'pending').length,
      jobs: jobs.filter((j) => j.status === 'open').length,
    };
  } else if (currentUser.role === 'employer') {
    const myJobs = jobs.filter((j) => j.employerId === currentUser.id);
    const myProjects = projects.filter((p) => p.employerId === currentUser.id);
    const myApps = applications.filter((a) => a.employerId === currentUser.id);

    stats = {
      jobs: myJobs.length,
      projects: myProjects.length,
      applications: myApps.length,
      open: myJobs.filter((j) => j.status === 'open').length,
    };
  } else if (currentUser.role === 'admin') {
    stats = {
      users: users.length,
      jobs: jobs.length,
      projects: projects.length,
      applications: applications.length,
    };
  }

  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      <h1 style={{ marginBottom: 'var(--spacing-xl)' }}>
        Welcome back, {currentUser.name}
      </h1>

      <div className="dashboard-grid">
        {currentUser.role === 'job_seeker' && (
          <>
            <DashboardCard icon="📋" label="Applications" value={stats.applications} color="primary" />
            <DashboardCard icon="✅" label="Accepted" value={stats.accepted} color="accent" />
            <DashboardCard icon="⏳" label="Pending" value={stats.pending} color="warning" />
            <DashboardCard icon="💼" label="Open Jobs" value={stats.jobs} color="secondary" />
          </>
        )}

        {currentUser.role === 'employer' && (
          <>
            <DashboardCard icon="💼" label="Jobs Posted" value={stats.jobs} color="primary" />
            <DashboardCard icon="🏗️" label="Projects" value={stats.projects} color="secondary" />
            <DashboardCard icon="📨" label="Applications" value={stats.applications} color="accent" />
            <DashboardCard icon="🔓" label="Open Positions" value={stats.open} color="warning" />
          </>
        )}

        {currentUser.role === 'admin' && (
          <>
            <DashboardCard icon="👥" label="Users" value={stats.users} color="primary" />
            <DashboardCard icon="💼" label="Jobs" value={stats.jobs} color="secondary" />
            <DashboardCard icon="🏗️" label="Projects" value={stats.projects} color="accent" />
            <DashboardCard icon="📨" label="Applications" value={stats.applications} color="warning" />
          </>
        )}
      </div>

      <div style={{ marginTop: 'var(--spacing-3xl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Quick Links</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--spacing-lg)' }}>
          {currentUser.role === 'job_seeker' && (
            <>
              <a href="/jobs" className="btn btn-primary">Browse Jobs</a>
              <a href="/applications" className="btn btn-outline">My Applications</a>
              <a href="/profile" className="btn btn-outline">Edit Profile</a>
            </>
          )}
          {currentUser.role === 'employer' && (
            <>
              <a href="/jobs" className="btn btn-primary">My Jobs</a>
              <a href="/projects" className="btn btn-outline">Projects</a>
              <a href="/profile" className="btn btn-outline">Company Info</a>
            </>
          )}
          {currentUser.role === 'admin' && (
            <>
              <a href="/admin" className="btn btn-primary">Admin Panel</a>
              <a href="/profile" className="btn btn-outline">Settings</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
