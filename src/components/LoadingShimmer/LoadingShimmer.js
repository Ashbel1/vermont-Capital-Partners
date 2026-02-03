import React from 'react';
import './LoadingShimmer.css';

const LoadingShimmer = () => {
    return (
        <div className="loading-shimmer-container">
            <div className="shimmer-wrapper">
                {/* Header Shimmer */}
                <div className="shimmer-header">
                    <div className="shimmer-logo shimmer-box"></div>
                    <div className="shimmer-nav">
                        <div className="shimmer-box shimmer-nav-item"></div>
                        <div className="shimmer-box shimmer-nav-item"></div>
                        <div className="shimmer-box shimmer-nav-item"></div>
                        <div className="shimmer-box shimmer-nav-item"></div>
                    </div>
                </div>

                {/* Hero Section Shimmer */}
                <div className="shimmer-hero">
                    <div className="shimmer-hero-content">
                        <div className="shimmer-box shimmer-title"></div>
                        <div className="shimmer-box shimmer-subtitle"></div>
                        <div className="shimmer-box shimmer-subtitle-short"></div>
                        <div className="shimmer-box shimmer-button"></div>
                    </div>
                </div>

                {/* Content Cards Shimmer */}
                <div className="shimmer-content">
                    <div className="shimmer-cards">
                        <div className="shimmer-card">
                            <div className="shimmer-box shimmer-card-image"></div>
                            <div className="shimmer-box shimmer-card-title"></div>
                            <div className="shimmer-box shimmer-card-text"></div>
                            <div className="shimmer-box shimmer-card-text-short"></div>
                        </div>
                        <div className="shimmer-card">
                            <div className="shimmer-box shimmer-card-image"></div>
                            <div className="shimmer-box shimmer-card-title"></div>
                            <div className="shimmer-box shimmer-card-text"></div>
                            <div className="shimmer-box shimmer-card-text-short"></div>
                        </div>
                        <div className="shimmer-card">
                            <div className="shimmer-box shimmer-card-image"></div>
                            <div className="shimmer-box shimmer-card-title"></div>
                            <div className="shimmer-box shimmer-card-text"></div>
                            <div className="shimmer-box shimmer-card-text-short"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingShimmer;
