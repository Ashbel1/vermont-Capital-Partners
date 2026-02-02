import React from "react";
import { Link } from 'react-router-dom'


const Hero3 = () => {
    return (

        <section className="hero-slider hero-style-1 static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div data-swiper-parallax="300" className="slide-title">
                            <h2>Premier Investment & Wealth Management Partner</h2>
                        </div>
                        <div data-swiper-parallax="400" className="slide-text">
                            <p>Empowering financial growth through strategic investment solutions, comprehensive wealth management, and capital advisory services across South Africa.</p>
                        </div>
                        <div className="clearfix"></div>
                        <div data-swiper-parallax="500" className="slide-btns">
                            <Link to="/contact" className="theme-btn">Discover More<span></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero3;