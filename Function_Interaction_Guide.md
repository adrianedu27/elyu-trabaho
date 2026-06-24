# ELYU Trabaho: Function & Interaction Guide

Ang gabay na ito ay idinisenyo upang tulungan kang ipaliwanag ang ugnayan sa pagitan ng mga aksyon ng user (tulad ng pag-click sa button), ang mga function na tumatakbo sa background, at ang mga pagbabagong nakikita sa screen ng iyong **ELYU Trabaho** website. Ito ay mahalaga para sa iyong presentasyon upang maipakita ang iyong malalim na pag-unawa sa code.

---

## I. Pangunahing Konsepto: Event Handling sa React

Sa React, ang mga user interaction (tulad ng pag-click, pag-type, o pag-submit ng form) ay tinatawag na **"Events"**. Kapag nangyari ang isang event, mayroong isang function na "nakikinig" (event listener) at tumatakbo (event handler) upang iproseso ang aksyon na iyon. Ito ang nagiging sanhi ng pagbabago sa data (state) at sa UI (kung ano ang nakikita sa screen).

**Flow:**
1.  **User Action** (e.g., Click ng Button)
2.  **Event Handler** (e.g., `onClick={myFunction}`)
3.  **Function Execution** (e.g., `myFunction`)
4.  **State Update** (e.g., `useState` na nagbabago ng value)
5.  **UI Re-render** (Nagbabago ang nakikita sa screen)

---

## II. Mga Mahalagang Interactions at ang Kanilang Code Mapping

### 1. Login (Pag-login sa Account)
*   **Page**: Login Page (`src/pages/Login.jsx`)
*   **User Action**: Pag-type ng Email at Password, pag-click sa "Login" button.
*   **Function na Tumatakbo**: `handleSubmit` function (linya 15).
    *   **Ano ang Ginagawa**: Kinukuha ang email at password, hinahanap ang user sa `localStorage` (`getAll("elyu_users")` sa `src/data/storage.js`).
    *   **Code Reference**: `handleSubmit` function, linya 15-31.
*   **Mga Lumalabas sa Screen (Output)**:
    *   **Successful Login**: Kung tama ang credentials, ang user ay ire-redirect sa `/dashboard` (linya 12). Ang `currentUser` state sa `src/App.jsx` ay na-uupdate, at nagbabago ang Navbar (nagpapakita ng "Dashboard" at "Logout").
    *   **Failed Login**: Kung mali ang credentials, lalabas ang error message na "Invalid email or password. Please try again." sa ilalim ng form (linya 28, na ipinapakita sa linya 54).
    *   **Loading State**: Habang naghihintay, ang button ay magiging "Please wait..." at magiging disabled (linya 89).

### 2. Register (Pag-gawa ng Bagong Account)
*   **Page**: Register Page (`src/pages/Register.jsx`)
*   **User Action**: Pag-fill up ng form (Full Name, Email, Password, etc.), pag-click sa "Create Account" button.
*   **Function na Tumatakbo**: `handleSubmit` function (linya 49).
    *   **Ano ang Ginagawa**: Nagva-validate ng form (`validateForm` function sa linya 30), at kung valid, idinadagdag ang bagong user sa `localStorage` (`add(STORAGE_KEYS.USERS, newUser)` sa `src/data/storage.js`).
    *   **Code Reference**: `handleSubmit` function, linya 49-79.
*   **Mga Lumalabas sa Screen (Output)**:
    *   **Successful Registration**: Kung valid at naidagdag ang user, awtomatikong magla-login ang user at ire-redirect sa `/dashboard` (linya 74).
    *   **Failed Registration/Validation Errors**: Kung may mali sa form (e.g., password mismatch, empty fields), lalabas ang error message sa ilalim ng form (linya 32, 37, 42, na ipinapakita sa linya 102).
    *   **Loading State**: Habang naghihintay, ang button ay magiging "Creating Account..." at magiging disabled (linya 203).

