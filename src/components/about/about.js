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
                                <h2>Building Wealth Through Strategic Investment in Southern Africa</h2>
                            </div>
                            <div className="about-content">
                                <h4>About Vermont Capital Partners</h4>
                                <p>Vermont Capital Partners is an emerging Investment Company based in Harare and Cape Town. We specialize in strategic investment management, capital advisory, and financial planning. Our mission is to deliver exceptional returns while building long-term partnerships with our clients. With deep expertise in the Southern Africa market, mainly focused on Zimbabwe and Zambia, and international investment opportunities, we provide personalized solutions tailored to your financial goals.</p>
                                
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;