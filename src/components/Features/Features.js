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
                                <h3>Wealth Management</h3>
                                <p>Comprehensive wealth management solutions designed to preserve and grow your assets through strategic portfolio management.</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-diamond"></i>
                                </div>
                                <h3>Investment Advisory</h3>
                                <p>Expert investment advisory services with deep market insights and personalized strategies for optimal returns.</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-idea"></i>
                                </div>
                                <h3>Capital Solutions</h3>
                                <p>Flexible capital solutions and financial planning to support your business growth and personal financial goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;