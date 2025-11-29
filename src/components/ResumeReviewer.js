import React, { useState } from 'react';
import { reviewResume } from '../api';
import ToolLayout from './ToolLayout';
import ChatBubble from './ChatBubble';
import { useStagger } from '../hooks/useGSAP';
import '../styles/cards.css';

function ResumeReviewer() {
  const [resumeText, setResumeText] = useState('');
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState(null);
  const [error, setError] = useState('');
  
  const resultsRef = useStagger('.score-card-large', 0.15);

  const handleReview = async () => {
    if (!resumeText.trim()) {
      setError('Please enter your resume text');
      return;
    }

    if (resumeText.trim().length < 100) {
      setError('Please enter a more complete resume (at least 100 characters)');
      return;
    }

    setLoading(true);
    setError('');
    setReview(null);
    
    try {
      const result = await reviewResume(resumeText);
      console.log('Resume review result:', result);
      setReview(result);
    } catch (err) {
      setError(err.message || 'Failed to review. Check your API key and try again.');
      console.error('Resume review error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return '#10b981'; // green
    if (score >= 60) return '#f59e0b'; // orange
    return '#ef4444'; // red
  };

  const getScoreLabel = (score) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Needs Work';
  };

  return (
    <ToolLayout
      title="Resume Reviewer"
      description="AI-powered resume analysis with ATS scoring"
    >
      <div className="tool-grid">
        <div className="input-panel glass">
          <textarea
            className="tool-textarea"
            placeholder="Paste your resume text here..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            rows={15}
          />
          <button 
            className="btn btn-primary btn-large"
            onClick={handleReview}
            disabled={loading}
          >
            {loading ? '⏳ Reviewing...' : '📄 Review Resume'}
          </button>
          {error && <div className="error-message">{error}</div>}
        </div>

        {review && (
          <div className="results-panel">
            <h3 className="panel-title">Resume Analysis Results</h3>
            
            {/* Score Cards */}
            <div className="scores-row" ref={resultsRef}>
              <div className="score-card-large glass">
                <div className="score-circle-large">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" className="score-bg" />
                    <circle 
                      cx="50" cy="50" r="45" 
                      className="score-progress"
                      style={{
                        strokeDasharray: `${(review.atsScore || 0) * 2.83} 283`,
                        stroke: getScoreColor(review.atsScore || 0)
                      }}
                    />
                  </svg>
                  <div className="score-text">{review.atsScore || 0}</div>
                </div>
                <div className="score-label">ATS Score</div>
                <div className="score-status" style={{ color: getScoreColor(review.atsScore || 0) }}>
                  {getScoreLabel(review.atsScore || 0)}
                </div>
              </div>

              <div className="score-card-large glass">
                <div className="score-circle-large">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" className="score-bg" />
                    <circle 
                      cx="50" cy="50" r="45" 
                      className="score-progress"
                      style={{
                        strokeDasharray: `${(review.overallRating || 0) * 10 * 2.83} 283`,
                        stroke: getScoreColor((review.overallRating || 0) * 10)
                      }}
                    />
                  </svg>
                  <div className="score-text">{review.overallRating || 0}/10</div>
                </div>
                <div className="score-label">Overall Rating</div>
                <div className="score-status" style={{ color: getScoreColor((review.overallRating || 0) * 10) }}>
                  {getScoreLabel((review.overallRating || 0) * 10)}
                </div>
              </div>
            </div>

            {/* Detailed Results */}
            <div className="chat-results">
              {/* Strengths */}
              {review.strengths && review.strengths.length > 0 && (
                <div className="result-card glass">
                  <h4 className="result-title">✅ Strengths</h4>
                  <ul className="result-list">
                    {review.strengths.map((strength, i) => (
                      <li key={i} className="result-item success">{strength}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Weaknesses */}
              {review.weaknesses && review.weaknesses.length > 0 && (
                <div className="result-card glass">
                  <h4 className="result-title">⚠️ Areas for Improvement</h4>
                  <ul className="result-list">
                    {review.weaknesses.map((weakness, i) => (
                      <li key={i} className="result-item warning">{weakness}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recommendations */}
              {review.recommendations && review.recommendations.length > 0 && (
                <div className="result-card glass">
                  <h4 className="result-title">💡 Recommendations</h4>
                  <ul className="result-list">
                    {review.recommendations.map((rec, i) => (
                      <li key={i} className="result-item info">{rec}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Button */}
              <div className="action-buttons">
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    const report = `Resume Review Report\n\nATS Score: ${review.atsScore}/100\nOverall Rating: ${review.overallRating}/10\n\nStrengths:\n${review.strengths?.map(s => `- ${s}`).join('\n')}\n\nAreas for Improvement:\n${review.weaknesses?.map(w => `- ${w}`).join('\n')}\n\nRecommendations:\n${review.recommendations?.map(r => `- ${r}`).join('\n')}`;
                    navigator.clipboard.writeText(report);
                    alert('Report copied to clipboard!');
                  }}
                >
                  📋 Copy Report
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setReview(null);
                    setResumeText('');
                  }}
                >
                  🔄 Review Another Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

export default ResumeReviewer;
