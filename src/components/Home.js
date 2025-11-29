import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/home.css';

function Home({ setActiveTool }) {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Hero animation
    const tl = gsap.timeline();
    tl.fromTo(
      '.hero-logo',
      { opacity: 0, scale: 0.5, y: -30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' }
    )
    .fromTo(
      '.hero-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(
      '.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(
      '.hero-buttons',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    );

    // Cards stagger
    const cards = cardsRef.current?.querySelectorAll('.feature-card');
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.6, 
          stagger: 0.15,
          ease: 'back.out(1.7)',
          delay: 0.5
        }
      );
    }
  }, []);

  const features = [
    {
      id: 'chat',
      icon: '💬',
      title: 'AI Chat',
      description: 'Chat with AI assistant for instant help and answers'
    },
    {
      id: 'text-analyzer',
      icon: '📊',
      title: 'Text Analyzer',
      description: 'Get instant insights on readability, tone, and quality'
    },
    {
      id: 'resume-reviewer',
      icon: '📄',
      title: 'Resume Reviewer',
      description: 'AI-powered resume analysis with ATS scoring'
    },
    {
      id: 'rewrite',
      icon: '✨',
      title: 'AI Rewrite',
      description: 'Transform your text into professional content'
    },
    {
      id: 'keywords',
      icon: '🔑',
      title: 'Keyword Extractor',
      description: 'Extract important keywords from any text'
    },
    {
      id: 'grammar',
      icon: '✅',
      title: 'Grammar Fixer',
      description: 'Fix grammar and improve writing quality'
    }
  ];

  return (
    <div className="home">
      <section className="hero" ref={heroRef}>
        <img 
          src="/logo IM.png" 
          alt="InsightMeter Logo" 
          className="hero-logo"
        />
        <h1 className="hero-title gradient-text">
          InsightMeter AI Suite
        </h1>
        <p className="hero-subtitle">
          Analyze, improve, and perfect your content with advanced AI tools
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary btn-large"
            onClick={() => setActiveTool('text-analyzer')}
          >
            Get Started →
          </button>
          <button 
            className="btn btn-secondary btn-large"
            onClick={() => setActiveTool('about')}
          >
            Learn More
          </button>
        </div>
      </section>

      <section className="features" ref={cardsRef}>
        <h2 className="section-title">Powerful AI Tools</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="feature-card glass"
              onClick={() => setActiveTool(feature.id)}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <button className="feature-btn">Try Now →</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
