import React from 'react'
import abimg from '../../images/about/img-2.jpg'
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
                            <p>Vermont Capital Partners is an emerging Investment Company based in Harare and Cape Town. We deliver strategic investment solutions, investment management, and capital advisory services, specializing in building and managing diversified portfolios across multiple high-growth sectors in Southern Africa, mainly focused on Zimbabwe and Zambia.</p>
                            <h5>Phone: +27 68 804 3460, Email: info@vermontcapitalpartners.com</h5>
                            <h5>Zimbabwe Office: 59 Ridgeway North, Highlands, Harare, Zimbabwe | Phone: +263718911411</h5>
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