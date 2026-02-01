import React from 'react'

const WorkProcess = (props) => {
    return (
        <section className="work-process-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="section-title">
                            <span>Our work process</span>
                            <h3>From requirements to rollout, Digiroc delivers end-to-end IT distribution and enterprise solutions that keep organizations secure, connected, and productive.</h3>
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
                                <h3>01. Assess & Design</h3>
                                <p>We understand your requirements and design the right enterprise architecture and stack.</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-diamond"></i>
                                </div>
                                <h3>02. Source & Supply</h3>
                                <p>Procure, license, and distribute hardware and software through trusted vendor networks.</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-sheriff"></i>
                                </div>
                                <h3>03. Deploy & Support</h3>
                                <p>Deploy, secure, and support infrastructure with lifecycle services and monitoring.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProcess;