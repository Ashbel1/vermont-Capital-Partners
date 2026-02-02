import React from 'react';



const Testimonial = (prop) => {

    return (
        <section className={`testimonials-section section-padding ${prop.tClass}`}>
            <h2 className="hidden">Testimonials</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <div className="testimonials-area">
                            <p>Vermont Capital Partners has been instrumental in our business growth. Through their diverse portfolio including Digiroc Technologies, TRES AUTO GROUP, and Toughrock Investments, they provide comprehensive solutions that deliver real value. Their strategic vision and professional approach make them an outstanding partner.</p>
                            <span className="quoter">IT Operations Lead</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;