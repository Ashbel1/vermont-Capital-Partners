import React from 'react';



const Testimonial = (prop) => {

    return (
        <section className={`testimonials-section section-padding ${prop.tClass}`}>
            <h2 className="hidden">Testimonials</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <div className="testimonials-area">
                            <p>Digiroc keeps our enterprise infrastructure running with dependable hardware supply, licensing, and rollout support. Their delivery and after‑sales support are exceptional.</p>
                            <span className="quoter">IT Operations Lead</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;