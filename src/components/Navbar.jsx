import React from 'react';
import { Link } from 'wouter';

export default function Navbar({ currentUser, onLogout, currentPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          <span>🏗️</span>
          <span>ELYU Trabaho</span>
        </Link>

        <ul className="navbar-nav">
          <li>
            <Link href="/" className={currentPage === 'home' ? 'active' : ''}>
              Home
            </Link>
          </li>
          {currentUser ? (
            <>
              <li>
                <Link href="/dashboard" className={currentPage === 'dashboard' ? 'active' : ''}>
                  Dashboard
                </Link>
              </li>
              {currentUser.role === 'job_seeker' && (
                <>
                  <li>
                    <Link href="/jobs" className={currentPage === 'jobs' ? 'active' : ''}>
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link href="/applications" className={currentPage === 'applications' ? 'active' : ''}>
                      My Applications
                    </Link>
                  </li>
                </>
              )}
              {currentUser.role === 'employer' && (
                <>
                  <li>
                    <Link href="/jobs" className={currentPage === 'jobs' ? 'active' : ''}>
                      My Jobs
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className={currentPage === 'projects' ? 'active' : ''}>
                      Projects
                    </Link>
                  </li>
                </>
              )}
              {currentUser.role === 'admin' && (
                <li>
                  <Link href="/admin" className={currentPage === 'admin' ? 'active' : ''}>
                    Admin
                  </Link>
                </li>
              )}
            </>
          ) : null}
        </ul>

        <div className="navbar-right">
          {currentUser ? (
            <>
              <span style={{ color: 'white', fontSize: '14px' }}>
                {currentUser.name}
              </span>
              <Link href="/profile" className="btn btn-ghost" style={{ color: 'white' }}>
                Profile
              </Link>
              <button className="btn btn-outline" onClick={onLogout} style={{ borderColor: 'white', color: 'white' }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost" style={{ color: 'white' }}>
                Login
              </Link>
              <Link href="/register" className="btn btn-secondary">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
