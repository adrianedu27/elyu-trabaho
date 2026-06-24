# ELYU Trabaho: Presentation Cheat Sheet

Ang dokumentong ito ay ginawa upang tulungan kang ipaliwanag ang bawat bahagi ng iyong **ELYU Trabaho** website at kung saang bahagi ng code ito matatagpuan. Mahalaga ito para maipakita mo sa iyong instructor na lubos mong naiintindihan ang iyong proyekto.

---

## I. General Application Structure

Ang iyong React application ay naka-organisa sa mga sumusunod na pangunahing direktoryo:
*   `src/pages`: Naglalaman ng mga pangunahing view o "pages" ng application (e.g., Home, Login, Dashboard).
*   `src/components`: Naglalaman ng mga reusable UI components (e.g., Navbar, Footer, JobCard).
*   `src/data`: Naglalaman ng data storage logic at seed data.
*   `src/hooks`: Naglalaman ng custom React hooks.

Ang **main entry point** ng iyong application ay ang `src/main.jsx`, na nagre-render ng `App` component mula sa `src/App.jsx`.

---

## II. Key Pages and Their Code Mapping

### 1. Home Page
*   **File**: `src/pages/Home.jsx`
*   **Description**: Ito ang landing page ng iyong application. Nagpapakita ng overview ng sistema at call-to-action buttons.
*   **Code Highlights**:
    *   **Main Title (`ELYU Trabaho`)**: Matatagpuan sa `<h1>` tag, linya 24.
    *   **Tagline (`Find construction jobs...`)**: Matatagpuan sa `<p>` tag, linya 33.
    *   **"Get Started" / "Login" Buttons**: Conditional rendering batay sa `currentUser` state, linya 45-66. Ang `Link` component mula sa `wouter` ang ginagamit para sa navigation.
    *   **"How it Works" Section**: Matatagpuan sa linya 71. Ang bawat card (For Workers, For Companies, Track Progress) ay nasa loob ng `<div>` elements na may kani-kanilang teksto at emojis.
    *   **"Platform Overview" Section (500+ Active Workers, etc.)**: Matatagpuan sa linya 211. Nagpapakita ng static data counters.

### 2. Login Page
*   **File**: `src/pages/Login.jsx`
*   **Description**: Dito nagla-login ang mga user. Naglalaman ng form para sa email at password.
*   **Code Highlights**:
    *   **Email Input**: `<input type="email">` sa linya 62. Ang value ay kinokontrol ng `email` state, at ang `onChange` handler ay nasa linya 66.
    *   **Password Input**: `<input type="password">` sa linya 74. Ang value ay kinokontrol ng `password` state, at ang `onChange` handler ay nasa linya 78.
    *   **Login Button**: `<button type="submit">` sa linya 84. Ang `handleSubmit` function (linya 15) ang nagpro-proseso ng form submission.
    *   **Error Message**: `error` state (linya 8) ang nagko-control sa pagpapakita ng `<div className="alert alert-danger">` (linya 54).
    *   **"Register here" Link**: Matatagpuan sa linya 94, ginagamit ang `Link` component.

### 3. Register Page
*   **File**: `src/pages/Register.jsx`
*   **Description**: Dito gumagawa ng bagong account ang mga user.
*   **Code Highlights**:
    *   **Form Fields (Full Name, Email, Password, etc.)**: Ang bawat `<input>` at `<select>` field ay may `name` attribute na tumutugma sa `formData` state (linya 6). Ang `handleChange` function (linya 22) ang nag-uupdate ng state.
    *   **Role Selection (`I am a *`)**: `<select>` element sa linya 160. Ang `value` ay `formData.role`.
    *   **Form Validation**: Ang `validateForm` function (linya 30) ang nagche-check ng mga required fields at password match bago mag-submit.
    *   **"Create Account" Button**: `<button type="submit">` sa linya 198. Ang `handleSubmit` function (linya 49) ang nagpro-proseso ng registration.

### 4. Dashboard Page
*   **File**: `src/pages/Dashboard.jsx`
*   **Description**: Nagpapakita ng summary ng data batay sa role ng user (Job Seeker, Employer, Admin).
*   **Code Highlights**:
    *   **Welcome Message**: `<h1>` tag sa linya 43, na nagpapakita ng `currentUser.name`.
    *   **Dashboard Cards**: Ang `<DashboardCard>` component (linya 50, 59, 68) ay ginagamit para ipakita ang iba't ibang statistics (e.g., Applications, Jobs Posted, Users). Ang data para dito ay kinokolekta sa `stats` object (linya 11-39).
    *   **Conditional Rendering ng Cards**: Ang `<>` blocks (linya 49, 58, 67) ay nagpapakita ng iba't ibang set ng cards batay sa `currentUser.role`.
    *   **Quick Links**: Matatagpuan sa linya 76. Ang mga link ay nagbabago rin batay sa `currentUser.role`.

