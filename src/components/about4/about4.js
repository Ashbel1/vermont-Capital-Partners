import React from 'react'
import { Link } from 'react-router-dom'
import abimg from '../../images/slider/one.jpg'

const ClickHandler = (props) => {
    window.scrollTo(10, 0);
}


const About4 = (props) => {
    return (
        <section className="wpo-about-section-s4 section-padding pb-120">
            <div className="container">
                <div className="wpo-about-inner">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <h4>Welcome To Vermont Capital Partners</h4>
                                <h2>Your trusted investment and investment management partner.</h2>
                                <p>Vermont Capital Partners is a premier investment and financial advisory firm based in Cape Town, South Africa. We deliver strategic investment solutions, investment management, and capital advisory services, specializing in building and managing diversified portfolios across multiple high-growth sectors.</p>
                                <div className="text-sub-wrap">
                                    <div className="text-sub-item">
                                        <i className="fi flaticon-tax"></i>
                                        <h5>Comprehensive investment strategies
                                            and portfolio management.</h5>
                                    </div>
                                </div>
                                <Link onClick={ClickHandler} className="theme-btn" to="/services">Our Services</Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-wrap">
                                <div className="wpo-about-img">
                                    <div className="inner-img">
                                        <img src={abimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-ab"></div>
        </section>
    )
}

export default About4;