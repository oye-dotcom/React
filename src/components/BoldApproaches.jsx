import React from 'react';

const approaches = [
  {
    number: '210+',
    label: 'Urban local bodies using DIGIT',
    img: 'https://placehold.co/64x64/0B4C8C/ffffff?text=ULB',
    color: '#e3f2fd'
  },
  {
    number: '2 Bn',
    label: 'Transactions processed annually',
    img: 'https://placehold.co/64x64/F47B20/ffffff?text=2Bn',
    color: '#fff3e0'
  },
  {
    number: '5000+',
    label: 'Villages using mGramSeva',
    img: 'https://placehold.co/64x64/2E7D32/ffffff?text=Village',
    color: '#e8f5e9'
  },
  {
    number: '4000+',
    label: 'Social benefit beneficiaries',
    img: 'https://placehold.co/64x64/4A148C/ffffff?text=Benefit',
    color: '#f3e5f5'
  },
  {
    number: '70%',
    label: 'Reduction in processing time',
    img: 'https://placehold.co/64x64/B71C1C/ffffff?text=70%',
    color: '#fce4ec'
  },
  {
    number: '250%',
    label: 'Revenue growth via digital tools',
    img: 'https://placehold.co/64x64/006064/ffffff?text=Rev',
    color: '#e0f7fa'
  }
];

const BoldApproaches = () => {
  return (
    <section className="bold-section">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="section-label">Our Approach</div>
            <h2 className="section-title">
              Big problems need{' '}
              <em>bold approaches</em>
            </h2>
            <p style={{ color: 'var(--egov-text-light)', fontSize: '16px', lineHeight: 1.7 }}>
              From digitizing water supply billing in remote villages to powering billion-scale urban services — eGov tackles the toughest governance challenges with proven open-source technology.
            </p>
            <div className="mt-4 d-flex gap-3 flex-wrap">
              <a href="#" className="btn-egov-primary">Read Case Studies</a>
              <a href="#" className="btn-egov-outline">View Impact</a>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row g-3">
              {approaches.map((a, i) => (
                <div className="col-6 col-md-4" key={i}>
                  <div className="approach-card fade-in-up" style={{ animationDelay: `${i * 0.08}s`, background: a.color }}>
                    <img src={a.img} alt={a.label} className="approach-img" />
                    <div className="approach-number">{a.number}</div>
                    <div className="approach-label">{a.label}</div>
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

export default BoldApproaches;
