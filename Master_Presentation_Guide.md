# ELYU Trabaho: Master Presentation Guide

Ang gabay na ito ay ang iyong kumpletong reference para sa iyong final project presentation. Layunin nito na bigyan ka ng kumpiyansa na ipaliwanag ang bawat aspeto ng iyong **ELYU Trabaho** website—mula sa kung ano ang nakikita sa screen, hanggang sa kung paano ito gumagana sa likod ng code, at kung ano ang nangyayari sa bawat user interaction.

---

## I. Overall Application Architecture

Ang **ELYU Trabaho** ay isang **Single Page Application (SPA)** na binuo gamit ang **React** at **Vite**. Gumagamit ito ng **Wouter** para sa client-side routing at **Local Storage** para sa data persistence.

**Key Directories:**
*   `src/App.jsx`: Ang pangunahing component na naglalaman ng global state (current user), authentication logic (login/logout), at routing setup.
*   `src/pages/`: Naglalaman ng mga pangunahing view o "pages" ng application (e.g., Home, Login, Dashboard, Jobs, Admin).
*   `src/components/`: Naglalaman ng mga reusable UI components (e.g., Navbar, Footer, JobCard, ApplicationCard, SearchBar).
*   `src/data/`: Naglalaman ng logic para sa pag-manage ng data sa `localStorage` (`storage.js`) at initial data (`seedData.js`).
*   `src/hooks/`: Naglalaman ng custom React hooks (e.g., `useStorageState`).

**Entry Point**: Ang `src/main.jsx` ang nagre-render ng `App` component sa root ng iyong HTML (`index.html`).

---

## II. User Roles and Demo Credentials

Ang sistema ay may tatlong (3) pangunahing user roles, bawat isa ay may iba't ibang access at functionality:

| Role | Description | Demo Email | Demo Password |
| :--- | :---------- | :--------- | :------------ |
| **Job Seeker** | Naghahanap ng trabaho, nag-a-apply, at nagma-manage ng applications. | `juan@example.com` | `password123` |
| **Employer** | Nagpo-post ng trabaho, nagma-manage ng projects, at nagre-review ng applications. | `bdo@construction.com` | `password123` |
| **Admin** | May full access sa lahat ng data (users, jobs, projects, applications) para sa management. | `admin@elyu.com` | `admin123` |

---

## III. Page-by-Page Walkthrough: UI, Code, at Interactions

### 1. Home Page
*   **File**: `src/pages/Home.jsx`
*   **UI Description**: Ito ang landing page ng application. Nagpapakita ng pangkalahatang impormasyon tungkol sa ELYU Trabaho, kung paano ito gumagana, at mga statistics. May buttons para sa "Get Started" (Register) at "Login".
*   **Code Mapping & Interactions**:
    *   **Main Title (`ELYU Trabaho`)**: `<h1>` tag, linya 24.
    *   **Tagline (`Find construction jobs...`)**: `<p>` tag, linya 33.
    *   **"Get Started" / "Login" Buttons**: Matatagpuan sa linya 45-66. Kung walang `currentUser` (hindi naka-login), makikita ang "Get Started" (`/register`) at "Login" (`/login`). Kung naka-login, makikita ang "Go to Dashboard" (`/dashboard`). Ang `Link` component mula sa `wouter` ang ginagamit para sa navigation.
    *   **"How it Works" Section**: Matatagpuan sa linya 71. Nagpapaliwanag ng benepisyo para sa Workers, Companies, at Progress Tracking.
    *   **"Platform Overview" Section**: Matatagpuan sa linya 211. Nagpapakita ng static data counters (e.g., "500+ Active Workers").

