import React from "react";
import { Link } from 'react-router-dom'
import Services from '../../api/service'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = () => {
    return (
        <section className="services-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="section-title-s3">
                            <span>Our Partner Companies</span>
                            <h2>Vermont Capital Partners Portfolio</h2>
                            <p>Vermont Capital Partners is proud to represent a diverse portfolio of industry-leading companies. Each partner company brings specialized expertise and innovative solutions to their respective sectors, driving growth and creating value across South Africa and beyond.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="services-grids clearfix">
                            {Services.map((service, srv) => (
                                <div className="grid" key={srv} style={service.sTitle === 'Toughrock Investments' ? {paddingBottom: '10px'} : {}}>
                                    {service.sTitle !== 'Toughrock Investments' && (
                                        <div className="icon" style={{marginBottom: '15px'}}>
                                            <i className={`fi ${service.icon}`}></i>
                                        </div>
                                    )}
                                    <h3 style={{marginTop: service.sTitle === 'Toughrock Investments' ? '10px' : '0', textDecoration: 'underline', textUnderlineOffset: '4px'}}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></h3>
                                    <p style={{marginBottom: '6px', marginTop: '8px', fontSize: '15px', lineHeight: '1.4', color: '#666'}}>{service.description}</p>
                                    
                                    {/* Display sub-branches if they exist */}
                                    {service.subBranches && service.subBranches.length > 0 && (
                                        <div className="sub-branches" style={{marginTop: '8px', paddingTop: '10px', borderTop: '1px solid #e8e8e8'}}>
                                            {service.subBranches.map((branch, idx) => (
                                                <div key={idx} style={{marginBottom: idx === service.subBranches.length - 1 ? '0' : '8px'}}>
                                                    <h5 style={{fontSize: '16px', fontWeight: '700', marginBottom: '3px', color: '#2c2c2c', lineHeight: '1.3', letterSpacing: '-0.3px', textDecoration: 'underline', textUnderlineOffset: '3px'}}>
                                                        {branch.name}
                                                    </h5>
                                                    <p style={{fontSize: '13px', marginBottom: '4px', color: '#777', lineHeight: '1.35', fontStyle: 'italic'}}>{branch.description}</p>
                                                    <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
                                                        {branch.services.map((item, i) => (
                                                            <li key={i} style={{fontSize: '14px', color: '#555', marginBottom: i === branch.services.length - 1 ? '0' : '2px', paddingLeft: '16px', position: 'relative', lineHeight: '1.4'}}>
                                                                <span style={{position: 'absolute', left: '0', color: '#c5a47e', fontSize: '18px', top: '0', lineHeight: '1.4'}}>•</span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;