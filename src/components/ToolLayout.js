import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/layout.css';

function ToolLayout({ title, description, children }) {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="tool-layout">
      <div className="tool-header" ref={headerRef}>
        <h2 className="tool-title gradient-text">{title}</h2>
        <p className="tool-description">{description}</p>
      </div>
      <div className="tool-content">
        {children}
      </div>
    </div>
  );
}

export default ToolLayout;