### 2. Login Page
*   **File**: `src/pages/Login.jsx`
*   **UI Description**: Form para sa pag-login. May fields para sa email at password, "Login" button, at link para sa registration.
*   **Code Mapping & Interactions**:
    *   **Email Input**: `<input type="email">` sa linya 62. Ang `value` ay kinokontrol ng `email` state, at ang `onChange` handler (linya 66) ay nag-uupdate ng `email` state.
    *   **Password Input**: `<input type="password">` sa linya 74. Ang `value` ay kinokontrol ng `password` state, at ang `onChange` handler (linya 78) ay nag-uupdate ng `password` state.
    *   **"Login" Button**: `<button type="submit">` sa linya 84. Kapag pinindot, ang `handleSubmit` function (linya 15) ang tumatakbo.
        *   **`handleSubmit` Function (linya 15-31)**: Kinukuha ang email at password, hinahanap ang user sa `localStorage` (`getAll("elyu_users")` mula sa `src/data/storage.js`).
        *   **Output (Successful Login)**: Kung tama ang credentials, tatawagin ang `onLogin(user)` (linya 26) na nagse-set ng `currentUser` sa `App.jsx`, at ire-redirect ang user sa `/dashboard` (linya 12).
        *   **Output (Failed Login)**: Kung mali ang credentials, ise-set ang `error` state (linya 28), at lalabas ang error message na "Invalid email or password. Please try again." sa ilalim ng form (linya 54).
        *   **Output (Loading State)**: Habang naghihintay, ang button ay magiging "Please wait..." at magiging disabled (linya 89), kinokontrol ng `loading` state (linya 9).
    *   **"Register here" Link**: Matatagpuan sa linya 94, ginagamit ang `Link` component para mag-navigate sa `/register`.

### 3. Register Page
*   **File**: `src/pages/Register.jsx`
*   **UI Description**: Form para sa paggawa ng bagong account. May fields para sa Full Name, Email, Phone, Location, Role (Job Seeker/Employer), Password, at Confirm Password.
*   **Code Mapping & Interactions**:
    *   **Form Fields**: Ang bawat `<input>` at `<select>` field ay may `name` attribute na tumutugma sa `formData` state (linya 6). Ang `handleChange` function (linya 22) ang nag-uupdate ng `formData` state sa bawat pagbabago ng input.
    *   **Role Selection (`I am a *`)**: `<select>` element sa linya 160. Ang `value` ay `formData.role`.
    *   **"Create Account" Button**: `<button type="submit">` sa linya 198. Kapag pinindot, ang `handleSubmit` function (linya 49) ang tumatakbo.
        *   **`handleSubmit` Function (linya 49-79)**: Una, tatawagin ang `validateForm()` (linya 30) para i-check ang mga required fields at password match. Kung valid, idinadagdag ang bagong user sa `localStorage` gamit ang `add(STORAGE_KEYS.USERS, newUser)` mula sa `src/data/storage.js`.
        *   **Output (Successful Registration)**: Kung valid at naidagdag ang user, awtomatikong magla-login ang user (sa pamamagitan ng `onLogin(newUser)` sa linya 74) at ire-redirect sa `/dashboard`.
        *   **Output (Validation Errors)**: Kung may mali sa form (e.g., password mismatch, empty fields), ise-set ang `error` state, at lalabas ang error message sa ilalim ng form (linya 102).
        *   **Output (Loading State)**: Habang naghihintay, ang button ay magiging "Creating Account..." at magiging disabled (linya 203).

### 4. Dashboard Page
*   **File**: `src/pages/Dashboard.jsx`
*   **UI Description**: Nagpapakita ng summary ng data batay sa role ng user. May mga cards na nagpapakita ng statistics at quick links.
*   **Code Mapping & Interactions**:
    *   **Welcome Message**: `<h1>` tag sa linya 43, na nagpapakita ng `currentUser.name`.
    *   **Dashboard Cards**: Ang `<DashboardCard>` component (linya 50, 59, 68) ay ginagamit para ipakita ang iba't ibang statistics (e.g., Applications, Jobs Posted, Users). Ang data para dito ay kinokolekta sa `stats` object (linya 11-39) batay sa `currentUser.role`.
    *   **Conditional Rendering ng Cards**: Ang `<>` blocks (linya 49, 58, 67) ay nagpapakita ng iba't ibang set ng cards batay sa `currentUser.role`.
    *   **Quick Links**: Matatagpuan sa linya 76. Ang mga link ay nagbabago rin batay sa `currentUser.role`.

