import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/chatPage.css';

function ChatMessage({ message, isLast }) {
  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current && isLast) {
      gsap.fromTo(
        messageRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
      );
    }
  }, [isLast]);

  const isUser = message.role === 'user';

  return (
    <div 
      className={`chat-message ${isUser ? 'user-message' : 'ai-message'}`}
      ref={messageRef}
    >
      <div className="message-avatar">
        {isUser ? '👤' : '🤖'}
      </div>
      <div className="message-content-wrapper">
        <div className="message-bubble">
          <p className="message-text">{message.text}</p>
        </div>
        <span className="message-time">{message.time}</span>
      </div>
    </div>
  );
}

export default ChatMessage;
