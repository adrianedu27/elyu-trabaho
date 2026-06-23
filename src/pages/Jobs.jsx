import React, { useState, useMemo } from 'react';
import { getAll, add, STORAGE_KEYS } from '../data/storage.js';
import JobCard from '../components/JobCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

export default function Jobs({ currentUser }) {
  const [jobs, setJobs] = useState(getAll(STORAGE_KEYS.JOBS));
  const [applications, setApplications] = useState(getAll(STORAGE_KEYS.APPLICATIONS));
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    salary: '',
    jobType: 'Full-time',
    requirements: '',
    skills: '',
  });

  const filters = [
    { label: 'All Types', value: '' },
    { label: 'Full-time', value: 'Full-time' },
    { label: 'Contract', value: 'Contract' },
    { label: 'Part-time', value: 'Part-time' },
  ];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter = !filterType || job.jobType === filterType;

      if (currentUser.role === 'employer') {
        return job.employerId === currentUser.id && matchesSearch && matchesFilter;
      }

      return matchesSearch && matchesFilter;
    });
  }, [jobs, searchTerm, filterType, currentUser]);

  const handleSearch = (term, filter) => {
    setSearchTerm(term);
    setFilterType(filter);
  };

  const handleApply = (jobId) => {
    const job = jobs.find((j) => j.id === jobId);
    const newApplication = add(STORAGE_KEYS.APPLICATIONS, {
      jobId,
      jobTitle: job.title,
      userId: currentUser.id,
      userName: currentUser.name,
      company: job.company,
      employerId: job.employerId,
      status: 'pending',
      coverLetter: 'I am interested in this position.',
    });

    if (newApplication) {
      setApplications([...applications, newApplication]);
      alert('Application submitted successfully!');
    }
  };

  const isJobApplied = (jobId) => {
    return applications.some(
      (app) => app.jobId === jobId && app.userId === currentUser.id
    );
  };

  const handlePostJob = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.location) {
      alert('Please fill in all required fields');
      return;
    }

    const newJob = add(STORAGE_KEYS.JOBS, {
      title: formData.title,
      company: currentUser.company || currentUser.name,
      employerId: currentUser.id,
      location: formData.location,
      description: formData.description,
      salary: formData.salary,
      salaryMin: parseInt(formData.salary.split('-')[0].replace(/[^0-9]/g, '')) || 0,
      salaryMax: parseInt(formData.salary.split('-')[1]?.replace(/[^0-9]/g, '')) || 0,
      jobType: formData.jobType,
      requirements: formData.requirements.split(',').map((r) => r.trim()),
      skills: formData.skills.split(',').map((s) => s.trim()),
      status: 'open',
      applicants: 0,
    });

    if (newJob) {
      setJobs([...jobs, newJob]);
      setFormData({
        title: '',
        description: '',
        location: '',
        salary: '',
        jobType: 'Full-time',
        requirements: '',
        skills: '',
      });
      setShowForm(false);
      alert('Job posted successfully!');
    }
  };

  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ margin: 0 }}>
          {currentUser.role === 'job_seeker' ? 'Browse Jobs' : 'My Job Listings'}
        </h1>
        {currentUser.role === 'employer' && (
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancel' : '+ Post New Job'}
          </button>
        )}
      </div>

      {showForm && currentUser.role === 'employer' && (
        <div className="card" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <div className="card-header">
            <h3 style={{ margin: 0 }}>Post a New Job</h3>
          </div>
          <form onSubmit={handlePostJob} className="card-body">
            <div className="form-group">
              <label>Job Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Experienced Carpenter"
                required
              />
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe the job and responsibilities"
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-lg)' }}>
              <div className="form-group">
                <label>Location *</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="City, Province"
                  required
                />
              </div>

              <div className="form-group">
                <label>Salary Range</label>
                <input
                  type="text"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  placeholder="₱20,000 - ₱30,000"
                />
              </div>

              <div className="form-group">
                <label>Job Type</label>
                <select
                  value={formData.jobType}
                  onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                >
                  <option>Full-time</option>
                  <option>Contract</option>
                  <option>Part-time</option>
                </select>
              </div>

              <div className="form-group">
                <label>Skills (comma-separated)</label>
                <input
                  type="text"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  placeholder="Carpentry, Welding, Safety"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Requirements (comma-separated)</label>
              <input
                type="text"
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                placeholder="3+ years experience, Certification, etc."
              />
            </div>

            <div style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
              <button type="submit" className="btn btn-primary">
                Post Job
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <SearchBar
        onSearch={handleSearch}
        placeholder="Search jobs by title, description, or location..."
        filters={filters}
      />

      {filteredJobs.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <h3>No jobs found</h3>
          <p>Try adjusting your search criteria</p>
        </div>
      ) : (
        <div>
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onApply={handleApply}
              isApplied={isJobApplied(job.id)}
              currentUserRole={currentUser.role}
            />
          ))}
        </div>
      )}
    </div>
  );
}
