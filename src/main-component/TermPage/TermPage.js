import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import FAQ from './faq'
import tImg1 from '../../images/slider/one.jpg'
import tImg2 from '../../images/slider/one.jpg'
import tImg3 from '../../images/slider/one.jpg'
import Footer from '../../components/Footer/Footer';

const TermPage = (props) => {


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Terms & Coditions'} pagesub={'Terms & Coditions'} />
            <section className="wpo-terms-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="wpo-terms-wrap">
                                <div className="wpo-terms-img">
                                    <img src={tImg1} alt=""/>
                                </div>
                                <div className="wpo-terms-text">
                                    <h2>Vermont Capital Partners Terms & Conditions</h2>
                                <p>Vermont Capital Partners provides investment management, financial advisory services, investment management, and capital solutions through our diversified portfolio. The terms below outline how we engage with clients, deliver services, and support investment strategies.</p>
                                    <ul>
                                        <li>Use of this website and its content for business inquiries and procurement.</li>
                                        <li>Order confirmation, pricing, and delivery timelines agreed in writing.</li>
                                        <li>Warranty, returns, and RMA processes follow vendor policy.</li>
                                        <li>Compliance with licensing terms for Microsoft, Azure, AWS, and other platforms.</li>
                                        <li>Data privacy and security aligned with applicable regulations.</li>
                                    </ul>
                                    <p>Deployment timelines can vary based on scope, procurement lead time, and site readiness. Our team works with you to define realistic delivery and rollout schedules.</p>
                                    <div className="row t-sub">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={tImg2} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={tImg3} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <p>For specific investment terms or advisory agreements, contact Vermont Capital Partners to define the scope, investment strategies, and service requirements.</p>

                                </div>
                                <FAQ />
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
export default TermPage;
