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
            Maghanap ng trabaho sa konstruksyon o kumuha ng mga skilled workers dito sa La Union.
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
                  Magsimula Na
                </Link>

                <Link
                  href="/login"
                  className="btn btn-outline"
                  style={{
                    borderColor: 'white',
                    color: 'white',
                  }}
                >
                  Mag-login
                </Link>
              </>
            ) : (
              <Link href="/dashboard" className="btn btn-secondary btn-lg">
                Pumunta sa Dashboard
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
            Paano Ito Gamitin?
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
                Para sa mga Workers
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: '1.6',
                }}
              >
                Mag-browse ng mga available na trabaho, mag-apply sa mga posisyon na swak sa skills mo, at i-track ang iyong mga applications.
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
                Para sa mga Kumpanya
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: '1.6',
                }}
              >
                Mag-post ng mga trabaho, i-manage ang inyong mga proyekto, at bumuo ng team kasama ang mga mahuhusay na professionals.
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
                I-track ang Progress
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: '1.6',
                }}
              >
                Tingnan ang status ng iyong mga applications o i-monitor ang performance ng iyong workforce sa real-time.
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
            Overview ng Platform
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
            Handa Ka Na Bang Magsimula?
          </h2>

          <p
            style={{
              marginBottom: '24px',
              color: '#666',
              fontSize: '16px',
            }}
          >
            Sumali na sa lumalaking construction workforce platform sa La Union.
          </p>

          {!currentUser && (
            <Link href="/register" className="btn btn-primary btn-lg">
              Gumawa ng Account
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
