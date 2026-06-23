import React, { useState, useMemo } from 'react';
import { getAll, add, update, remove, STORAGE_KEYS } from '../data/storage.js';
import ProjectCard from '../components/ProjectCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

export default function Projects({ currentUser }) {
  const [projects, setProjects] = useState(getAll(STORAGE_KEYS.PROJECTS));
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    budget: '',
    startDate: '',
    endDate: '',
    status: 'planning',
  });

  const filters = [
    { label: 'All Status', value: '' },
    { label: 'Planning', value: 'planning' },
    { label: 'Ongoing', value: 'ongoing' },
    { label: 'Completed', value: 'completed' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter = !filterStatus || project.status === filterStatus;

      if (currentUser.role === 'employer') {
        return project.employerId === currentUser.id && matchesSearch && matchesFilter;
      }

      return matchesSearch && matchesFilter;
    });
  }, [projects, searchTerm, filterStatus, currentUser]);

  const handleSearch = (term, filter) => {
    setSearchTerm(term);
    setFilterStatus(filter);
  };

  const handleAddProject = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.location) {
      alert('Please fill in all required fields');
      return;
    }

    if (showForm && showForm !== true) {
      // Update existing project
      const updatedProject = update(STORAGE_KEYS.PROJECTS, showForm, {
        name: formData.name,
        description: formData.description,
        location: formData.location,
        budget: formData.budget,
        budgetAmount: parseInt(formData.budget.replace(/[^0-9]/g, '')) || 0,
        startDate: formData.startDate,
        endDate: formData.endDate,
        status: formData.status,
      });

      if (updatedProject) {
        setProjects(projects.map((p) => (p.id === showForm ? updatedProject : p)));
        setFormData({
          name: '',
          description: '',
          location: '',
          budget: '',
          startDate: '',
          endDate: '',
          status: 'planning',
        });
        setShowForm(false);
        alert('Project updated successfully!');
      }
    } else {
      // Create new project
      const newProject = add(STORAGE_KEYS.PROJECTS, {
        name: formData.name,
        company: currentUser.company || currentUser.name,
        employerId: currentUser.id,
        location: formData.location,
        description: formData.description,
        budget: formData.budget,
        budgetAmount: parseInt(formData.budget.replace(/[^0-9]/g, '')) || 0,
        startDate: formData.startDate,
        endDate: formData.endDate,
        status: formData.status,
        progress: 0,
        team: [],
        tasks: [],
      });

      if (newProject) {
        setProjects([...projects, newProject]);
        setFormData({
          name: '',
          description: '',
          location: '',
          budget: '',
          startDate: '',
          endDate: '',
          status: 'planning',
        });
        setShowForm(false);
        alert('Project created successfully!');
      }
    }
  };

  const handleEditProject = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      setFormData({
        name: project.name,
        description: project.description,
        location: project.location,
        budget: project.budget,
        startDate: project.startDate,
        endDate: project.endDate,
        status: project.status,
      });
      setShowForm(projectId);
    }
  };

  const handleDeleteProject = (projectId) => {
    if (confirm('Are you sure you want to delete this project?')) {
      remove(STORAGE_KEYS.PROJECTS, projectId);
      setProjects(projects.filter((p) => p.id !== projectId));
      alert('Project deleted successfully!');
    }
  };

  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ margin: 0 }}>
          {currentUser.role === 'employer' ? 'My Projects' : 'Construction Projects'}
        </h1>
        {currentUser.role === 'employer' && (
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(true)}
          >
            {showForm ? 'Cancel' : '+ New Project'}
          </button>
        )}
      </div>

      {showForm && currentUser.role === 'employer' && (
        <div className="card" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <div className="card-header">
            <h3 style={{ margin: 0 }}>Create New Project</h3>
          </div>
          <form onSubmit={handleAddProject} className="card-body">
            <div className="form-group">
              <label>Project Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., San Fernando Residential Complex"
                required
              />
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe the project"
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
                <label>Budget</label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="₱5,000,000"
                />
              </div>

              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>End Date</label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="planning">Planning</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
              <button type="submit" className="btn btn-primary">
                Create Project
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
        placeholder="Search projects by name, description, or location..."
        filters={filters}
      />

      {filteredProjects.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <h3>No projects found</h3>
          <p>Try adjusting your search criteria</p>
        </div>
      ) : (
        <div>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={handleEditProject}
              onDelete={handleDeleteProject}
              currentUserRole={currentUser.role}
            />
          ))}
        </div>
      )}
    </div>
  );
}
