import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const usefulLinks = [
    'About Us', 'Areas of Work', 'Products & Solutions',
    'Knowledge Resources', 'News & Media', 'Careers', 'Contact Us'
  ];
  const platforms = [
    'DIGIT', 'mGramSeva', '10BedICU', 'UPYOG', 'Online Dispute Resolution', 'PUCAR'
  ];

  return (
    <footer className="egov-footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="footer-logo">
              e<span>Gov</span>
            </div>
            <p className="footer-desc">
              Catalysts. Ecosystem enablers. Problem Solvers. 
              Building open digital infrastructure for governments to serve citizens better.
            </p>
            <div className="d-flex gap-3 mt-4">
              {['𝕏', 'in', 'f', '▶'].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: '36px', height: '36px',
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '14px',
                  fontWeight: 700,
                  transition: 'background 0.2s, color 0.2s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--egov-orange)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-2">
            <h4 className="footer-heading">Useful Links</h4>
            <ul className="footer-links">
              {usefulLinks.map(link => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-lg-2">
            <h4 className="footer-heading">Platforms</h4>
            <ul className="footer-links">
              {platforms.map(p => (
                <li key={p}><a href="#">{p}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-lg-4">
            <h4 className="footer-heading">Subscribe Now</h4>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', marginBottom: '20px', lineHeight: 1.6 }}>
              Stay updated with the latest insights, research articles, and news from eGov Foundation.
            </p>
            <div className="footer-subscribe">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                aria-label="Email address for newsletter"
              />
              <button type="submit" onClick={() => setEmail('')}>
                Subscribe
              </button>
            </div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginTop: '10px' }}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>© 2025 eGov Foundation. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p>
                <a href="#" style={{ color: 'rgba(255,255,255,0.35)', marginRight: '16px', fontSize: '13px' }}>Privacy Policy</a>
                <a href="#" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px' }}>Terms of Use</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