### 3. Apply for a Job (Pag-apply sa Trabaho)
*   **Page**: Jobs Page (`src/pages/Jobs.jsx`) na nagpapakita ng `<JobCard>` (`src/components/JobCard.jsx`)
*   **User Action**: Pag-click sa "Apply Now" button sa isang Job Card.
*   **Function na Tumatakbo**: `onApply` function (ipinapasa bilang prop sa `<JobCard>`).
    *   **Ano ang Ginagawa**: Idinadagdag ang application ng user sa `localStorage` (`elyu_applications`).
    *   **Code Reference**: `JobCard.jsx` (linya 70) para sa `onClick` handler. Ang actual `onApply` logic ay nasa `src/pages/Jobs.jsx` (linya 104).
*   **Mga Lumalabas sa Screen (Output)**:
    *   **Button Change**: Ang "Apply Now" button ay magiging "✓ Applied" at magiging disabled (linya 73 sa `JobCard.jsx`).
    *   **Data Update**: Ang application ay makikita na sa "My Applications" page ng job seeker at sa "Applications" list ng employer.

### 4. Post a New Job (Pag-post ng Bagong Trabaho)
*   **Page**: Jobs Page (`src/pages/Jobs.jsx`)
*   **User Action**: Pag-click sa "Post New Job" button, pag-fill up ng form, pag-click sa "Submit" button.
*   **Function na Tumatakbo**: `handleSubmit` function para sa job form (linya 115).
    *   **Ano ang Ginagawa**: Kinukuha ang data mula sa form at idinadagdag ito sa `localStorage` (`elyu_jobs`).
    *   **Code Reference**: `handleSubmit` function, linya 115-123. Ang `onClick` para sa "Post New Job" button ay nasa linya 125.
*   **Mga Lumalabas sa Screen (Output)**:
    *   **Form Visibility**: Ang job form ay lalabas kapag pinindot ang "Post New Job" button (kinokontrol ng `showForm` state).
    *   **Job Listing Update**: Ang bagong trabaho ay lalabas sa listahan ng mga trabaho sa Jobs Page.

### 5. Update Profile (Pag-edit ng Profile)
*   **Page**: Profile Page (`src/pages/Profile.jsx`)
*   **User Action**: Pag-click sa "Edit Profile" button, pag-edit ng fields, pag-click sa "Save Changes" button.
*   **Function na Tumatakbo**: `handleSubmit` function (linya 44).
    *   **Ano ang Ginagawa**: Kinukuha ang updated na data mula sa form at ina-update ang user record sa `localStorage` (`update(STORAGE_KEYS.USERS, updatedUser)`).
    *   **Code Reference**: `handleSubmit` function, linya 44-52. Ang `onClick` para sa "Edit Profile" button ay nasa linya 55.
*   **Mga Lumalabas sa Screen (Output)**:
    *   **Form Visibility**: Ang profile form ay lalabas kapag pinindot ang "Edit Profile" button (kinokontrol ng `isEditing` state).
    *   **Profile Update**: Ang mga bagong detalye ng profile ay ipapakita sa Profile Page.

---

## III. Paano Ito Gamitin sa Iyong Presentasyon

1.  **Live Demo**: Habang nagde-demo, kapag pinindot mo ang isang button (hal. Login), sabihin mo:
    > *"Kapag pinindot ko po ang 'Login' button, ang `handleSubmit` function po sa `Login.jsx` (linya 15) ang tumatakbo. Kinukuha po nito ang email at password, at chine-check sa `localStorage` kung valid ang user. Kung valid, ire-redirect po ako sa Dashboard."*

2.  **Code Walkthrough**: Buksan ang VS Code at ituro ang specific na function at linya na binabanggit mo. Ipakita ang `useState` na nagbabago, ang `onClick` event, at ang `if/else` conditions na nagpapalit ng UI.

3.  **Focus sa Input-Process-Output**: Palaging ipaliwanag ang flow: **Ano ang ginawa ng user? Anong function ang tumakbo? Ano ang nagbago sa screen at bakit?**

Ang gabay na ito ay magbibigay sa iyo ng kumpiyansa na ipaliwanag ang bawat interaction sa iyong website. Kaya mo yan!
