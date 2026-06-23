import React from 'react';
import { Redirect } from 'wouter';

export default function ProtectedRoute({
  currentUser,
  requiredRole,
  children,
}) {
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  if (requiredRole && currentUser.role !== requiredRole && currentUser.role !== 'admin') {
    return (
      <div className="container" style={{ padding: 'var(--spacing-3xl) var(--spacing-lg)' }}>
        <div className="empty-state">
          <div className="empty-state-icon">🚫</div>
          <h3>Access Denied</h3>
          <p>You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return children;
}
