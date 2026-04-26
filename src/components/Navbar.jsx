import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="egov-navbar navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="/">
          <img src='/src/assets/eGov-Foundation.png' alt="eGov Foundation Logo" style={{ height: '32px' }} />
        </a>

        <button
          className="navbar-toggler border-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span style={{ fontSize: '24px', color: '#0B4C8C' }}>☰</span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto gap-1">
            {['About Us', 'Areas of Work', 'Products & Solutions', 'Our Platform'].map(link => (
              <li className="nav-item" key={link}>
                <a className="nav-link" href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
