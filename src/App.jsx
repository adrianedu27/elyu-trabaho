import React, { useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect, useLocation } from 'wouter';
import { setCurrentUser, getCurrentUser, STORAGE_KEYS } from './data/storage.js';
import { initializeSeedData } from './data/seedData.js';
import AppErrorBoundary from './components/AppErrorBoundary.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Pages
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Jobs from './pages/Jobs.jsx';
import Projects from './pages/Projects.jsx';
import Applications from './pages/Applications.jsx';
import Profile from './pages/Profile.jsx';
import Admin from './pages/Admin.jsx';

function AppContent({ currentUser, handleLogin, handleLogout, handleUpdateUser }) {
  const [location] = useLocation();

  const getPageName = () => {
    if (location === '/') return 'home';
    if (location === '/login') return 'login';
    if (location === '/register') return 'register';
    if (location === '/dashboard') return 'dashboard';
    if (location === '/jobs') return 'jobs';
    if (location === '/projects') return 'projects';
    if (location === '/applications') return 'applications';
    if (location === '/profile') return 'profile';
    if (location === '/admin') return 'admin';
    return 'home';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar
        currentUser={currentUser}
        onLogout={handleLogout}
        currentPage={getPageName()}
      />

      <main style={{ flex: 1 }}>
        <Switch>
          <Route path="/">
            <Home currentUser={currentUser} />
          </Route>

          <Route path="/login">
            <Login onLogin={handleLogin} currentUser={currentUser} />
          </Route>

          <Route path="/register">
            <Register onLogin={handleLogin} currentUser={currentUser} />
          </Route>

          <Route path="/dashboard">
            <ProtectedRoute currentUser={currentUser}>
              <Dashboard currentUser={currentUser} />
            </ProtectedRoute>
          </Route>

          <Route path="/jobs">
            <ProtectedRoute currentUser={currentUser}>
              <Jobs currentUser={currentUser} />
            </ProtectedRoute>
          </Route>

          <Route path="/projects">
            <ProtectedRoute currentUser={currentUser} requiredRole="employer">
              <Projects currentUser={currentUser} />
            </ProtectedRoute>
          </Route>

          <Route path="/applications">
            <ProtectedRoute currentUser={currentUser}>
              <Applications currentUser={currentUser} />
            </ProtectedRoute>
          </Route>

          <Route path="/profile">
            <ProtectedRoute currentUser={currentUser}>
              <Profile currentUser={currentUser} onUpdateUser={handleUpdateUser} />
            </ProtectedRoute>
          </Route>

          <Route path="/admin">
            <ProtectedRoute currentUser={currentUser} requiredRole="admin">
              <Admin currentUser={currentUser} />
            </ProtectedRoute>
          </Route>

          <Route path="/:rest*">
            <div className="container" style={{ padding: 'var(--spacing-3xl) var(--spacing-lg)', textAlign: 'center' }}>
              <div className="empty-state">
                <div className="empty-state-icon">404</div>
                <h3>Page Not Found</h3>
                <p>The page you're looking for doesn't exist.</p>
                <a href="/" className="btn btn-primary">
                  Go Home
                </a>
              </div>
            </div>
          </Route>
        </Switch>
      </main>

      <Footer currentUser={currentUser} />
    </div>
  );
}

export default function App() {
  const [currentUser, setCurrentUserState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize seed data
    initializeSeedData();

    // Load current user from localStorage
    const user = getCurrentUser();
    if (user) {
      setCurrentUserState(user);
    }
    setLoading(false);
  }, []);

  const handleLogin = (user) => {
    setCurrentUserState(user);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUserState(null);
    setCurrentUser(null);
  };

  const handleUpdateUser = (updatedUser) => {
    setCurrentUserState(updatedUser);
    setCurrentUser(updatedUser);
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div className="spinner" style={{ margin: '0 auto var(--spacing-lg)' }} />
          <p style={{ color: 'var(--text-secondary)' }}>Loading ELYU Trabaho...</p>
        </div>
      </div>
    );
  }

  return (
    <AppErrorBoundary>
      <Router>
        <AppContent
          currentUser={currentUser}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          handleUpdateUser={handleUpdateUser}
        />
      </Router>
    </AppErrorBoundary>
  );
}
