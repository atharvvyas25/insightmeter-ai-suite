import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/header.css';

function Header({ sidebarOpen, toggleSidebar }) {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <button 
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <span className={`hamburger ${sidebarOpen ? 'active' : ''}`}></span>
      </button>

      <div className="header-title">
        <img 
          src="/logo IM.png" 
          alt="InsightMeter" 
          className="header-logo"
          onError={(e) => e.target.style.display = 'none'}
        />
        <h1 className="gradient-text">InsightMeter AI Suite</h1>
      </div>

      <div className="header-actions">
        <button className="header-btn">
          <span>⚡</span> Upgrade
        </button>
      </div>
    </header>
  );
}

export default Header;
