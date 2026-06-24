import { STORAGE_KEYS, getAll, add } from './storage.js';

// initial data for testing
export function initializeSeedData() {
  if (getAll(STORAGE_KEYS.USERS).length > 0) {
    return;
  }

  const users = [
    {
      id: 'u001',
      name: 'Juan Dela Cruz',
      email: 'juan@example.com',
      password: 'password123',
      role: 'job_seeker',
      phone: '09123456789',
      location: 'San Fernando, La Union',
      skills: ['Carpentry', 'Welding'],
      experience: 5,
      bio: 'Construction worker with experience in residential projects',
      avatar: '👨‍💼',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'u002',
      name: 'Maria Santos',
      email: 'maria@example.com',
      password: 'password123',
      role: 'job_seeker',
      phone: '09234567890',
      location: 'Dagupan, La Union',
      skills: ['Painting', 'Tile Work'],
      experience: 3,
      bio: 'Painter and tile installer',
      avatar: '👩‍💼',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'u003',
      name: 'BuildRight Construction',
      email: 'bdo@construction.com',
      password: 'password123',
      role: 'employer',
      phone: '028881234',
      location: 'Vigan, La Union',
      company: 'BuildRight Construction',
      industry: 'Construction',
      employees: 50,
      bio: 'Construction company in La Union',
      avatar: '🏢',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'u004',
      name: 'Admin',
      email: 'admin@elyu.com',
      password: 'admin123',
      role: 'admin',
      avatar: '👨+💻',
      createdAt: new Date().toISOString(),
    },
  ];

  users.forEach((user) => add(STORAGE_KEYS.USERS, user));

  const jobs = [
    {
      id: 'j001',
      title: 'Carpenter Needed',
      company: 'BuildRight Construction',
      employerId: 'u003',
      location: 'San Fernando, La Union',
      description: 'Looking for experienced carpenter for residential project',
      requirements: ['3+ years experience', 'Carpentry skills'],
      salary: '₱25,000 - ₱35,000',
      salaryMin: 25000,
      salaryMax: 35000,
      jobType: 'Full-time',
      postedDate: new Date().toISOString(),
      status: 'open',
      applicants: 2,
      skills: ['Carpentry', 'Framing'],
    },
    {
      id: 'j002',
      title: 'Welders Wanted',
      company: 'BuildRight Construction',
      employerId: 'u003',
      location: 'Dagupan, La Union',
      description: 'Seeking welders for steel structure work',
      requirements: ['Welding certification', '2+ years experience'],
      salary: '₱20,000 - ₱30,000',
      salaryMin: 20000,
      salaryMax: 30000,
      jobType: 'Contract',
      postedDate: new Date().toISOString(),
      status: 'open',
      applicants: 1,
      skills: ['Welding', 'Steel Work'],
    },
    {
      id: 'j003',
      title: 'Painters for Commercial Building',
      company: 'BuildRight Construction',
      employerId: 'u003',
      location: 'Vigan, La Union',
      description: 'Multiple painter positions available',
      requirements: ['Painting experience', 'Reliable'],
      salary: '₱15,000 - ₱25,000',
      salaryMin: 15000,
      salaryMax: 25000,
      jobType: 'Full-time',
      postedDate: new Date().toISOString(),
      status: 'open',
      applicants: 3,
      skills: ['Painting'],
    },
  ];

  jobs.forEach((job) => add(STORAGE_KEYS.JOBS, job));

  const projects = [
    {
      id: 'p001',
      name: 'Residential Complex',
      company: 'BuildRight Construction',
      employerId: 'u003',
      location: 'San Fernando, La Union',
      description: 'Residential building project',
      status: 'ongoing',
      startDate: '2024-01-15',
      endDate: '2024-12-31',
      budget: '₱5,000,000',
      budgetAmount: 5000000,
      progress: 45,
      team: ['u001'],
      tasks: [
        { id: 't001', name: 'Foundation', status: 'completed' },
        { id: 't002', name: 'Framing', status: 'in-progress' },
      ],
      createdAt: new Date().toISOString(),
    },
    {
      id: 'p002',
      name: 'Commercial Building',
      company: 'BuildRight Construction',
      employerId: 'u003',
      location: 'Dagupan, La Union',
      description: 'Commercial building with retail spaces',
      status: 'planning',
      startDate: '2024-06-01',
      endDate: '2025-06-30',
      budget: '₱8,000,000',
      budgetAmount: 8000000,
      progress: 10,
      team: [],
      tasks: [
        { id: 't003', name: 'Design', status: 'in-progress' },
      ],
      createdAt: new Date().toISOString(),
    },
  ];

  projects.forEach((project) => add(STORAGE_KEYS.PROJECTS, project));

  const applications = [
    {
      id: 'a001',
      jobId: 'j001',
      jobTitle: 'Carpenter Needed',
      userId: 'u001',
      userName: 'Juan Dela Cruz',
      company: 'BuildRight Construction',
      employerId: 'u003',
      status: 'pending',
      appliedDate: new Date().toISOString(),
      coverLetter: 'Interested in this position',
    },
    {
      id: 'a002',
      jobId: 'j003',
      jobTitle: 'Painters for Commercial Building',
      userId: 'u002',
      userName: 'Maria Santos',
      company: 'BuildRight Construction',
      employerId: 'u003',
      status: 'pending',
      appliedDate: new Date().toISOString(),
      coverLetter: 'Looking for this opportunity',
    },
  ];

  applications.forEach((app) => add(STORAGE_KEYS.APPLICATIONS, app));
}
