import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { askAI } from '../services/aiService';

const AIQuestionnaire = () => {
    const [messages, setMessages] = useState([
        { id: 1, type: 'ai', text: "Hello! I'm the AI Assistant. I can help you understand my services, potential costs, or stack. What would you like to know?" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), type: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            const response = await askAI(input);
            const aiMsg = { id: Date.now() + 1, type: 'ai', text: response };
            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error("AI Error", error);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="ai-container">
            <div className="chat-interface">
                <div className="chat-header">
                    <Bot className="text-accent" />
                    <div>
                        <h3>AI Consultant</h3>
                        <span className="status-dot">Online</span>
                    </div>
                </div>

                <div className="messages-area">
                    <AnimatePresence>
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`message-wrapper ${msg.type}`}
                            >
                                <div className="message-bubble">
                                    {msg.text}
                                </div>
                                <div className="message-icon">
                                    {msg.type === 'ai' ? <Bot size={16} /> : <User size={16} />}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {isTyping && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="typing-indicator">
                            <Loader2 className="animate-spin" size={16} /> AI is thinking...
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSubmit} className="input-area">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about rates, skills, or availability..."
                    />
                    <button type="submit" disabled={!input.trim() || isTyping}>
                        <Send size={20} />
                    </button>
                </form>
            </div>

            <style>{`
        .ai-container {
          padding-top: 100px;
          min-height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .chat-interface {
          width: 100%;
          max-width: 600px;
          height: 600px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }

        .chat-header {
          padding: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.02);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .chat-header h3 {
          font-size: 1.1rem;
          margin-bottom: 0.1rem;
        }

        .status-dot {
          font-size: 0.75rem;
          color: #22c55e;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .status-dot::before {
          content: '';
          width: 6px;
          height: 6px;
          background: currentColor;
          border-radius: 50%;
        }

        .text-accent { color: var(--primary); }

        .messages-area {
          flex: 1;
          padding: 1.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .message-wrapper {
          display: flex;
          gap: 0.75rem;
          max-width: 80%;
          align-items: flex-end;
        }

        .message-wrapper.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .message-bubble {
          padding: 1rem;
          border-radius: 1rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .message-wrapper.ai .message-bubble {
          background: var(--bg-tertiary);
          border-top-left-radius: 0;
          color: var(--text-primary);
        }

        .message-wrapper.user .message-bubble {
          background: var(--primary);
          color: white;
          border-bottom-right-radius: 0;
        }

        .message-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
        }

        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin-left: 1rem;
        }

        .animate-spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .input-area {
          padding: 1rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          gap: 0.75rem;
          background: var(--bg-primary);
        }

        .input-area input {
          flex: 1;
          background: var(--bg-tertiary);
          border: 1px solid transparent;
          padding: 0.8rem 1.2rem;
          border-radius: 999px;
          color: white;
          font-family: inherit;
        }

        .input-area input:focus {
          outline: none;
          border-color: var(--primary);
        }

        .input-area button {
          width: 44px;
          height: 44px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }

        .input-area button:disabled {
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          cursor: not-allowed;
        }
        
        .input-area button:not(:disabled):hover {
          background: var(--primary-hover);
        }
      `}</style>
        </div>
    );
};

export default AIQuestionnaire;
