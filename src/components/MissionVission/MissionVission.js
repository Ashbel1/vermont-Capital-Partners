import React from "react";
import abimg1 from '../../images/slider/one.jpg'
import abimg2 from '../../images/slider/one.jpg'
import abimg3 from '../../images/slider/one.jpg'
import { AnimatedSection, FadeInSection } from '../AnimatedSection'


const MissionVission = () => {
    return (
        <section className="mission-vision-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <FadeInSection delay={0.1}>
                            <div className="title-area">
                                <h2>Vermont Capital Partners drives sustainable growth and value creation through strategic investments in automotive trading, infrastructure development, financial services, and technology solutions across South Africa.</h2>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="mission-vision-grids clearfix">
                            <AnimatedSection direction="left" delay={0.2}>
                                <div className="grid">
                                    <div className="img-holder">
                                        <img src={abimg1} alt="" />
                                    </div>
                                    <h3>Our Mission</h3>
                                    <p>Empower clients with strategic investment solutions, comprehensive investment management, and capital advisory services that create sustainable financial success and lasting value.</p>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection direction="up" delay={0.3}>
                                <div className="grid">
                                    <div className="img-holder">
                                        <img src={abimg2} alt="" />
                                    </div>
                                    <h3>Our Vision</h3>
                                    <p>Be the most trusted investment and investment management partner for individuals and organizations building financial prosperity across South Africa.</p>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection direction="right" delay={0.4}>
                                <div className="grid">
                                    <div className="img-holder">
                                        <img src={abimg3} alt="" />
                                    </div>
                                    <h3>Our Approach</h3>
                                    <p>We combine market expertise, portfolio diversification, and strategic partnerships to provide end-to-end financial solutions from planning to wealth optimization.</p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MissionVission;