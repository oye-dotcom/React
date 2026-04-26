import React from 'react';

const supporters = [
  { name: 'Bill & Melinda Gates Foundation', short: 'BMGF' },
  { name: 'Omidyar Network', short: 'Omidyar' },
  { name: 'World Bank', short: 'World Bank' },
  { name: 'Azim Premji Foundation', short: 'APF' },
  { name: 'USAID', short: 'USAID' },
  { name: 'Ministry of Housing & Urban Affairs', short: 'MoHUA' },
];

const Supporters = () => {
  return (
    <section className="supporters-section">
      <div className="container">
        <div className="text-center mb-5">
          <div className="section-label">Our Ecosystem</div>
          <h2 className="section-title" style={{ justifyContent: 'center', display: 'flex' }}>
            Our Supporters
          </h2>
          <p style={{ color: 'var(--egov-text-light)', fontSize:'16px' }}>
            Partnering with leading foundations, governments, and organizations to scale digital impact.
          </p>
        </div>

        <div className="row justify-content-center align-items-center g-4">
          {supporters.map((s, i) => (
            <div className="col-6 col-sm-4 col-lg-2" key={i}>
              <div className="supporter-logo">
                <div className="supporter-name">{s.short}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
