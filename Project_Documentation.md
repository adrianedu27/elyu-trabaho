# ELYU Trabaho: Construction Workforce Management and Recruitment System

## 1. Project Goal
Ang **ELYU Trabaho** ay isang React-based web application na idinisenyo upang tugunan ang mga hamon sa pamamahala ng workforce at recruitment sa sektor ng konstruksyon sa La Union. Ang pangunahing layunin nito ay magbigay ng isang digital na solusyon na nagkokonekta sa mga kumpanya ng konstruksyon sa mga skilled workers, na nagpapadali sa proseso ng paghahanap ng trabaho at pagkuha ng empleyado.

Ang sistema ay sumusunod sa mga sumusunod na prinsipyo:
*   **Pagkilala sa Problema**: Tinutugunan ang kahirapan sa paghahanap ng skilled construction workers at ang kakulangan ng organisadong sistema para sa job matching sa La Union.
*   **Digital na Solusyon**: Nagbibigay ng user-friendly na platform para sa job posting, application, at project management.
*   **CRUD Operations**: Nagbibigay-daan sa mga user na **C**reate, **R**ead, **U**pdate, at **D**elete ng data (tulad ng job postings, applications, at user profiles).
*   **React Concepts**: Ipinapakita ang tamang paggamit ng mga React concepts tulad ng state management, conditional rendering, at event handling.

## 2. Required Problem + System Requirement

### A. Problem Statement
Ang sektor ng konstruksyon sa La Union ay nahaharap sa mga hamon sa epektibong pagtutugma ng mga skilled construction workers sa mga available na trabaho at proyekto. Ang kasalukuyang proseso ay madalas na nakabatay sa manual na referral o limitadong network, na nagreresulta sa:
*   **Inefficient Recruitment**: Mahirap para sa mga kumpanya na mabilis na makahanap ng kwalipikadong manggagawa.
*   **Limited Job Access**: Limitado ang kaalaman ng mga manggagawa sa mga available na oportunidad sa trabaho.
*   **Poor Workforce Management**: Kakulangan ng sentralisadong sistema para sa pagsubaybay sa mga proyekto at aplikasyon.

### B. System Solution
Ang **ELYU Trabaho** ay nagbibigay ng direktang solusyon sa mga problemang ito sa pamamagitan ng:
*   **Digital Platform**: Pinapalitan ang manual na proseso ng isang online system na nagpapahintulot sa mga kumpanya na mag-post ng trabaho at sa mga manggagawa na mag-apply online.
*   **Efficient Data Management**: Nagbibigay-daan sa mga user na madali at epektibong pamahalaan ang kanilang data (profiles, job postings, applications, projects).
*   **Real-time Updates**: Gumagamit ng React state para sa dynamic na pagpapakita ng data at user interactions.

## 3. Required System Features (Based on Class Topics)
Ang sistema ay nagpapakita ng sumusunod na CORE REQUIREMENTS:

| Feature | Deskripsyon | Implementasyon sa ELYU Trabaho |
| :------ | :---------- | :------------------------------ |
| **Create** | Pagdagdag ng bagong data gamit ang forms. | May forms para sa pag-register ng user, pag-post ng trabaho, at paggawa ng proyekto. |
| **Read** | Pagpapakita ng data gamit ang `map()`. | Ang mga listahan ng trabaho, aplikasyon, proyekto, at user ay ipinapakita gamit ang `map()` function. |
| **Update** | Pag-edit ng existing records. | May profile editing para sa mga user, at project/job editing para sa mga employer. |
| **Delete** | Pag-alis ng records. | May functionality ang Admin role para burahin ang users, jobs, projects, at applications. Mayroon ding delete option ang employer para sa kanilang jobs at projects. |
| **Forms** | Paggamit ng input fields. | Lahat ng data entry ay ginagawa sa pamamagitan ng forms na may iba't ibang input fields. |
| **Event Handling** | Paggamit ng `onClick`, `onChange`. | Malawakang ginagamit ang `onClick` para sa buttons at `onChange` para sa form inputs. |
| **State Management** | Paggamit ng `useState`. | Ang `useState` hook ay ginagamit sa buong application para pamahalaan ang local component state. |
| **Conditional Rendering** | Pagpapakita ng elements batay sa kondisyon. | Ang mga UI elements (tulad ng navigation links, forms, at dashboard cards) ay nagbabago batay sa user role at login status. |
| **Rendering Lists** | Pagpapakita ng listahan ng data. | Ang mga listahan ng trabaho, aplikasyon, at proyekto ay nire-render gamit ang `map()` function. |

## 4. Additional Requirements (From Class Discussion)
Ang **ELYU Trabaho** ay nagpapakita rin ng mga sumusunod na PLUS FEATURES:

| Feature | Deskripsyon | Implementasyon sa ELYU Trabaho |
| :------ | :---------- | :------------------------------ |
| **Search functionality** | Paghahanap ng specific data. | May search bar para sa jobs at projects. |
| **Filtering data** | Pag-filter ng data batay sa criteria. | May filter options para sa job type at application status. |
| **Multiple components** | Modular na pagbuo ng UI. | Ang application ay binubuo ng maraming reusable components (e.g., `JobCard`, `ApplicationCard`, `Navbar`, `Footer`). |
| **Local storage** | Pag-save ng data kahit pagkatapos ng refresh. | Lahat ng data (users, jobs, projects, applications) ay naka-save sa `localStorage`. |
| **Simple authentication** | Login form. | May login at registration forms na may role-based access. |
| **Improved UI/UX design** | Malinis at user-friendly na interface. | Gumagamit ng plain CSS para sa malinis at responsive na disenyo. |
| **Form validation** | Pag-validate ng input sa forms. | May basic client-side validation para sa registration at profile forms. |
| **Data counters** | Pagpapakita ng total counts. | Ang Dashboard ay nagpapakita ng iba't ibang data counters batay sa user role (e.g., total applications, jobs posted, users). |

## 5. Required Deliverables

1.  **Source Code**:
    *   Kumpletong React project folder (`adrianedu27/elyu-trabaho` GitHub repository).
2.  **Project Documentation**:
    *   Ang dokumentong ito mismo, na naglalaman ng Project Title, Problem Statement, System Solution, Features, at iba pang detalye.
3.  **Live Presentation**:
    *   Isang live demonstration ng system, na nagpapakita ng lahat ng CRUD operations na gumagana.
4.  **User Walkthrough Video Tutorial**:
    *   Isang 5–10 minutong screen recording na nagpapaliwanag kung paano gamitin ang system, kabilang ang pagdagdag, pagpapakita, pag-edit, at pagbura ng data.
5.  **3-Minute Pitch Video**:
    *   Isang maikling video na nagpapakilala sa system, nagpapaliwanag sa problemang sinosolusyunan, kung paano ito gumagana, at kung bakit ito kapaki-pakinabang.

## 6. General Reminders
*   Ang proyekto ay sumasagot sa isang real-world problem (workforce management sa konstruksyon).
*   Lahat ng CRUD features ay functional at naipakita sa code.
*   Gumagamit ng React concepts na tinalakay sa klase.
*   Ang kolaborasyon ng grupo ay mahalaga sa pagbuo ng proyekto.
*   Ang functional na sistema ay mas mahalaga kaysa sa disenyo lamang.

## FINAL NOTE
Ang **ELYU Trabaho** ay isang komprehensibong pagpapakita ng kakayahan sa event-driven programming, React state management, at CRUD operations sa isang real-world system. Ang maagang pagpaplano at tamang paghahati ng gawain ay susi sa tagumpay ng proyekto. Good luck!
