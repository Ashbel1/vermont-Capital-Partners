import React from 'react'

const Skill = (props) => {
    return (
        <section className="experience-section">
            <div className="content-area">
                <div className="left-col"></div>
                <div className="right-col">
                    <h2>Why Vermont Capital Partners is the <br />best choice for strategic investment</h2>
                    <p>Vermont Capital Partners combines deep market expertise with a diversified portfolio of industry-leading companies. From automotive trading and infrastructure development to financial services and technology solutions, we deliver comprehensive value across multiple sectors in South Africa.</p>
                    <ul>
                        <li><i className="ti-check"></i>Diversified portfolio across automotive, infrastructure & technology</li>
                        <li><i className="ti-check"></i>Strategic investment management and capital advisory</li>
                        <li><i className="ti-check"></i>Financial services and microfinance through partner companies</li>
                        <li><i className="ti-check"></i>Comprehensive business solutions and ongoing support</li>
                    </ul>
                    <div className="skills">
                        <div className="skill">
                            <h6>Distribution</h6>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "95%" }}></div>
                                <span className="progress-value">95%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <h6>Cloud Platforms</h6>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "92%" }}></div>
                                <span className="progress-value">92%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <h6>Infrastructure</h6>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "90%" }}></div>
                                <span className="progress-value">90%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <h6>Support & Lifecycle</h6>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "88%" }}></div>
                                <span className="progress-value">88%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <section className="wpo-skill-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="wpo-skill-text">
                            <h5>Our Professional Skill’s</h5>
                            <h2>Professional Excellence of <span>Vermont Capital Partners.</span></h2>
                            <p>Vermont Capital Partners brings together exceptional expertise across investment management, automotive trading, infrastructure development, financial services, and technology solutions. Our portfolio companies including TRES AUTO GROUP, Toughrock Investments, and Digiroc Technologies enable us to provide comprehensive strategic solutions and deliver outstanding value to partners and investors across South African markets.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-12 col-12">
                        <div className="wpo-skill-progress">
                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Financial Investment</h5>
                                <div className="progress">
                                    <Fade left>
                                        <div className="progress-bar"
                                            data-wow-delay=".3s" role="progressbar" style={{ width: `${75}%` }} aria-valuenow="90"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </Fade>
                                </div>
                                <span className="progress-number">75%</span>
                            </div>

                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Business Analysis</h5>
                                <div className="progress">
                                    <Fade left>
                                        <div className="progress-bar" data-wow-duration="0.7s"
                                            data-wow-delay=".3s" role="progressbar" style={{ width: `${80}%` }} aria-valuenow="75"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </Fade>
                                </div>
                                <span className="progress-number">80%</span>
                            </div>

                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Tax Management</h5>
                                <div className="progress">
                                    <Fade left>
                                        <div className="progress-bar" data-wow-duration="0.9s"
                                            data-wow-delay=".3s" role="progressbar" style={{ width: `${85}%` }} aria-valuenow="95"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </Fade>
                                </div>
                                <span className="progress-number">85%</span>
                            </div>
                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Financial Advices</h5>
                                <div className="progress">
                                    <Fade left>
                                        <div className="progress-bar" data-wow-duration="1.1s"
                                            data-wow-delay=".3s" role="progressbar" style={{ width: `${95}%` }} aria-valuenow="95"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </Fade>
                                </div>
                                <span className="progress-number">95%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        </section>
    )
}

export default Skill;