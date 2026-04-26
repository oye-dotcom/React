import React from 'react';

const DigitPlatform = () => {
  const features = [
    { icon: '🏙️', title: 'Urban Services', desc: 'Property tax, trade licenses, grievance redressal for cities of all sizes' },
    { icon: '💧', title: 'Water & Sanitation', desc: 'Digital billing and monitoring for water supply and sewerage systems' },
    { icon: '🏘️', title: 'Rural Governance', desc: 'mGramSeva powers gram panchayat financial management' },
    { icon: '📊', title: 'Revenue Systems', desc: 'Intelligent revenue mobilisation for state and local governments' },
    { icon: '🏥', title: 'Health Services', desc: '10BedICU – digital ICU management for smaller hospitals' },
    { icon: '⚖️', title: 'Dispute Resolution', desc: 'Online Dispute Resolution Systems to decongest courts' },
  ];

  return (
    <section className="digit-section" id="digit">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="digit-logo">D<span>I</span>GIT</div>
            <h2 className="digit-tagline">
              Our open source technology-for-good platform
            </h2>
            <p className="digit-desc">
              DIGIT is a Digital Public Good — a battle-tested, open-source platform designed to help governments 
              deliver services at scale. Used by 210+ urban local bodies and across multiple states in India, 
              DIGIT makes government more accessible, transparent, and efficient.
            </p>
            <div className="d-flex gap-3 flex-wrap mt-4">
              <a href="#" className="btn-cta-white">Explore DIGIT</a>
              <a href="#" style={{
                border: '2px solid rgba(255,255,255,0.4)',
                color: '#fff',
                borderRadius: '8px',
                padding: '12px 28px',
                fontWeight: 700,
                fontSize: '15px',
                transition: 'all 0.2s',
                display: 'inline-block'
              }}>
                GitHub Repository
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-3">
              {features.map((f, i) => (
                <div className="col-12 col-sm-6" key={i}>
                  <div style={{
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    transition: 'background 0.2s, transform 0.2s',
                    cursor: 'pointer',
                    height: '100%'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    <div style={{ fontSize: '28px', marginBottom: '10px' }}>{f.icon}</div>
                    <div style={{ fontWeight: 700, marginBottom: '6px', fontSize: '15px' }}>{f.title}</div>
                    <div style={{ fontSize: '13px', opacity: 0.75, lineHeight: 1.6 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitPlatform;
