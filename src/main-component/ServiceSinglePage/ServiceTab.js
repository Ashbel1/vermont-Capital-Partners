import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';


const ServiceTab = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="service-single-tab">
            <ul className="nav">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Solution Design
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >

                            Procurement & Licensing
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >

                            Deployment & Support
                        </NavLink>
                    </NavItem>
                </Nav>
            </ul>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <p>We translate your requirements into a practical enterprise architecture. This includes hardware sizing, network design, cloud readiness, security controls, and deployment timelines.</p>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <p>We source vendor-authorized hardware and software, manage licensing for Microsoft 365, Azure, and AWS, and ensure compliance for enterprise procurement.</p>
                </TabPane>
                <TabPane tabId="3">
                    <p>We deliver end-to-end deployment and lifecycle support, including installation, migration, monitoring, and warranty management to keep operations running smoothly.</p>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default ServiceTab;