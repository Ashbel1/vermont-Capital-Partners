import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom'
import Services from '../../api/service'
import ServiceTab from './ServiceTab';
import Logo from '../../images/vermontlogo.png'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}


const ServiceSinglePage = (props) => {

    const { slug } = useParams()

    const ServiceDetails = Services.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar hclass={'header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={ServiceDetails.sTitle} pagesub={'Services'} />

            <section className="service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-9 order-lg-2 order-1 col-12">
                            <div className="service-single-content">
                                <div className="service-pic">
                                    <img src={ServiceDetails.sImg} alt="" />
                                </div>
                                <h2>{ServiceDetails.sTitle}</h2>
                                <p>{ServiceDetails.fullDescription || ServiceDetails.description}</p>
                                <p>{ServiceDetails.fullDescription2 || ServiceDetails.des2}</p>

                                <h3>{ServiceDetails.mainTitle || 'Service Capabilities'}</h3>
                                <p>{ServiceDetails.des3}</p>
                                <div className="service-features">
                                    <ul>
                                        {ServiceDetails.serviceFeatures && ServiceDetails.serviceFeatures.slice(0, 3).map((feature, idx) => (
                                            <li key={idx}><i className="ti-check-box"></i>{feature}</li>
                                        ))}
                                    </ul>
                                    <ul>
                                        {ServiceDetails.serviceFeatures && ServiceDetails.serviceFeatures.slice(3, 6).map((feature, idx) => (
                                            <li key={idx}><i className="ti-check-box"></i>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <ServiceTab serviceSlug={ServiceDetails.slug} />

                                <div className="request-service">
                                    <h3>Request this service</h3>
                                    <form method="post" onSubmit={SubmitHandler}>
                                        <div>
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Your Name*" />
                                        </div>
                                        <div>
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email*" />
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone*" />
                                        </div>
                                        <div className="submit-area">
                                            <button type="submit">Submit Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 order-lg-1 order-2 col-12">
                            <div className="service-sidebar">
                                <div className="widget service-list-widget">
                                    <ul>
                                        <li className="current"><Link to="/services">All Service</Link></li>
                                        {Services.map((service, srv) => (
                                            <li key={srv}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="widget service-features-widget">
                                    <h3>Our Service Features</h3>
                                    <ol>
                                        {ServiceDetails.capabilities && ServiceDetails.capabilities.slice(0, 4).map((capability, idx) => (
                                            <li key={idx}>{capability}</li>
                                        ))}
                                    </ol>
                                </div>
                                <div className="widget download-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to='/contact'><i className="ti-file"></i>Download Brochure</Link></li>
                                    </ul>
                                </div>
                                <div className="widget contact-widget">
                                    <div>
                                        <h4>Need help?</h4>
                                        <p>Contact Vermont Capital Partners to discuss your {ServiceDetails.sTitle} needs and explore how we can support your business goals.</p>
                                        <p>Phone: +263718911411</p>
                                        <p>Email: info@vermontcapitalpartners.com</p>
                                        <Link onClick={ClickHandler} to='/contact'>Contact With Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;