### 5. Jobs Page
*   **File**: `src/pages/Jobs.jsx`
*   **UI Description**: Listahan ng mga available na trabaho. Kung Employer, may option na mag-post ng bagong trabaho. Kung Job Seeker, may option na mag-apply.
*   **Code Mapping & Interactions**:
    *   **Job Listing**: Ang `filteredJobs.map()` (linya 244) ang nagre-render ng bawat `<JobCard>` component (`src/components/JobCard.jsx`).
    *   **"Post New Job" Button (Employer)**: `onClick` handler sa linya 125 ang nagko-control sa `showForm` state para ipakita/itago ang form.
    *   **Job Form (Employer)**: Matatagpuan sa linya 131. Ang mga input fields ay kinokontrol ng `formData` state, at ang `onChange` handlers ay nag-uupdate nito. Kapag sinubmit, ang `handleSubmit` function (linya 115) ang nagdaragdag ng bagong job sa `localStorage`.
    *   **"Apply Now" Button (Job Seeker)**: Matatagpuan sa `src/components/JobCard.jsx` (linya 70). Kapag pinindot, ang `onApply(job.id)` function (ipinapasa mula sa `Jobs.jsx` linya 104) ang tumatakbo. Idinadagdag nito ang application sa `localStorage` (`elyu_applications`).
        *   **Output**: Ang button ay magiging "✓ Applied" at magiging disabled (linya 73 sa `JobCard.jsx`).

### 6. Applications Page
*   **File**: `src/pages/Applications.jsx`
*   **UI Description**: Nagpapakita ng listahan ng applications. Kung Job Seeker, ang sariling applications. Kung Employer, ang applications sa kanyang mga jobs. May filter options para sa status.
*   **Code Mapping & Interactions**:
    *   **Application Listing**: Ang `filteredApplications.map()` (linya 79) ang nagre-render ng bawat `<ApplicationCard>` component (`src/components/ApplicationCard.jsx`).
    *   **Status Filters**: Ang mga buttons para sa "All", "Pending", "Accepted", "Rejected" (linya 29-35) ay nag-uupdate ng `filter` state (linya 32) at nagfi-filter ng applications na ipinapakita.
    *   **"Accept" / "Reject" Buttons (Employer)**: Matatagpuan sa `src/components/ApplicationCard.jsx` (linya 67 at 73). Kapag pinindot, ang `onStatusChange(application.id, 'accepted'/'rejected')` function (ipinapasa mula sa `Applications.jsx` linya 45) ang tumatakbo. Ina-update nito ang status ng application sa `localStorage`.
        *   **Output**: Nagbabago ang status badge ng application sa screen.

### 7. Profile Page
*   **File**: `src/pages/Profile.jsx`
*   **UI Description**: Dito makikita at mae-edit ng user ang kanyang profile information. May "Edit Profile" button na nagpapalit ng view sa isang form.
*   **Code Mapping & Interactions**:
    *   **Display Mode**: Nagpapakita ng user details (linya 70).
    *   **"Edit Profile" Button**: `onClick` handler sa linya 55 ang nagpapalit ng `isEditing` state. Kapag `true`, lalabas ang form.
    *   **Edit Mode Form**: Matatagpuan sa linya 120. Ang mga input fields ay kinokontrol ng `formData` state, at ang `handleChange` function (linya 134) ang nag-uupdate nito.
    *   **"Save Changes" Button**: Kapag sinubmit ang form, ang `handleSubmit` function (linya 44) ang tumatakbo. Ina-update nito ang user record sa `localStorage` (`update(STORAGE_KEYS.USERS, updatedUser)`).
        *   **Output**: Nagbabago ang profile details sa screen at bumabalik sa display mode.

