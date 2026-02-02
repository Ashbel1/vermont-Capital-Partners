import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return (
        <section className="contact-pg-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8">
                        <div className="section-title-s3">
                            <span>Contact us</span>
                            <h2>Talk to our enterprise team</h2>
                            <p>Tell us what hardware, software, or cloud solutions you need.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="contact-form">
                            <ContactForm />
                        </div>
                        <div className="contact-info clearfix">
                            <div>
                                <div className="icon">
                                    <i className="ti-email"></i>
                                </div>
                                <h5>Email</h5>
                                <p>info@vermontcapitalpartners.com</p>
                            </div>
                            <div>
                                <div className="icon">
                                    <i className="ti-mobile"></i>
                                </div>
                                <h5>Phone</h5>
                                <p>+27 68 804 3460</p>
                            </div>
                            <div>
                                <div className="icon">
                                    <i className="ti-location-arrow"></i>
                                </div>
                                <h5>Address</h5>
                                <p>Vermont Capital Partners</p>
                                 <p>46 Fairmill, Marais Road</p>
                                  <p>Milnerton, 7441</p>
                                   <p>Cape Town, Western Cape, South Africa</p>
                            </div>
                        </div>

                        <div className="contact-map">
                            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7419285912866!2d18.497449315413844!3d-33.87434938065238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5c3e6f8b3b5d%3A0x9f3e4d5c6b7a8c9d!2s46%20Marais%20Rd%2C%20Milnerton%2C%20Cape%20Town%2C%207441%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1738416000000!5m2!1sen!2sza" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contactpage;
