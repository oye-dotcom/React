import React from 'react';

const stats = [
  {
    big: '1,000,000,000+',
    label: 'Citizens impacted',
    sub: 'Across India and globally'
  },
  {
    big: '1.1B+',
    label: 'Service transactions',
    sub: 'Processed digitally every year'
  },
  {
    big: '50+',
    label: 'Government partners',
    sub: 'States and national bodies'
  }
];

const StatsSection = () => {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="text-center mb-5">
          <span className="stats-count-big">1,000,000,100+</span>
          <p style={{ fontSize: '16px', opacity: 0.8, marginTop: '8px', letterSpacing: '0.5px' }}>
            Citizens touched by eGov's digital public services
          </p>
        </div>

        <div className="row justify-content-center">
          {stats.map((s, i) => (
            <div className="col-12 col-sm-4" key={i}>
              <div className="stat-item">
                <h2>{s.big}</h2>
                <p style={{ fontWeight: 700, fontSize: '15px', opacity: 1 }}>{s.label}</p>
                <p>{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
