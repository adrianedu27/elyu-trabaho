# ELYU Trabaho: Construction Workforce Management and Recruitment System

## 1. Project Goal
The **ELYU Trabaho** is a React-based web application designed to address the challenges in workforce management and recruitment within the construction sector in La Union. Its primary goal is to provide a digital solution that connects construction companies with skilled workers, streamlining the process of job searching and hiring.

The system adheres to the following principles:
*   **Problem Identification**: Addresses the difficulty in finding skilled construction workers and the lack of an organized system for job matching in La Union.
*   **Digital Solution**: Provides a user-friendly platform for job posting, application, and project management.
*   **CRUD Operations**: Allows users to **C**reate, **R**ead, **U**pdate, and **D**elete data (such as job postings, applications, and user profiles).
*   **React Concepts**: Demonstrates the proper use of React concepts discussed in class, such as state management, conditional rendering, and event handling.

## 2. Required Problem + System Requirement

### A. Problem Statement
The construction sector in La Union faces challenges in effectively matching skilled construction workers with available jobs and projects. The current process often relies on manual referrals or limited networks, resulting in:
*   **Inefficient Recruitment**: It is difficult for companies to quickly find qualified workers.
*   **Limited Job Access**: Workers have limited knowledge of available job opportunities.
*   **Poor Workforce Management**: Lack of a centralized system for tracking projects and applications.

### B. System Solution
The **ELYU Trabaho** provides a direct solution to these problems by:
*   **Digital Platform**: Replaces manual processes with an online system that allows companies to post jobs and workers to apply online.
*   **Efficient Data Management**: Enables users to easily and efficiently manage their data (profiles, job postings, applications, projects).
*   **Real-time Updates**: Utilizes React state for dynamic data display and user interactions.

## 3. Required System Features (Based on Class Topics)
The system demonstrates the following CORE REQUIREMENTS:

| Feature | Description | Implementation in ELYU Trabaho |
| :------ | :---------- | :------------------------------ |
| **Create** | Adding new data using forms. | Forms are available for user registration, job posting, and project creation. |
| **Read** | Displaying data using `map()`. | Lists of jobs, applications, projects, and users are displayed using the `map()` function. |
| **Update** | Editing existing records. | Profile editing is available for users, and project/job editing for employers. |
| **Delete** | Removing records. | The Admin role has functionality to delete users, jobs, projects, and applications. Employers also have a delete option for their jobs and projects. |
| **Forms** | Using input fields. | All data entry is done through forms with various input fields. |
| **Event Handling** | Using `onClick`, `onChange`. | `onClick` is widely used for buttons and `onChange` for form inputs. |
| **State Management** | Using `useState`. | The `useState` hook is used throughout the application to manage local component state. |
| **Conditional Rendering** | Displaying elements based on conditions. | UI elements (such as navigation links, forms, and dashboard cards) change based on user role and login status. |
| **Rendering Lists** | Displaying lists of data. | Lists of jobs, applications, and projects are rendered using the `map()` function. |

## 4. Additional Requirements (From Class Discussion)
The **ELYU Trabaho** also demonstrates the following PLUS FEATURES:

| Feature | Description | Implementation in ELYU Trabaho |
| :------ | :---------- | :------------------------------ |
| **Search functionality** | Searching for specific data. | A search bar is available for jobs and projects. |
| **Filtering data** | Filtering data based on criteria. | Filter options are available for job type and application status. |
| **Multiple components** | Modular UI development. | The application is built with many reusable components (e.g., `JobCard`, `ApplicationCard`, `Navbar`, `Footer`). |
| **Local storage** | Saving data even after refresh. | All data (users, jobs, projects, applications) is saved in `localStorage`. |
| **Simple authentication** | Login form. | Login and registration forms with role-based access are implemented. |
| **Improved UI/UX design** | Clean and user-friendly interface. | Uses plain CSS for a clean and responsive design. |
| **Form validation** | Validating input in forms. | Basic client-side validation is implemented for registration and profile forms. |
| **Data counters** | Displaying total counts. | The Dashboard displays various data counters based on user role (e.g., total applications, jobs posted, users). |

## 5. Required Deliverables

1.  **Source Code**:
    *   Complete React project folder (`adrianedu27/elyu-trabaho` GitHub repository).
2.  **Project Documentation**:
    *   This document itself, containing the Project Title, Problem Statement, System Solution, Features, and other details.
3.  **Live Presentation**:
    *   A live demonstration of the system, showcasing all working CRUD operations.
4.  **User Walkthrough Video Tutorial**:
    *   A 5–10 minute screen recording explaining how to use the system, including adding, displaying, editing, and deleting data.
5.  **3-Minute Pitch Video**:
    *   A short video introducing the system, explaining the problem it solves, how it works, and why it is useful.

## 6. General Reminders
*   The project addresses a real-world problem (workforce management in construction).
*   All CRUD features are functional and demonstrated in the code.
*   Uses React concepts discussed in class.
*   Group collaboration is essential for project development.
*   A functional system is more important than design alone.

## FINAL NOTE
The **ELYU Trabaho** is a comprehensive demonstration of skills in event-driven programming, React state management, and CRUD operations in a real-world system. Early planning and proper task division are key to project success. Good luck!
