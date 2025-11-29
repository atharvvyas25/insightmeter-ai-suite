import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import '../styles/chat.css';

function ChatBubble({ message, type = 'ai', typing = false }) {
  const bubbleRef = useRef(null);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(typing);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      bubbleRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' }
    );
  }, []);

  useEffect(() => {
    if (typing && message) {
      setIsTyping(true);
      let index = 0;
      const interval = setInterval(() => {
        if (index < message.length) {
          setDisplayedText(message.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    } else {
      setDisplayedText(message);
    }
  }, [message, typing]);

  return (
    <div className={`chat-bubble ${type}`} ref={bubbleRef}>
      <div className="bubble-avatar">
        {type === 'ai' ? '🤖' : '👤'}
      </div>
      <div className="bubble-content">
        <div className="bubble-message">
          {displayedText}
          {isTyping && <span className="typing-cursor">|</span>}
        </div>
      </div>
    </div>
  );
}

export default ChatBubble;
