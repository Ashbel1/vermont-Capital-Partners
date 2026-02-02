import React from 'react'
import { Link } from 'react-router-dom'
import abimg from '../../images/about/ab.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const About3 = (props) => {
    return (
        <section className="wpo-about-section-s3 section-padding">
            <div className="container">
                <div className="wpo-about-inner">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-wrap">
                                <div className="wpo-about-img">
                                    <div className="inner-img">
                                        <img src={abimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <h4>Welcome To Vermont Capital Partners</h4>
                                <h2>Your trusted investment and wealth management partner.</h2>
                                <p>Vermont Capital Partners is a premier investment and financial advisory firm based in Cape Town, South Africa. We deliver strategic investment solutions, wealth management, and capital advisory services, specializing in building and managing diversified portfolios across multiple high-growth sectors.</p>
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
                    </div>
                    <div className="shape-ab"></div>
                </div>
            </div>
        </section>
    )
}

export default About3;