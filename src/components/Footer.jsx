import React from 'react';
import { Link } from 'wouter';

export default function Footer({ currentUser }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About ELYU Trabaho</h4>
            <p>
              Connecting construction companies with skilled workers in La Union. Building opportunities, one project at a time.
            </p>
          </div>

          <div className="footer-section">
            <h4>For Job Seekers</h4>
            <ul>
              <li><Link href="/jobs">Browse Jobs</Link></li>
              <li><Link href="/applications">My Applications</Link></li>
              <li><Link href="/profile">My Profile</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>For Employers</h4>
            <ul>
              <li><Link href="/jobs">Post a Job</Link></li>
              <li><Link href="/projects">Manage Projects</Link></li>
              <li><Link href="/dashboard">Build Your Team</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+63912345678">+63 912 345 678</a></li>
              <li><a href="mailto:info@elyutrabaho.com">info@elyutrabaho.com</a></li>
              <li>San Fernando, La Union</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} ELYU Trabaho. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
