import React from 'react'
import abimg from '../../images/slider/one.jpg'
import VideoModal from '../ModalVideo/VideoModal'


const About2 = (props) => {
    return (
        <section className={`about-section section-padding ${props.abClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s2">
                            <span>About Vermont Capital Partners</span>
                            <h2>Investment & Wealth<br />Management Excellence</h2>
                        </div>
                        <div className="about-content">
                            <h4>Strategic Vision. Exceptional Results.</h4>
                            <p>Vermont Capital Partners is a premier investment and financial advisory firm based in Cape Town, South Africa. We deliver strategic investment solutions, wealth management, and capital advisory services, specializing in building and managing diversified portfolios across multiple high-growth sectors.</p>
                            <h5>Phone: +27 68 804 3460, Email: info@vermontcapitalpartners.com</h5>
                        </div>
                    </div>
                    <div className="col col-lg-6  col-12">
                        <div className="img-holder">
                            <img src={abimg} alt="" />
                            <div className="experience-text">
                                Enterprise-Ready <span>IT Distribution</span>
                            </div>
                            <VideoModal />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;