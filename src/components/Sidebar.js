import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/sidebar.css';

function Sidebar({ activeTool, setActiveTool, isOpen, onClose }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (sidebarRef.current) {
      gsap.fromTo(
        sidebarRef.current,
        { x: -300, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      );
    }
  }, []);

  const tools = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'about', icon: 'ℹ️', label: 'About Us' },
    { id: 'chat', icon: '💬', label: 'AI Chat' },
    { id: 'text-analyzer', icon: '📊', label: 'Text Analyzer' },
    { id: 'resume-reviewer', icon: '📄', label: 'Resume Reviewer' },
    { id: 'rewrite', icon: '✨', label: 'AI Rewrite' },
    { id: 'keywords', icon: '🔑', label: 'Keyword Extractor' },
    { id: 'grammar', icon: '✅', label: 'Grammar Fixer' }
  ];

  const handleToolClick = (toolId) => {
    setActiveTool(toolId);
    // Close sidebar on mobile after selecting a tool
    if (window.innerWidth <= 1024) {
      onClose();
    }
  };

  return (
    <aside 
      className={`sidebar ${isOpen ? 'open' : 'closed'}`} 
      ref={sidebarRef}
    >
      <div className="sidebar-header">
        <div className="logo">
          <img 
            src="/logo IM.png" 
            alt="InsightMeter Logo" 
            className="logo-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'inline-block';
            }}
          />
          <span className="logo-icon" style={{display: 'none'}}>🤖</span>
          <span className="logo-text">InsightMeter</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {tools.map((tool) => (
          <button
            key={tool.id}
            className={`nav-item ${activeTool === tool.id ? 'active' : ''}`}
            onClick={() => handleToolClick(tool.id)}
            title={tool.label}
          >
            <span className="nav-icon">{tool.icon}</span>
            <span className="nav-label">{tool.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">👤</div>
          <div className="user-details">
            <div className="user-name">User</div>
            <div className="user-plan">Free Plan</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