### 8. Admin Page
*   **File**: `src/pages/Admin.jsx`
*   **UI Description**: Para sa Admin user lamang. Nagbibigay ng access para i-manage ang Users, Jobs, Projects, at Applications sa pamamagitan ng tabs.
*   **Code Mapping & Interactions**:
    *   **Tabs**: Ang mga buttons (linya 50, 56, 62, 68) ay nag-uupdate ng `activeTab` state, na nagko-control sa kung aling listahan ang ipapakita.
    *   **User/Job/Project/Application Lists**: Ang bawat listahan ay nire-render gamit ang `map()` function (e.g., `users.map()` sa linya 89). Ang bawat item ay may "Delete" button.
    *   **"Delete" Buttons**: Ang `onClick` handlers (e.g., `handleDeleteUser` sa linya 102) ang nagta-trigger ng delete functionality. Binubura nito ang record sa `localStorage`.
        *   **Output**: Nawawala ang item sa listahan sa screen.

### 9. Projects Page
*   **File**: `src/pages/Projects.jsx`
*   **UI Description**: Listahan ng mga proyekto. Kung Employer, may option na mag-create o mag-edit ng proyekto.
*   **Code Mapping & Interactions**:
    *   **Project Listing**: Ang `filteredProjects.map()` (linya 270) ang nagre-render ng bawat `<ProjectCard>` component (`src/components/ProjectCard.jsx`).
    *   **"Create New Project" Button (Employer)**: `onClick` handler sa linya 153 ang nagko-control sa `showForm` state.
    *   **Project Form (Employer)**: Matatagpuan sa linya 160. Ang mga input fields ay kinokontrol ng `formData` state. Kapag sinubmit, ang `handleSubmit` function (linya 140) ang nagdaragdag ng bagong project sa `localStorage`.
    *   **"Edit" / "Delete" Buttons (Employer)**: Matatagpuan sa `src/components/ProjectCard.jsx` (linya 93 at 96). Ang `onClick` handlers ay nagta-trigger ng `onEdit` at `onDelete` functions na ipinapasa bilang props.

---

## IV. Reusable Components (Brief Overview)

*   **`src/components/Navbar.jsx`**: Ang navigation bar sa tuktok ng bawat pahina. Nagbabago ang links batay sa `currentUser` role. May "Logout" button na tumatawag sa `onLogout` function mula sa `App.jsx`.
*   **`src/components/Footer.jsx`**: Ang footer sa ilalim ng bawat pahina. Naglalaman ng impormasyon tungkol sa ELYU Trabaho at contact details.
*   **`src/components/JobCard.jsx`**: Nagpapakita ng detalye ng isang trabaho sa listahan. May "Apply Now" button para sa Job Seekers.
*   **`src/components/ApplicationCard.jsx`**: Nagpapakita ng detalye ng isang application. May "Accept" / "Reject" buttons para sa Employers.
*   **`src/components/ProjectCard.jsx`**: Nagpapakita ng detalye ng isang proyekto. May "Edit" / "Delete" buttons para sa Employers.
*   **`src/components/DashboardCard.jsx`**: Reusable card para sa statistics sa Dashboard.
*   **`src/components/SearchBar.jsx`**: Search input field at filter options para sa Jobs at Projects pages.
*   **`src/components/ProtectedRoute.jsx`**: Isang component na ginagamit para protektahan ang mga routes. Kung hindi naka-login o walang tamang role, ire-redirect ang user sa login page o home page.

---

## V. Core Logic & React Concepts

