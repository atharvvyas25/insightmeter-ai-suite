import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/cards.css';

function ScoreCard({ score, label }) {
  const scoreRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Animate score number
    gsap.fromTo(
      scoreRef.current,
      { textContent: 0 },
      {
        textContent: score,
        duration: 1.5,
        ease: 'power2.out',
        snap: { textContent: 1 },
        onUpdate: function() {
          scoreRef.current.textContent = Math.round(this.targets()[0].textContent);
        }
      }
    );

    // Animate circle progress
    const circumference = 2 * Math.PI * 45; // radius = 45
    const offset = circumference - (score / 100) * circumference;
    
    gsap.fromTo(
      circleRef.current,
      { strokeDashoffset: circumference },
      { 
        strokeDashoffset: offset,
        duration: 1.5,
        ease: 'power2.out'
      }
    );
  }, [score]);

  // Determine color based on score
  const getColor = () => {
    if (score >= 80) return '#10b981'; // Green
    if (score >= 60) return '#3b82f6'; // Blue
    if (score >= 40) return '#f59e0b'; // Orange
    return '#ef4444'; // Red
  };

  const circumference = 2 * Math.PI * 45;

  return (
    <div className="score-card">
      <svg className="score-circle" width="120" height="120">
        <circle
          className="score-circle-bg"
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="8"
        />
        <circle
          ref={circleRef}
          className="score-circle-progress"
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke={getColor()}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div className="score-content">
        <div className="score-value">
          <span ref={scoreRef}>0</span>
          <span className="score-max">/100</span>
        </div>
        <div className="score-label">{label}</div>
      </div>
    </div>
  );
}

export default ScoreCard;
