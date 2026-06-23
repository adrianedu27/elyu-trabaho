import React, { useState, useMemo } from 'react';
import { getAll, update, STORAGE_KEYS } from '../data/storage.js';
import ApplicationCard from '../components/ApplicationCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

export default function Applications({ currentUser }) {
  const [applications, setApplications] = useState(getAll(STORAGE_KEYS.APPLICATIONS));
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const filters = [
    { label: 'All Status', value: '' },
    { label: 'Pending', value: 'pending' },
    { label: 'Accepted', value: 'accepted' },
    { label: 'Rejected', value: 'rejected' },
  ];

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const matchesSearch =
        app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.userName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter = !filterStatus || app.status === filterStatus;

      if (currentUser.role === 'job_seeker') {
        return app.userId === currentUser.id && matchesSearch && matchesFilter;
      } else if (currentUser.role === 'employer') {
        return app.employerId === currentUser.id && matchesSearch && matchesFilter;
      }

      return matchesSearch && matchesFilter;
    });
  }, [applications, searchTerm, filterStatus, currentUser]);

  const handleSearch = (term, filter) => {
    setSearchTerm(term);
    setFilterStatus(filter);
  };

  const handleStatusChange = (appId, newStatus) => {
    const updated = update(STORAGE_KEYS.APPLICATIONS, appId, { status: newStatus });
    if (updated) {
      setApplications(
        applications.map((app) => (app.id === appId ? updated : app))
      );
      alert(`Application ${newStatus} successfully!`);
    }
  };

  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      <h1 style={{ marginBottom: 'var(--spacing-xl)' }}>
        {currentUser.role === 'job_seeker' ? 'My Applications' : 'Received Applications'}
      </h1>

      <SearchBar
        onSearch={handleSearch}
        placeholder={
          currentUser.role === 'job_seeker'
            ? 'Search by job title...'
            : 'Search by applicant name or job title...'
        }
        filters={filters}
      />

      {filteredApplications.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📭</div>
          <h3>No applications found</h3>
          <p>
            {currentUser.role === 'job_seeker'
              ? 'You haven\'t applied to any jobs yet. Start browsing available positions!'
              : 'No applications received yet.'}
          </p>
        </div>
      ) : (
        <div>
          {filteredApplications.map((application) => (
            <ApplicationCard
              key={application.id}
              application={application}
              onStatusChange={handleStatusChange}
              currentUserRole={currentUser.role}
            />
          ))}
        </div>
      )}
    </div>
  );
}
