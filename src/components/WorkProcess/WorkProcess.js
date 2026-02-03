import React from 'react'

const WorkProcess = (props) => {
    return (
        <section className="work-process-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="section-title">
                            <span>Our work process</span>
                            <h3>Vermont Capital Partners delivers strategic investment solutions and exceptional value through our portfolio of industry-leading companies, driving growth and innovation across automotive, infrastructure, finance, and technology sectors in South Africa.</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col col-lg-10 offset-lg-1">
                        <div className="work-process-grids clearfix">
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-idea"></i>
                                </div>
                                <h3>01. Assess & Strategy</h3>
                                <p>We understand your financial goals and design the right investment strategy and portfolio allocation.</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-diamond"></i>
                                </div>
                                <h3>02. Invest & Optimize</h3>
                                <p>Execute strategic investments and manage portfolio diversification through proven financial frameworks.</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-sheriff"></i>
                                </div>
                                <h3>03. Monitor & Grow</h3>
                                <p>Continuous investment management, performance monitoring, and advisory services for sustained growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProcess;