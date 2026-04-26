import React from 'react';

const SustainingChange = () => {
  return (
    <section className="sustain-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="section-label">Our Journey</div>
            <h2 className="section-title">
              20 years of reimagining for citizens and{' '}
              <em>sustaining change</em>
            </h2>
            <p className="sustain-quote">
              Since 2003, eGov Foundation has been at the forefront of India's digital governance revolution. 
              We don't just build technology — we build ecosystems that empower governments to serve citizens 
              better, faster, and more equitably.
            </p>
            <p style={{ color: 'var(--egov-text-light)', fontSize: '16px', lineHeight: 1.7, marginTop: '16px' }}>
              Our work spans urban governance, water sanitation, rural welfare, healthcare, and revenue systems — 
              touching every dimension of public service delivery across India and beyond.
            </p>

            <div style={{
              borderLeft: '4px solid var(--egov-orange)',
              paddingLeft: '20px',
              marginTop: '28px',
              fontStyle: 'italic',
              color: 'var(--egov-text-light)',
              fontSize: '15px'
            }}>
              "Technology should serve people, not the other way around. At eGov, we believe in building 
              infrastructure that puts citizens first."
              <div style={{ marginTop: '8px', fontStyle: 'normal', fontWeight: 600, color: 'var(--egov-text)', fontSize: '14px' }}>
                — eGov Leadership Team
              </div>
            </div>

            <a href="#" className="btn-egov-primary" style={{ display: 'inline-block', marginTop: '28px' }}>
              Read Our Story
            </a>
          </div>

          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-12">
                <div className="sustain-img">
                  <img
                    src="https://placehold.co/600x260/0B4C8C/ffffff?text=Digital+Governance+Impact"
                    alt="eGov 20 years of impact"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="sustain-img">
                  <img
                    src="https://placehold.co/280x180/F47B20/ffffff?text=Citizens+First"
                    alt="Citizens first approach"
                    style={{ height: '180px' }}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="sustain-img">
                  <img
                    src="https://placehold.co/280x180/1A6BB5/ffffff?text=Open+Source"
                    alt="Open source platform"
                    style={{ height: '180px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainingChange;
