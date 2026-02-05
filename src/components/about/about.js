import React from 'react'
import abimg from '../../images/about/img-1.jpg'
import VideoModal from '../ModalVideo/VideoModal'
import { AnimatedSection } from '../AnimatedSection'


const About = (props) => {
    return (
        <section className="about-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 order-lg-1 order-2 col-12">
                        <AnimatedSection direction="left" delay={0.2}>
                            <div className="img-holder">
                                <img src={abimg} alt="" />
                                <div className="experience-text">
                                    Trusted Financial <span>Partners</span>
                                </div>
                                <VideoModal />
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className="col col-lg-6 order-lg-2 order-1 col-12">
                        <AnimatedSection direction="right" delay={0.2}>
                            <div className="section-title-s2">
                                <span>About Vermont Capital Partners</span>
                                <h2>Building Wealth Through Strategic Investment</h2>
                            </div>
                            <div className="about-content">
                                <h4>Cape Town's Premier Investment & Capital Advisory Firm</h4>
                                <p>Vermont Capital Partners is a leading financial services firm based in Cape Town, South Africa. We specialize in strategic investment management, capital advisory, investment management, and financial planning. Our mission is to deliver exceptional returns while building long-term partnerships with our clients. With deep expertise in the South African market and international investment opportunities, we provide personalized solutions tailored to your financial goals.</p>
                                <h5>Phone: +27 68 804 3460 | Email: info@vermontcapitalpartners.com</h5>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;