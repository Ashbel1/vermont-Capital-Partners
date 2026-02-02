import React, { useState, useRef, useEffect, useCallback } from 'react';
import './ChatBot.css';

const ChatBot = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [dragDistance, setDragDistance] = useState(0);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [userInput, setUserInput] = useState('');
    const chatBotRef = useRef(null);
    const messagesEndRef = useRef(null);

    const botResponses = {
        greeting: "Hello! 👋 Welcome to Vermont Capital Partners. I'm your virtual assistant. How can I help you today?",
        services: "We offer three main services:\n\n🚗 Automotive Trading - Premium vehicles and equipment\n🏗️ Toughrock Investments - Infrastructure & financing\n💻 Digiroc Technologies - Enterprise IT solutions\n\nWhich would you like to know more about?",
        automotive: "Our Automotive Trading division includes:\n• TRES Equipment - Premium PUMA lubricants and spare parts\n• TRES AUTO GROUP - New & used vehicles, heavy machinery\n\nWould you like to speak with our automotive specialists?",
        toughrock: "Toughrock Investments offers:\n• Infrastructure development & construction\n• Microfinance & business loans\n• Payroll & financial services\n\nOur team can help with financing solutions. Interested?",
        digiroc: "Digiroc Technologies provides:\n• Enterprise hardware & software distribution\n• Cloud infrastructure & data analytics\n• Business intelligence & market research\n\nShall I connect you with our tech team?",
        contact: "Great! You can reach us at:\n📞 +263718911411\n📧 info@vermontcapitalpartners.com\n\nOr would you like to schedule a call?",
        default: "That's an interesting question! For detailed information, I'd recommend speaking with our expert team. Would you like me to connect you with a specialist?",
        goodbye: "Thank you for chatting with Vermont Capital Partners! Have a wonderful day! 🌟"
    };

    useEffect(() => {
        // Set initial position (top right)
        const updatePosition = () => {
            setPosition({
                x: window.innerWidth - 450,
                y: 100
            });
        };
        
        updatePosition();
        window.addEventListener('resize', updatePosition);
        
        return () => window.removeEventListener('resize', updatePosition);
    }, []);

    useEffect(() => {
        // Auto scroll to bottom when new messages arrive
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleMouseDown = (e) => {
        // Allow dragging from chat header, prevent from messages/input area
        if (e.target.closest('.chat-messages') || e.target.closest('.chat-input-form')) return;
        
        setIsDragging(true);
        setDragDistance(0);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleMouseMove = useCallback((e) => {
        if (isDragging) {
            const newX = e.clientX - dragStart.x;
            const newY = e.clientY - dragStart.y;
            const distance = Math.sqrt(Math.pow(newX - position.x, 2) + Math.pow(newY - position.y, 2));
            setDragDistance(distance);
            setPosition({
                x: newX,
                y: newY
            });
        }
    }, [isDragging, dragStart.x, dragStart.y, position.x, position.y]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleClick = () => {
        // Only open chat if it wasn't a drag (distance less than 5px)
        if (dragDistance < 5 && !isChatOpen) {
            setIsChatOpen(true);
            // Send initial greeting after a brief delay
            setTimeout(() => {
                addBotMessage(botResponses.greeting);
            }, 500);
        }
        setDragDistance(0);
    };

    const addBotMessage = (text) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages(prev => [...prev, { text, sender: 'bot', timestamp: new Date() }]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000); // Random delay for realistic typing
    };

    const addUserMessage = (text) => {
        setMessages(prev => [...prev, { text, sender: 'user', timestamp: new Date() }]);
    };

    const getBotResponse = (userMessage) => {
        const msg = userMessage.toLowerCase();
        
        if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
            return botResponses.greeting;
        } else if (msg.includes('service') || msg.includes('what do you do') || msg.includes('offer')) {
            return botResponses.services;
        } else if (msg.includes('automotive') || msg.includes('car') || msg.includes('vehicle') || msg.includes('tres')) {
            return botResponses.automotive;
        } else if (msg.includes('toughrock') || msg.includes('infrastructure') || msg.includes('loan') || msg.includes('finance')) {
            return botResponses.toughrock;
        } else if (msg.includes('digiroc') || msg.includes('tech') || msg.includes('it') || msg.includes('software') || msg.includes('cloud')) {
            return botResponses.digiroc;
        } else if (msg.includes('contact') || msg.includes('call') || msg.includes('email') || msg.includes('reach')) {
            return botResponses.contact;
        } else if (msg.includes('bye') || msg.includes('thank') || msg.includes('thanks')) {
            return botResponses.goodbye;
        } else {
            return botResponses.default;
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;
        
        addUserMessage(userInput);
        const response = getBotResponse(userInput);
        setUserInput('');
        
        setTimeout(() => {
            addBotMessage(response);
        }, 500);
    };

    const handleCloseChat = () => {
        setIsChatOpen(false);
        setMessages([]);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    return (
        <>
            <div
                ref={chatBotRef}
                className={`chatbot-container ${isDragging ? 'dragging' : ''} ${isExpanded ? 'expanded' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
                onMouseDown={handleMouseDown}
                onMouseEnter={() => !isChatOpen && setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
            >
                {!isChatOpen ? (
                    <>
                        <div className="chatbot-icon" onClick={handleClick}>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="copilot-icon"
                            >
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                                    fill="url(#gradient1)"
                                />
                                <path
                                    d="M12 6C9.79 6 8 7.79 8 10C8 11.86 9.28 13.41 11 13.86V16C11 16.55 11.45 17 12 17C12.55 17 13 16.55 13 16V13.86C14.72 13.41 16 11.86 16 10C16 7.79 14.21 6 12 6Z"
                                    fill="white"
                                />
                                <circle cx="10" cy="10" r="1" fill="#333" />
                                <circle cx="14" cy="10" r="1" fill="#333" />
                                <path
                                    d="M12 12C11.45 12 11 11.55 11 11H13C13 11.55 12.55 12 12 12Z"
                                    fill="#333"
                                />
                                <defs>
                                    <linearGradient id="gradient1" x1="2" y1="2" x2="22" y2="22">
                                        <stop offset="0%" stopColor="#667eea" />
                                        <stop offset="100%" stopColor="#764ba2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="pulse-ring"></div>
                            <div className="pulse-ring-2"></div>
                        </div>
                        
                        <div className="chatbot-tooltip">
                            <div className="tooltip-header">
                                <div className="status-dot"></div>
                                <span>We're Online!</span>
                            </div>
                            <p>Talk to our active tech support team</p>
                            <div className="tooltip-arrow"></div>
                        </div>
                    </>
                ) : (
                    <div className="chat-window">
                        <div className="chat-header">
                            <div className="chat-header-info">
                                <div className="avatar">
                                    <svg viewBox="0 0 24 24" fill="white">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
                                        <path d="M12 6C9.79 6 8 7.79 8 10C8 11.86 9.28 13.41 11 13.86V16C11 16.55 11.45 17 12 17C12.55 17 13 16.55 13 16V13.86C14.72 13.41 16 11.86 16 10C16 7.79 14.21 6 12 6Z" fill="#667eea"/>
                                        <circle cx="10" cy="10" r="1"/><circle cx="14" cy="10" r="1"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4>Vermont Support</h4>
                                    <span className="status-text"><div className="status-dot-small"></div> Online</span>
                                </div>
                            </div>
                            <button className="close-chat" onClick={handleCloseChat}>×</button>
                        </div>
                        
                        <div className="chat-messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender}`}>
                                    <div className="message-content">
                                        {msg.text.split('\n').map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                {i < msg.text.split('\n').length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <span className="message-time">
                                        {msg.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="message bot typing-indicator">
                                    <div className="message-content">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                        
                        <form className="chat-input-form" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Type your message..."
                                className="chat-input"
                            />
                            <button type="submit" className="send-button">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
};

export default ChatBot;
