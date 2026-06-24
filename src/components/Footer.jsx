import React from 'react';
import { Link } from 'wouter';

export default function Footer({ currentUser }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Tungkol sa ELYU Trabaho</h4>
            <p>
              Tinutulungan namin ang mga construction companies na makahanap ng mga skilled workers sa La Union. Building opportunities, one project at a time.
            </p>
          </div>

          <div className="footer-section">
            <h4>Para sa mga Workers</h4>
            <ul>
              <li><Link href="/jobs">Maghanap ng Trabaho</Link></li>
              <li><Link href="/applications">Aking Applications</Link></li>
              <li><Link href="/profile">Aking Profile</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Para sa mga Employers</h4>
            <ul>
              <li><Link href="/jobs">Mag-post ng Trabaho</Link></li>
              <li><Link href="/projects">I-manage ang Proyekto</Link></li>
              <li><Link href="/dashboard">Bumuo ng Team</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontakin Kami</h4>
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
