import React, { useState } from 'react';
import { Redirect, Link } from 'wouter';
import { getAll } from '../data/storage.js';

export default function Login({ onLogin, currentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate login delay
    setTimeout(() => {
      const users = getAll('elyu_users');
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        onLogin(user);
      } else {
        setError('Mali ang email o password. Pakisubukang muli.');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--bg-secondary)',
      padding: 'var(--spacing-lg)',
    }}>
      <div className="card" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-header" style={{ textAlign: 'center' }}>
          <h1 style={{ margin: 0, marginBottom: 'var(--spacing-md)', fontSize: '28px' }}>
            🏗️ ELYU Trabaho
          </h1>
          <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
            Mag-login sa iyong account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card-body">
          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="juan@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            {loading ? 'Sandali lang...' : 'Mag-login'}
          </button>

          <p style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)', color: 'var(--text-secondary)' }}>
            Wala pang account?{' '}
            <Link href="/register" style={{ color: 'var(--primary)', fontWeight: 600 }}>
              Mag-register dito
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
