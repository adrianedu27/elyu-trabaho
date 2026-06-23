import React, { useState } from 'react';
import { update, STORAGE_KEYS } from '../data/storage.js';

export default function Profile({ currentUser, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    phone: currentUser.phone || '',
    location: currentUser.location || '',
    bio: currentUser.bio || '',
    skills: currentUser.skills?.join(', ') || '',
    experience: currentUser.experience || 0,
    company: currentUser.company || '',
    industry: currentUser.industry || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = update(STORAGE_KEYS.USERS, currentUser.id, {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      bio: formData.bio,
      skills: formData.skills.split(',').map((s) => s.trim()),
      experience: parseInt(formData.experience) || 0,
      company: formData.company,
      industry: formData.industry,
    });

    if (updatedUser) {
      onUpdateUser(updatedUser);
      setIsEditing(false);
      alert('Profile updated successfully!');
    }
  };

  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <h1 style={{ margin: 0 }}>My Profile</h1>
          <button
            className={`btn ${isEditing ? 'btn-outline' : 'btn-primary'}`}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="card">
          {!isEditing ? (
            <div className="card-body">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-2xl)' }}>
                <div style={{ fontSize: '64px', marginRight: 'var(--spacing-lg)' }}>
                  {currentUser.avatar || '👤'}
                </div>
                <div>
                  <h2 style={{ margin: 0, marginBottom: 'var(--spacing-sm)' }}>
                    {currentUser.name}
                  </h2>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                    {currentUser.role === 'job_seeker' ? 'Job Seeker' : currentUser.role === 'employer' ? 'Employer' : 'Administrator'}
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
                <div>
                  <small style={{ color: 'var(--text-secondary)' }}>Email</small>
                  <p style={{ margin: 0, fontWeight: 600 }}>{currentUser.email}</p>
                </div>
                <div>
                  <small style={{ color: 'var(--text-secondary)' }}>Phone</small>
                  <p style={{ margin: 0, fontWeight: 600 }}>{currentUser.phone || 'Not provided'}</p>
                </div>
                <div>
                  <small style={{ color: 'var(--text-secondary)' }}>Location</small>
                  <p style={{ margin: 0, fontWeight: 600 }}>{currentUser.location || 'Not provided'}</p>
                </div>
                {currentUser.role === 'job_seeker' && (
                  <div>
                    <small style={{ color: 'var(--text-secondary)' }}>Experience</small>
                    <p style={{ margin: 0, fontWeight: 600 }}>{currentUser.experience} years</p>
                  </div>
                )}
              </div>

              {currentUser.bio && (
                <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                  <small style={{ color: 'var(--text-secondary)' }}>Bio</small>
                  <p style={{ margin: 'var(--spacing-sm) 0 0 0' }}>{currentUser.bio}</p>
                </div>
              )}

              {currentUser.role === 'job_seeker' && currentUser.skills && currentUser.skills.length > 0 && (
                <div>
                  <small style={{ color: 'var(--text-secondary)' }}>Skills</small>
                  <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap', marginTop: 'var(--spacing-sm)' }}>
                    {currentUser.skills.map((skill, idx) => (
                      <span key={idx} className="badge badge-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {currentUser.role === 'employer' && currentUser.company && (
                <div style={{ marginTop: 'var(--spacing-lg)' }}>
                  <small style={{ color: 'var(--text-secondary)' }}>Company</small>
                  <p style={{ margin: 'var(--spacing-sm) 0 0 0', fontWeight: 600 }}>{currentUser.company}</p>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+63 912 345 6789"
                />
              </div>

              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Province"
                />
              </div>

              <div className="form-group">
                <label>Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell us about yourself"
                />
              </div>

              {currentUser.role === 'job_seeker' && (
                <>
                  <div className="form-group">
                    <label>Skills (comma-separated)</label>
                    <input
                      type="text"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      placeholder="Carpentry, Welding, Masonry"
                    />
                  </div>

                  <div className="form-group">
                    <label>Years of Experience</label>
                    <input
                      type="number"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      min="0"
                    />
                  </div>
                </>
              )}

              {currentUser.role === 'employer' && (
                <>
                  <div className="form-group">
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Industry</label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      placeholder="e.g., Commercial Construction"
                    />
                  </div>
                </>
              )}

              <div style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
