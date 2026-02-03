import React from 'react';



const Testimonial = (prop) => {

    return (
        <section className={`testimonials-section section-padding ${prop.tClass}`}>
            <h2 className="hidden">Testimonials</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <div className="testimonials-area">
                            <p>Vermont Capital Partners has been instrumental in our business growth. Their strategic investment approach, comprehensive investment management services, and professional portfolio expertise deliver real value. Their commitment to excellence and deep market knowledge make them an outstanding partner for achieving financial success.</p>
                            <span className="quoter">Chief Financial Officer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;