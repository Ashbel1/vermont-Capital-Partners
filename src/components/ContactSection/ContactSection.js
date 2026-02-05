import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'
import contactImg from '../../images/slider/slide-3.jpg'


const ContactSection = () => {

    return (
        <section className="contact-section">
            <div className="content-area">
                <div className="left-col" style={{ backgroundImage: `url(${contactImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '799px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="contact-message" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
                        <h4 style={{ color: '#fff' }}>Ready to grow your wealth? Contact Vermont Capital Partners today.</h4>
                        <p style={{ color: '#fff', marginTop: '15px' }}>Phone: +27 68 804 3460 | Email: info@vermontcapitalpartners.com</p>
                        <p style={{ color: '#fff', fontSize: '14px' }}>46 Fairmill, Marais Road, Milnerton, Cape Town, 7441, South Africa</p>
                    </div>
                </div>
                <div className="right-col">
                        <div className="section-title-s2">
                            <span>Contact Vermont Capital Partners</span>
                            <h2>Schedule Your Financial Consultation</h2>
                        </div>
                    <div className="contact-form">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ContactSection;
