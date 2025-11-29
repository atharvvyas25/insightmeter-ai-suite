import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/cards.css';

function StatCard({ icon, value, label, color = '#3b82f6' }) {
  const cardRef = useRef(null);
  const valueRef = useRef(null);

  useEffect(() => {
    // Card entrance
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30, rotateX: -15 },
      { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        duration: 0.6, 
        ease: 'power3.out'
      }
    );

    // Counter animation
    if (typeof value === 'number') {
      gsap.fromTo(
        valueRef.current,
        { textContent: 0 },
        {
          textContent: value,
          duration: 1.5,
          ease: 'power2.out',
          snap: { textContent: 1 },
          onUpdate: function() {
            valueRef.current.textContent = Math.round(this.targets()[0].textContent);
          }
        }
      );
    }
  }, [value]);

  // 3D tilt effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return (
    <div 
      className="stat-card glass"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ '--card-color': color }}
    >
      <div className="stat-icon">{icon}</div>
      <div className="stat-value" ref={valueRef}>
        {typeof value === 'number' ? 0 : value}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default StatCard;
