import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';


const ServiceTab = ({ serviceSlug }) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    // Define service-specific tab content
    const getTabContent = () => {
        switch(serviceSlug) {
            case 'Automotive-Trading':
                return {
                    tab1Title: 'Product Sourcing',
                    tab2Title: 'Quality Assurance',
                    tab3Title: 'Distribution & Support',
                    tab1Content: 'We source premium automotive products from trusted global and local manufacturers. Our partnerships with brands like PUMA lubricants and OEM suppliers ensure you receive genuine, quality-assured products for your automotive and industrial needs.',
                    tab2Content: 'Every product in our portfolio meets strict quality standards. We provide manufacturer warranties, authentic certifications, and rigorous quality control processes to ensure reliability and performance across all automotive supplies and equipment.',
                    tab3Content: 'Our nationwide distribution network delivers timely supply of lubricants, spare parts, vehicles, and heavy machinery. We provide ongoing technical support, maintenance services, and fleet management solutions to keep your operations running smoothly.'
                };
            case 'Toughrock-Investments':
                return {
                    tab1Title: 'Project Planning',
                    tab2Title: 'Financing Solutions',
                    tab3Title: 'Execution & Support',
                    tab1Content: 'We conduct comprehensive feasibility studies and project planning for infrastructure and construction projects. Our team develops detailed blueprints, timelines, and resource allocation plans that align with your objectives and budget constraints.',
                    tab2Content: 'Toughrock offers flexible financing solutions including microfinance, business loans, payroll services, and project finance. We structure terms that match your cash flow and growth trajectory, providing accessible capital without excessive collateral requirements.',
                    tab3Content: 'From groundbreaking to completion, we deliver full project execution including civil engineering, brick manufacturing, and infrastructure development. Our financial services division provides ongoing support with payroll management and working capital solutions.'
                };
            case 'Digiroc-Technologies':
                return {
                    tab1Title: 'Solution Design',
                    tab2Title: 'Procurement & Licensing',
                    tab3Title: 'Deployment & Support',
                    tab1Content: 'We translate your requirements into a practical enterprise architecture. This includes hardware sizing, network design, cloud readiness, security controls, and deployment timelines tailored to your business needs and scalability requirements.',
                    tab2Content: 'We source vendor-authorized hardware and software, manage licensing for Microsoft 365, Azure, AWS, and enterprise platforms. Our procurement process ensures compliance, competitive pricing, and seamless integration with your existing infrastructure.',
                    tab3Content: 'We deliver end-to-end deployment and lifecycle support, including installation, data migration, system monitoring, and warranty management. Our 24/7 technical support and SLA-backed services keep your technology infrastructure running smoothly.'
                };
            default:
                return {
                    tab1Title: 'Planning',
                    tab2Title: 'Implementation',
                    tab3Title: 'Support',
                    tab1Content: 'We work with you to understand your requirements and develop comprehensive solutions tailored to your business needs.',
                    tab2Content: 'Our team manages procurement, licensing, and compliance to ensure smooth implementation of services.',
                    tab3Content: 'We provide ongoing support and maintenance to ensure long-term success and optimal performance.'
                };
        }
    };

    const tabContent = getTabContent();

    return (
        <div className="service-single-tab">
            <ul className="nav">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            {tabContent.tab1Title}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            {tabContent.tab2Title}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            {tabContent.tab3Title}
                        </NavLink>
                    </NavItem>
                </Nav>
            </ul>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <p>{tabContent.tab1Content}</p>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <p>{tabContent.tab2Content}</p>
                </TabPane>
                <TabPane tabId="3">
                    <p>{tabContent.tab3Content}</p>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default ServiceTab;