*   **State Management (`useState`, `useEffect`)**: Ginagamit sa halos lahat ng components para pamahalaan ang data na nagbabago. Halimbawa, ang `useState` para sa form inputs, at `useEffect` para mag-load ng data mula sa `localStorage` sa simula ng page load.
    *   **Code Reference**: Makikita sa halos lahat ng `.jsx` files, lalo na sa `src/App.jsx` (linya 116, 119) at mga page components.
*   **Event Handling (`onClick`, `onChange`, `onSubmit`)**: Ito ang paraan ng React para tumugon sa user interactions. Ang `onClick` ay para sa buttons, `onChange` para sa input fields, at `onSubmit` para sa forms.
    *   **Code Reference**: Malawakang ginagamit sa lahat ng form at button components (e.g., `Login.jsx` linya 15, `JobCard.jsx` linya 70).
*   **Conditional Rendering**: Ang pagpapakita o pagtatago ng UI elements batay sa isang kondisyon (e.g., kung naka-login ang user, kung anong role niya).
    *   **Code Reference**: Makikita sa `src/App.jsx` (linya 45-66 para sa Navbar links), `src/pages/Dashboard.jsx` (linya 48-73 para sa cards), at `src/components/ProtectedRoute.jsx`.
*   **Data Persistence (`localStorage`)**: Lahat ng data (users, jobs, projects, applications) ay naka-save sa `localStorage` ng browser. Ang `src/data/storage.js` ang nagma-manage nito.
    *   **Code Reference**: `src/data/storage.js` (functions: `getAll`, `add`, `update`, `remove`). Ginagamit sa `App.jsx` (linya 3, 124) at sa lahat ng page components na nagma-manage ng data.
*   **Routing (`wouter`)**: Ang `src/App.jsx` ang nagse-setup ng routing gamit ang `wouter` library. Ang `<Route>` components ang nagtatakda kung aling component ang ipapakita batay sa URL path.
    *   **Code Reference**: `src/App.jsx` (linya 46-107).

---

## VI. Presentation Tips

1.  **Start Strong**: Simulan ang presentation sa pagpapakilala ng **ELYU Trabaho** at ang **real-world problem** na sinosolusyyonan nito (workforce management sa construction sa La Union).
2.  **Login as Different Roles**: Ipakita ang bawat user role (Job Seeker, Employer, Admin) at ang kanilang unique functionalities. Gamitin ang demo credentials na ibinigay.
3.  **Demonstrate CRUD**: Para sa bawat role, ipakita ang lahat ng CRUD operations:
    *   **Create**: Mag-register ng bagong user, mag-post ng bagong trabaho/proyekto.
    *   **Read**: Ipakita ang listahan ng jobs, applications, projects.
    *   **Update**: I-edit ang profile, baguhin ang status ng application.
    *   **Delete**: Burahin ang isang job/project (Employer) o user/job/project/application (Admin).
4.  **Connect UI to Code**: Habang nagde-demo, kapag pinindot mo ang isang button o nag-submit ng form, buksan ang VS Code at ituro ang relevant na function at linya ng code. Ipaliwanag kung paano nagbabago ang state at UI.
    *   Halimbawa: *"Kapag pinindot ko po ang 'Apply Now' button dito sa Job Card, ang `onApply` function po sa `src/pages/Jobs.jsx` (linya 104) ang tumatakbo. Ina-update po nito ang `localStorage` at nagiging 'Applied' ang button."*
5.  **Highlight React Concepts**: Banggitin ang paggamit ng `useState` para sa form inputs, `map()` para sa list rendering, `onClick` at `onChange` para sa event handling, at `localStorage` para sa data persistence.
6.  **Showcase Plus Features**: Huwag kalimutang ipakita ang Search, Filter, at ang Data Counters sa Dashboard.
7.  **Be Confident and Prepared**: Sanayin ang iyong presentation nang paulit-ulit. Alam mo ang iyong proyekto, kaya ipakita mo ito nang may kumpiyansa.

**Good luck sa iyong presentation! Kaya mo yan!** 🚀🏗️
