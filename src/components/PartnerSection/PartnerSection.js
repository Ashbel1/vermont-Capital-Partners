import React from "react";
import { Link } from 'react-router-dom'


const PartnerSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const partnerFeatures = [
        {
            icon: 'flaticon-diamond',
            title: 'Strategic Growth',
            color: '#c5a47e'
        },
        {
            icon: 'flaticon-stats',
            title: 'Market Expertise',
            color: '#8b7355'
        },
        {
            icon: 'flaticon-idea',
            title: 'Innovation Focus',
            color: '#a68968'
        },
        {
            icon: 'flaticon-sheriff',
            title: 'Trusted Partnership',
            color: '#b8956a'
        }
    ];

    return (
        <section className="cta-with-partners">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s2">
                            <span>Partner with Vermont Capital</span>
                            <h2>Invest in Growth,<br/>Innovation & Excellence</h2>
                        </div>
                        <div className="cta-text">
                            <p>Vermont Capital Partners connects visionary investors with exceptional opportunities across diverse sectors. Through strategic portfolio management, comprehensive wealth advisory, and deep market expertise, we drive sustainable growth and create lasting value across South Africa.</p>
                            <Link onClick={ClickHandler} to="/contact" className="theme-btn-s2">Get In Touch</Link>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <div className="partner-grids clearfix">
                            {partnerFeatures.map((feature, index) => (
                                <div className="grid" key={index}>
                                    <div className="icon-holder" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '30px 20px',
                                        height: '100%',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <i className={`fi ${feature.icon}`} style={{
                                            fontSize: '48px',
                                            color: feature.color,
                                            marginBottom: '15px',
                                            transition: 'all 0.3s ease'
                                        }}></i>
                                        <h6 style={{
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            color: '#2c2c2c',
                                            margin: '0',
                                            textAlign: 'center',
                                            lineHeight: '1.4'
                                        }}>{feature.title}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;