### 5. Jobs Page
*   **File**: `src/pages/Jobs.jsx`
*   **Description**: Dito makikita ang listahan ng mga trabaho, at pwedeng mag-post o mag-edit ng trabaho ang employer.
*   **Code Highlights**:
    *   **Job Listing**: Ang `filteredJobs.map()` (linya 244) ang nagre-render ng bawat `<JobCard>` component.
    *   **"Post New Job" Button**: `onClick` handler sa linya 125 ang nagko-control sa `showForm` state para ipakita/itago ang form.
    *   **Job Form**: Matatagpuan sa linya 131. Ang mga input fields ay kinokontrol ng `formData` state, at ang `onChange` handlers ay nag-uupdate nito.

### 6. Applications Page
*   **File**: `src/pages/Applications.jsx`
*   **Description**: Dito makikita ng Job Seeker ang kanyang mga application, at ng Employer ang mga application sa kanyang mga trabaho.
*   **Code Highlights**:
    *   **Application Listing**: Ang `filteredApplications.map()` (linya 79) ang nagre-render ng bawat `<ApplicationCard>` component.
    *   **Status Filters**: Ang mga buttons para sa "All", "Pending", "Accepted", "Rejected" ay nag-uupdate ng `filter` state (linya 32) at nagfi-filter ng applications.

### 7. Profile Page
*   **File**: `src/pages/Profile.jsx`
*   **Description**: Dito makikita at mae-edit ng user ang kanyang profile information.
*   **Code Highlights**:
    *   **Display Mode**: Nagpapakita ng user details (linya 70).
    *   **Edit Mode**: Kapag pinindot ang "Edit Profile" button (linya 55), nagiging `true` ang `isEditing` state, at lumalabas ang form (linya 120).
    *   **Profile Form**: Ang mga input fields ay kinokontrol ng `formData` state, at ang `handleChange` function (linya 134) ang nag-uupdate nito.

### 8. Admin Page
*   **File**: `src/pages/Admin.jsx`
*   **Description**: Para sa Admin user, kung saan pwedeng i-manage ang users, jobs, projects, at applications.
*   **Code Highlights**:
    *   **Tabs**: Ang mga buttons (linya 50, 56, 62, 68) ay nag-uupdate ng `activeTab` state, na nagko-control sa kung aling listahan ang ipapakita.
    *   **User/Job/Project/Application Lists**: Ang bawat listahan ay nire-render gamit ang `map()` function (e.g., `users.map()` sa linya 89).
    *   **Delete Buttons**: Ang `onClick` handlers (e.g., `handleDeleteUser` sa linya 102) ang nagta-trigger ng delete functionality.

### 9. Projects Page
*   **File**: `src/pages/Projects.jsx`
*   **Description**: Dito makikita ang listahan ng mga proyekto, at pwedeng mag-post o mag-edit ng proyekto ang employer.
*   **Code Highlights**:
    *   **Project Listing**: Ang `filteredProjects.map()` (linya 270) ang nagre-render ng bawat `<ProjectCard>` component.
    *   **"Create New Project" Button**: `onClick` handler sa linya 153 ang nagko-control sa `showForm` state.
    *   **Project Form**: Matatagpuan sa linya 160. Ang mga input fields ay kinokontrol ng `formData` state.

---

## III. Reusable Components

### 1. Navbar
*   **File**: `src/components/Navbar.jsx`
*   **Description**: Ang navigation bar sa tuktok ng bawat pahina.
*   **Code Highlights**:
    *   **Logo (`ELYU Trabaho`)**: `Link` component sa linya 13.
    *   **Navigation Links**: Conditional rendering (linya 25-66) batay sa `currentUser` role. Ang `Link` component ang ginagamit.
    *   **Logout Button**: `onClick={onLogout}` sa linya 74.

### 2. Footer
*   **File**: `src/components/Footer.jsx`
*   **Description**: Ang footer sa ilalim ng bawat pahina.
*   **Code Highlights**:
    *   **Sections (About, For Workers, For Employers, Contact)**: Matatagpuan sa linya 11-43. Ang mga links ay gumagamit ng `Link` component.
    *   **Copyright**: `&copy; {currentYear} ELYU Trabaho. All rights reserved.` sa linya 47.

### 3. JobCard
*   **File**: `src/components/JobCard.jsx`
*   **Description**: Nagpapakita ng detalye ng isang trabaho sa listahan.
*   **Code Highlights**:
    *   **Job Title**: `<h2>` tag sa linya 19.
    *   **Description**: `<p>` tag sa linya 23.
    *   **Requirements/Skills**: `job.requirements?.map()` at `job.skills.map()` sa linya 27 at 56, nagre-render ng listahan ng requirements at skills.
    *   **"Apply Now" Button**: `onClick={() => onApply(job.id)}` sa linya 70.

