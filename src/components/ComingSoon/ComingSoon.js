import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ComingSoon.css'

const ComingSoon = () => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <section className="coming-soon-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="coming-soon-content">
                            <button 
                                onClick={handleGoBack} 
                                className="back-button"
                                aria-label="Go back"
                            >
                                <svg 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                                </svg>
                                Back
                            </button>
                            
                            <div className="coming-soon-icon">
                                <svg 
                                    width="120" 
                                    height="120" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                </svg>
                            </div>
                            
                            <h2 className="coming-soon-title">Coming Soon</h2>
                            <p className="coming-soon-message">
                                We're working hard to bring you this feature. 
                                It will be available soon!
                            </p>
                            
                            <div className="coming-soon-pulse">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComingSoon
