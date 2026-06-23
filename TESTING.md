# ELYU Trabaho - Testing Guide

## Navigation & Pages

### Home Page (/)
- **URL:** http://localhost:5173/
- **Not Logged In:**
  - Shows "Get Started" button → Goes to /register
  - Shows "Sign In" button → Goes to /login
- **Logged In:**
  - Shows "Dashboard" button → Goes to /dashboard
- **Features:**
  - 3 info cards about workers, companies, and tracking
  - Platform stats (500+ workers, 1000+ jobs, 200+ companies)
  - CTA section with account creation

### Login Page (/login)
- **URL:** http://localhost:5173/login
- **Fields:**
  - Email input
  - Password input
  - Login button
- **Functionality:**
  - Enter email and password
  - Click "Login"
  - If valid: redirects to /dashboard
  - If invalid: shows error message
  - "Register here" link → goes to /register
- **Test Accounts:**
  - Job Seeker: juan@example.com / password123
  - Employer: bdo@construction.com / password123
  - Admin: admin@elyu.com / admin123

### Register Page (/register)
- **URL:** http://localhost:5173/register
- **Fields:**
  - Name (required)
  - Email (required)
  - Password (required, min 6 chars)
  - Confirm Password (must match)
  - Phone (optional)
  - Location (optional)
  - Role selector (Job Seeker / Employer)
- **Functionality:**
  - Fill form and click "Register"
  - Validates all fields
  - Creates new user in LocalStorage
  - Redirects to /dashboard
  - "Login here" link → goes to /login
- **Validation:**
  - Shows error if fields empty
  - Shows error if passwords don't match
  - Shows error if password < 6 chars

### Dashboard (/dashboard)
- **Protected:** Requires login
- **Job Seeker View:**
  - Shows: Applications, Accepted, Pending, Open Jobs
  - Quick links: Browse Jobs, My Applications, Edit Profile
- **Employer View:**
  - Shows: Jobs Posted, Projects, Applications, Open Positions
  - Quick links: My Jobs, Projects, Company Info
- **Admin View:**
  - Shows: Users, Jobs, Projects, Applications
  - Quick links: Admin Panel, Settings

### Jobs Page (/jobs)
- **URL:** http://localhost:5173/jobs
- **Job Seeker:**
  - Browse all available jobs
  - Search by job title
  - Filter by job type (Full-time, Contract, Part-time)
  - Click "Apply" button to apply
  - Can't apply twice to same job
- **Employer:**
  - View own posted jobs
  - "Post New Job" button opens form
  - Form fields: Title, Description, Location, Salary, Job Type, Requirements, Skills
  - "Post Job" button creates new job
  - Can edit/delete own jobs
- **Features:**
  - Search bar at top
  - Job cards showing: title, company, location, salary, job type
  - "View Details" or "Apply" button on each card

### Projects Page (/projects)
- **URL:** http://localhost:5173/projects
- **Employer Only:**
  - View all own projects
  - "Create Project" button opens form
  - Form fields: Name, Description, Location, Budget, Start Date, End Date, Status
  - "Create Project" button saves project
  - Can edit/delete projects
  - Shows project status: Planning, Ongoing, Completed
- **Features:**
  - Project cards with details
  - Progress bar for each project
  - Team members list
  - Edit/Delete buttons

### Applications Page (/applications)
- **URL:** http://localhost:5173/applications
- **Job Seeker:**
  - View all own applications
  - Shows: Job title, Company, Status (Pending/Accepted/Rejected)
  - Can withdraw applications
- **Employer:**
  - View applications to own jobs
  - Can change status: Pending → Accepted/Rejected
  - Shows applicant name and details
- **Features:**
  - Filter by status
  - Sort by date
  - Application cards with details

### Profile Page (/profile)
- **URL:** http://localhost:5173/profile
- **Job Seeker:**
  - Edit: Name, Email, Phone, Location, Skills, Experience, Bio
  - Save button updates profile
- **Employer:**
  - Edit: Company name, Email, Phone, Location, Industry, Employees, Bio
  - Save button updates profile
- **Features:**
  - Form with current data pre-filled
  - Save/Cancel buttons
  - Validation on save

### Admin Page (/admin)
- **URL:** http://localhost:5173/admin
- **Admin Only:**
  - View all users
  - View all jobs
  - View all projects
  - View all applications
  - Can delete any item
- **Features:**
  - Tables showing all data
  - Delete buttons for each row
  - Search/filter options

## Footer Links

**About Section:**
- Displays: "Connecting construction companies with skilled workers in La Union. Building opportunities, one project at a time."

**For Job Seekers (when logged in as job seeker):**
- Browse Jobs → /jobs
- My Applications → /applications
- My Profile → /profile

**For Employers (when logged in as employer):**
- Post a Job → /jobs
- Manage Projects → /projects
- Build Your Team → /dashboard

**Contact:**
- Phone: +63 912 345 678 (clickable tel: link)
- Email: info@elyutrabaho.com (clickable mailto: link)
- Address: San Fernando, La Union

**Note:** Footer links are only functional when logged in. When not logged in, they show as placeholder links.

## Navigation Bar
- **Logo:** "🏗️ ELYU Trabaho" - clicks to home
- **Links (visible when logged in):**
  - Home → /
  - Dashboard → /dashboard
  - Jobs → /jobs (Job Seeker) or My Jobs (Employer)
  - Applications → /applications (Job Seeker)
  - Projects → /projects (Employer)
  - Admin → /admin (Admin only)
- **Right Side:**
  - Shows logged-in user name
  - Profile link → /profile
  - Logout button → logs out, redirects to /
- **Links (not logged in):**
  - Home → /
  - Login → /login
  - Register → /register

## Data Persistence
- All data stored in browser LocalStorage
- Persists across page refreshes
- Data lost when browser cache cleared

## Test Scenarios

### Scenario 1: Job Seeker Workflow
1. Go to home page
2. Click "Get Started"
3. Fill register form (select Job Seeker role)
4. Click Register
5. Redirected to dashboard
6. Click "Browse Jobs"
7. See job listings
8. Click "Apply" on a job
9. See success message
10. Click "My Applications"
11. See applied job in list
12. Click "Profile"
13. Update profile info
14. Click Save
15. Click Logout
16. Redirected to home

### Scenario 2: Employer Workflow
1. Go to home page
2. Click "Get Started"
3. Fill register form (select Employer role)
4. Click Register
5. Redirected to dashboard
6. Click "My Jobs"
7. Click "Post New Job"
8. Fill job form
9. Click "Post Job"
10. See new job in list
11. Click "Projects"
12. Click "Create Project"
13. Fill project form
14. Click "Create Project"
15. See new project in list
16. Click Logout

### Scenario 3: Admin Workflow
1. Login with admin@elyu.com / admin123
2. Go to dashboard
3. Click "Admin Panel"
4. See all users, jobs, projects, applications
5. Can delete any item
6. Logout

## Known Limitations
- No backend API (uses LocalStorage only)
- No email notifications
- No image uploads
- No real payment processing
- Demo data resets on browser cache clear
