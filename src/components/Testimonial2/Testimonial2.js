import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

const Testimonial2 = () => {

    return (
        <section className="testimonials-section-s2 section-padding">
            <h2 className="hidden">Testimonials</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <div className="testimonial-slider">
                            <Slider {...settings}>
                                <div className="testimonials-area">
                                    <p>Vermont Capital Partners' portfolio companies deliver exceptional services across multiple sectors. From automotive solutions to technology infrastructure and financial services, their integrated approach and professional expertise consistently exceed our expectations.</p>
                                    <span className="quoter">Procurement Manager, Enterprise</span>
                                </div>
                                <div className="testimonials-area">
                                    <p>Their cloud enablement and storage solutions helped us modernize quickly while staying secure and compliant.</p>
                                    <span className="quoter">CTO, Financial Services</span>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial2;