import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { callAI } from '../api';
import '../styles/chatPage.css';

const STORAGE_KEY = 'insightmeter_chat_history';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Load chat history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem(STORAGE_KEY);
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        setMessages(parsed);
      } catch (error) {
        console.error('Failed to load chat history:', error);
      }
    }

    // Entrance animation
    if (chatContainerRef.current) {
      gsap.fromTo(
        chatContainerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    }
  }, []);

  // Save to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    // Create user message
    const userMessage = {
      id: Date.now(),
      role: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };

    // Add user message to state
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Prepare conversation history for AI
      const conversationHistory = [
        ...messages.map(msg => ({
          role: msg.role,
          content: msg.text
        })),
        {
          role: 'user',
          content: text.trim()
        }
      ];

      // Call AI with full conversation context
      const aiResponse = await callAIChat(conversationHistory);

      // Create AI message
      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        text: aiResponse,
        time: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };

      // Add AI message to state
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('AI Error:', error);
      
      // Add error message
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        text: 'Sorry, I encountered an error. Please check your API key and try again.',
        time: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const callAIChat = async (conversationHistory) => {
    // Use the existing callAI function but adapted for chat
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = "https://api.groq.com/openai/v1/chat/completions";
    const MODEL = "llama-3.3-70b-versatile";

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: 'system',
            content: 'You are InsightMeter AI, a helpful and friendly AI assistant. Provide clear, concise, and helpful responses.'
          },
          ...conversationHistory
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error('AI request failed');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  };

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear all chat history?')) {
      setMessages([]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div className="chat-page" ref={chatContainerRef}>
      <div className="chat-header">
        <div className="chat-header-content">
          <h2 className="chat-title gradient-text">AI Chat Assistant</h2>
          <p className="chat-subtitle">Ask me anything!</p>
        </div>
        {messages.length > 0 && (
          <button 
            className="btn-clear-history"
            onClick={handleClearHistory}
            title="Clear chat history"
          >
            🗑️ Clear
          </button>
        )}
      </div>

      <div className="chat-messages-container">
        {messages.length === 0 ? (
          <div className="chat-empty-state">
            <div className="empty-icon">💬</div>
            <h3>Start a Conversation</h3>
            <p>Ask me anything about writing, analysis, or get help with your content!</p>
            <div className="suggested-prompts">
              <button 
                className="prompt-chip"
                onClick={() => handleSendMessage('Help me improve my writing')}
              >
                Help me improve my writing
              </button>
              <button 
                className="prompt-chip"
                onClick={() => handleSendMessage('Explain AI to me')}
              >
                Explain AI to me
              </button>
              <button 
                className="prompt-chip"
                onClick={() => handleSendMessage('Give me writing tips')}
              >
                Give me writing tips
              </button>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message, index) => (
              <ChatMessage 
                key={message.id} 
                message={message}
                isLast={index === messages.length - 1}
              />
            ))}
            {isTyping && (
              <div className="typing-indicator-container">
                <div className="typing-bubble">
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="typing-text">AI is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <ChatInput onSend={handleSendMessage} disabled={isTyping} />
    </div>
  );
}

export default ChatPage;
