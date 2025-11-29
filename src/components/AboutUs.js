import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/aboutUs.css';

function AboutUs({ setActiveTool }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const sections = contentRef.current?.querySelectorAll('.about-section');
    if (sections) {
      gsap.fromTo(
        sections,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          ease: 'power3.out'
        }
      );
    }
  }, []);

  return (
    <div className="about-us" ref={contentRef}>
      <div className="about-hero">
        <h1 className="gradient-text">About InsightMeter</h1>
        <p className="about-tagline">
          Empowering professionals with AI-driven content intelligence
        </p>
      </div>

      <div className="about-content">
        <section className="about-section glass">
          <div className="section-icon">🚀</div>
          <h2>Our Mission</h2>
          <p>
            At InsightMeter, we believe that everyone deserves access to powerful AI tools 
            that enhance their writing, communication, and professional presence. Our mission 
            is to democratize AI-powered content analysis and improvement, making it accessible, 
            intuitive, and effective for professionals across all industries.
          </p>
        </section>

        <section className="about-section glass">
          <div className="section-icon">💡</div>
          <h2>What We Do</h2>
          <p>
            InsightMeter is a comprehensive AI suite designed to analyze, improve, and perfect 
            your content. From text analysis and resume reviews to grammar correction and 
            intelligent rewriting, our tools leverage cutting-edge AI technology to provide 
            instant, actionable insights that help you communicate more effectively.
          </p>
        </section>

        <section className="about-section glass">
          <div className="section-icon">🎯</div>
          <h2>Our Vision</h2>
          <p>
            We envision a world where AI augments human creativity and communication, not 
            replaces it. By providing intelligent tools that understand context, tone, and 
            intent, we help professionals craft better content, make stronger impressions, 
            and achieve their goals with confidence.
          </p>
        </section>

        <section className="about-section glass">
          <div className="section-icon">⚡</div>
          <h2>Why Choose InsightMeter?</h2>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <strong>Advanced AI Technology</strong>
                <p>Powered by state-of-the-art language models for accurate analysis</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <strong>Instant Results</strong>
                <p>Get comprehensive insights and improvements in seconds</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <strong>User-Friendly Interface</strong>
                <p>Intuitive design that makes powerful AI accessible to everyone</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <strong>Privacy Focused</strong>
                <p>Your content is processed securely with respect for your privacy</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <strong>Continuous Innovation</strong>
                <p>Regular updates with new features and improvements</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section glass">
          <div className="section-icon">🌟</div>
          <h2>Our Commitment</h2>
          <p>
            We're committed to continuous improvement and innovation. Our team works tirelessly 
            to integrate the latest AI advancements, gather user feedback, and refine our tools 
            to ensure they meet the evolving needs of modern professionals. Your success is our 
            success, and we're here to support your journey every step of the way.
          </p>
        </section>

        <section className="about-cta">
          <h2>Ready to Transform Your Content?</h2>
          <p>Join thousands of professionals who trust InsightMeter for their content needs</p>
          <button 
            className="btn btn-primary btn-large"
            onClick={() => setActiveTool && setActiveTool('text-analyzer')}
          >
            Get Started Today →
          </button>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
