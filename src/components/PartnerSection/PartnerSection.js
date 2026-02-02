import React from "react";
import { Link } from 'react-router-dom'
import pimg1 from '../../images/slider/one.jpg'
import pimg2 from '../../images/slider/one.jpg'
import pimg3 from '../../images/slider/one.jpg'
import pimg4 from '../../images/slider/one.jpg'


const PartnerSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
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
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={pimg1} alt=""/>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={pimg2} alt=""/>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={pimg3} alt=""/>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={pimg4} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;
