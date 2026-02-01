import React from 'react'

const Features = (props) => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="feature-grids clearfix">
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-sheriff"></i>
                                </div>
                                <h3>Hardware & Software Distribution</h3>
                                <p>Reliable supply of laptops, desktops, servers, accessories, networking, and enterprise software across Africa.</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-diamond"></i>
                                </div>
                                <h3>Enterprise Platforms</h3>
                                <p>Azure, AWS, Microsoft 365, virtualization, and licensing tailored for enterprise-scale deployments.</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-idea"></i>
                                </div>
                                <h3>Storage, Security & Support</h3>
                                <p>Storage, backup, security, and lifecycle support to keep enterprise environments secure and resilient.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;