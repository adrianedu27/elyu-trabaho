import React from 'react';
import { Link } from 'wouter';

export default function Home({ currentUser }) {
  return (
    <div>
      <section
        style={{
          backgroundColor: 'var(--primary)',
          color: 'white',
          padding: '60px 20px',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: '42px',
              marginBottom: '16px',
              fontWeight: 'bold',
              color: '#f59e0b',
            }}
          >
            ELYU Trabaho
          </h1>

          <p
            style={{
              fontSize: '18px',
              marginBottom: '32px',
              color: '#e5e7eb',
            }}
          >
            Find construction jobs or hire skilled workers in La Union.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {!currentUser ? (
              <>
                <Link href="/register" className="btn btn-secondary btn-lg">
                  Get Started
                </Link>

                <Link
                  href="/login"
                  className="btn btn-outline"
                  style={{
                    borderColor: 'white',
                    color: 'white',
                  }}
                >
                  Login
                </Link>
              </>
            ) : (
              <Link href="/dashboard" className="btn btn-secondary btn-lg">
                Go to Dashboard
              </Link>
            )}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '48px 20px',
          backgroundColor: 'white',
        }}
      >
        <div className="container">
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '32px',
              fontSize: '32px',
              fontWeight: 'bold',
            }}
          >
            How it Works
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
            }}
          >
            <div
              style={{
                padding: '24px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <div
                style={{
                  fontSize: '40px',
                  marginBottom: '16px',
                }}
              >
                👷
              </div>

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '12px',
                }}
              >
                For Workers
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: '1.6',
                }}
              >
                Browse available jobs, apply to positions that match your skills, and keep track of your applications.
              </p>
            </div>

            <div
              style={{
                padding: '24px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <div
                style={{
                  fontSize: '40px',
                  marginBottom: '16px',
                }}
              >
                🏢
              </div>

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '12px',
                }}
              >
                For Companies
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: '1.6',
                }}
              >
                Post job openings, manage your projects, and build your team with reliable professionals.
              </p>
            </div>

            <div
              style={{
                padding: '24px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <div
                style={{
                  fontSize: '40px',
                  marginBottom: '16px',
                }}
              >
                📊
              </div>

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '12px',
                }}
              >
                Track Progress
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: '1.6',
                }}
              >
                Check the status of your applications or monitor project performance in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '48px 20px',
          backgroundColor: '#f5f5f5',
        }}
      >
        <div className="container">
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '32px',
              fontSize: '32px',
              fontWeight: 'bold',
            }}
          >
            Platform Overview
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: 'var(--primary)',
                  marginBottom: '8px',
                }}
              >
                500+
              </div>
              <p style={{ color: '#666' }}>Active Workers</p>
            </div>

            <div>
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: 'var(--primary)',
                  marginBottom: '8px',
                }}
              >
                1000+
              </div>
              <p style={{ color: '#666' }}>Jobs Posted</p>
            </div>

            <div>
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: 'var(--primary)',
                  marginBottom: '8px',
                }}
              >
                200+
              </div>
              <p style={{ color: '#666' }}>Companies</p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '48px 20px',
          backgroundColor: 'white',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2
            style={{
              marginBottom: '16px',
              fontSize: '32px',
              fontWeight: 'bold',
            }}
          >
            Ready to Start?
          </h2>

          <p
            style={{
              marginBottom: '24px',
              color: '#666',
              fontSize: '16px',
            }}
          >
            Join the construction workforce platform in La Union today.
          </p>

          {!currentUser && (
            <Link href="/register" className="btn btn-primary btn-lg">
              Create Account
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