### 4. ApplicationCard
*   **File**: `src/components/ApplicationCard.jsx`
*   **Description**: Nagpapakita ng detalye ng isang application.
*   **Code Highlights**:
    *   **Job Title**: `<h3>` tag sa linya 20.
    *   **Applicant Name**: `<span>` tag sa linya 24.
    *   **Status**: `<span>` tag sa linya 30, na may conditional styling batay sa `application.status`.
    *   **"Accept" / "Reject" Buttons**: `onClick` handlers sa linya 67 at 73, na nagta-trigger ng `onStatusChange` function.

### 5. ProjectCard
*   **File**: `src/components/ProjectCard.jsx`
*   **Description**: Nagpapakita ng detalye ng isang proyekto.
*   **Code Highlights**:
    *   **Project Name**: `<h2>` tag sa linya 19.
    *   **Description**: `<p>` tag sa linya 23.
    *   **"Edit" / "Delete" Buttons**: `onClick` handlers sa linya 93 at 96, na nagta-trigger ng `onEdit` at `onDelete` functions.

### 6. DashboardCard
*   **File**: `src/components/DashboardCard.jsx`
*   **Description**: Reusable card para sa statistics sa Dashboard.
*   **Code Highlights**:
    *   **Icon**: `<div>` tag sa linya 10.
    *   **Label**: `<h3>` tag sa linya 14.
    *   **Value**: `<div>` tag sa linya 18.

### 7. SearchBar
*   **File**: `src/components/SearchBar.jsx`
*   **Description**: Search input field at filter options.
*   **Code Highlights**:
    *   **Search Input**: `<input type="text">` sa linya 22. Ang `onChange={handleSearch}` (linya 26) ang nag-uupdate ng search query.
    *   **Filter Dropdown**: `<select>` element sa linya 29. Ang `onChange={handleFilterChange}` (linya 33) ang nag-uupdate ng filter criteria.

---

## IV. Core Logic

### 1. Data Storage (Local Storage)
*   **File**: `src/data/storage.js`
*   **Description**: Dito nakalagay ang logic para sa pag-save, pagkuha, pag-update, at pagbura ng data sa `localStorage` ng browser.
*   **Code Highlights**:
    *   `getAll(key)`: Function para kumuha ng lahat ng items sa isang specific `localStorage` key (e.g., `elyu_users`, `elyu_jobs`).
    *   `add(key, newItem)`: Function para magdagdag ng bagong item.
    *   `update(key, updatedItem)`: Function para mag-update ng existing item.
    *   `remove(key, id)`: Function para magbura ng item.

### 2. Authentication and User State
*   **Files**: `src/App.jsx`, `src/pages/Login.jsx`, `src/pages/Register.jsx`
*   **Description**: Ang application ay may basic authentication system na gumagamit ng `localStorage` para i-store ang `currentUser`.
*   **Code Highlights**:
    *   `currentUser` state: Naka-define sa `src/App.jsx` (linya 116). Ito ang nagko-control kung sino ang naka-login at kung anong role niya.
    *   `onLogin` function: Naka-define sa `src/App.jsx` (linya 109), ipinapasa sa `Login` at `Register` components para i-set ang `currentUser` state pagkatapos ng successful login/registration.
    *   `onLogout` function: Naka-define sa `src/App.jsx` (linya 120), ginagamit para i-clear ang `currentUser` at i-redirect ang user sa home page.

### 3. Routing
*   **File**: `src/App.jsx`
*   **Description**: Gumagamit ng `wouter` library para sa client-side routing.
*   **Code Highlights**:
    *   `<Route path="/" component={Home} />`: Naka-define sa linya 140. Ito ang nagtatakda na ang `/` path ay magre-render ng `Home` component.
    *   `<Route path="/login">`, `<Route path="/register">`, etc.: Ang bawat path ay may kaukulang component na nire-render. Ang `ProtectedRoute` (linya 147) ay ginagamit para sa mga pages na nangangailangan ng login.

---

## V. Tips for Your Presentation

*   **Practice, Practice, Practice!**: Sanayin mo ang paglipat-lipat sa website at sa code. Alam mo dapat kung saang file at linya mo ipapakita ang bawat feature.
*   **Start with the Problem**: Simulan ang presentation sa pagpapaliwanag ng real-world problem na sinosolusyunan ng ELYU Trabaho.
*   **Showcase CRUD**: Ipakita ang bawat CRUD operation (Create, Read, Update, Delete) sa isang logical flow. Halimbawa, mag-register ng bagong user, mag-login, mag-post ng trabaho, i-edit ang trabaho, at burahin ito (kung Admin ka).
*   **Explain React Concepts**: Habang nagde-demo, banggitin kung paano mo ginamit ang `useState` para sa forms, `map()` para sa lists, at `onClick`/`onChange` para sa user interactions.
*   **Highlight Plus Features**: Huwag kalimutang banggitin ang mga bonus features tulad ng search, filter, at local storage.
*   **Be Confident**: Ipakita na ikaw ang may kontrol sa code at sa application. Kung may tanong ang instructor, alam mo kung saan hahanapin ang sagot sa code.

Good luck sa iyong presentation! Kaya mo yan!
