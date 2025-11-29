import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ChatPage from './components/ChatPage';
import TextAnalyzer from './components/TextAnalyzer';
import ResumeReviewer from './components/ResumeReviewer';
import RewriteTool from './components/RewriteTool';
import KeywordExtractor from './components/KeywordExtractor';
import GrammarFixer from './components/GrammarFixer';
import './styles/global.css';
import './styles/layout.css';
import './styles/animations.css';

function App() {
  const [activeTool, setActiveTool] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024);
  const contentRef = useRef(null);
  const bgShapesRef = useRef(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Close sidebar function (for mobile overlay)
  const closeSidebar = () => {
    if (window.innerWidth <= 1024) {
      setIsSidebarOpen(false);
    }
  };

  // Animate content when switching tools
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    }
  }, [activeTool]);

  // Floating background shapes animation
  useEffect(() => {
    const shapes = bgShapesRef.current?.querySelectorAll('.bg-shape');
    if (shapes) {
      shapes.forEach((shape, i) => {
        gsap.to(shape, {
          y: '+=30',
          x: '+=20',
          rotation: 360,
          duration: 10 + i * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      });
    }

    // Parallax mouse movement
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX / window.innerWidth - 0.5) * 50;
      const moveY = (clientY / window.innerHeight - 0.5) * 50;
      
      gsap.to('.bg-shape', {
        x: moveX,
        y: moveY,
        duration: 1,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderTool = () => {
    switch (activeTool) {
      case 'home':
        return <Home setActiveTool={setActiveTool} />;
      case 'about':
        return <AboutUs setActiveTool={setActiveTool} />;
      case 'chat':
        return <ChatPage />;
      case 'text-analyzer':
        return <TextAnalyzer />;
      case 'resume-reviewer':
        return <ResumeReviewer />;
      case 'rewrite':
        return <RewriteTool />;
      case 'keywords':
        return <KeywordExtractor />;
      case 'grammar':
        return <GrammarFixer />;
      default:
        return <Home setActiveTool={setActiveTool} />;
    }
  };

  return (
    <div className="app">
      {/* Floating Background Shapes */}
      <div className="bg-shapes" ref={bgShapesRef}>
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      <Header 
        sidebarOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />
      
      <div className="app-layout">
        <Sidebar 
          activeTool={activeTool} 
          setActiveTool={setActiveTool}
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />
        
        {/* Mobile overlay - only show on mobile when sidebar is open */}
        {isSidebarOpen && window.innerWidth <= 1024 && (
          <div 
            className="sidebar-overlay"
            onClick={closeSidebar}
          />
        )}
        
        <main 
          className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`} 
          ref={contentRef}
        >
          {renderTool()}
        </main>
      </div>
    </div>
  );
}

export default App;
