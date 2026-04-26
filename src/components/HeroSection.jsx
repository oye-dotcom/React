import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: "url('/src/assets/New-Home-Page-Banner-Image.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="hero-title fade-in-up"style={{ fontWeight: 300, fontSize: 'clamp(28px,44vw/10.80,44px)' }}>
              20 years of digital transformation in public service delivery 
              <span style={{ display: 'block',fontWeight: 600,fontSize: 'clamp(30px,54vw/10.80,54px)',backgroundImage: "url('/src/assets/animate-bg.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain',width: 'fit-content', backgroundPosition: 'center' }}>It's possible.</span>
            </h1>
            <p className="hero-title" style={{ fontSize: 'clamp(28px,5vw,56px)', fontWeight: 300, color: '#0B4C8C', marginBottom: '20px' }}>
              
            </p>
            <p className="hero-subtitle fade-in-up delay-1"style={{ fontSize: 'clamp(14px,16vw/10.80,16px)',color: '#0E165D'}}>
              Catalysts. Ecosystem enablers. Problem Solvers. We're driven by the power of open digital infrastructure to enable governments deliver accessible, inclusive services to every citizen.
            </p>
            <div className="d-flex gap-3 flex-wrap fade-in-up delay-2">
              <a href="#" style={{ padding: '10px 15px', fontSize: '15px',background:'#4bb5c3',borderRadius:'50px',color:'#fff',border:'1px solid #4bb5c3' }}>
                Our Approach
              </a>
              <a href="#"  style={{ padding: '10px 15px', fontSize: '15px',background:'#fff',borderRadius:'50px',color:'#4bb5c3',border:'1px solid #4bb5c3' }}>
               Our Impact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
