import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom'
import Projects from '../../api/project'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/vermontlogo.png'
import { Link } from "react-router-dom";

const ProjectSinglePage = (props) => {

    const { slug } = useParams()

    const projectDetails = Projects.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Fragment>
            <Navbar hclass={'header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={projectDetails.title} pagesub={'Project'} />
            <section className="project-sigle-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="project-single-content">
                                <div className="img-holder">
                                    <img src={projectDetails.pImg} alt="" />
                                </div>
                                <div className="content-area">
                                    <div className="project-info">
                                        <ul>
                                            <li><span>Client:</span> Enterprise Customer</li>
                                            <li><span>Location:</span> Cape Town, South Africa</li>
                                            <li><span>Status:</span> Completed</li>
                                            <li><span>Duration:</span> 6 Weeks</li>
                                            <li><span>Tags:</span> Investment Strategy, Portfolio Management</li>
                                        </ul>
                                    </div>
                                    <h2>Strategic Investment Portfolio Development</h2>
                                    <p>Vermont Capital Partners delivered a comprehensive investment strategy and portfolio optimization for an enterprise client, covering asset allocation, risk management, and diversification across multiple sectors. The project included thorough financial analysis, strategic planning, and ongoing portfolio management support.</p>
                                    <p>Our team ensured regulatory compliance, alignment with client objectives, and a structured investment plan that maximized returns while managing risk effectively.</p>

                                    <div className="challange-solution-section">
                                        <div className="theme-accordion-s1">
                                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                                <AccordionSummary
                                                    expandIcon={""}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <Typography>The Challenge Was</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        <p>The client needed a comprehensive investment strategy with diversified portfolio allocation, strict risk management controls, and regulatory compliance.</p>
                                                        <ul>
                                                            <li><i className="ti-check"></i>Coordinating multi-sector investment allocation</li>
                                                            <li><i className="ti-check"></i>Ensuring compliance, risk management, and performance tracking</li>
                                                        </ul>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                                <AccordionSummary
                                                    expandIcon={""}
                                                    aria-controls="panel2bh-content"
                                                    id="panel2bh-header"
                                                >
                                                    <Typography>Our Solution Was</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                    <p>Vermont Capital Partners provided comprehensive financial analysis, strategic portfolio construction, and ongoing wealth management to execute the investment plan with exceptional results.</p>
                                                            <ul>
                                                                <li><i className="ti-check"></i>Diversified portfolio strategy delivered on objectives</li>
                                                                <li><i className="ti-check"></i>Ongoing advisory support and performance monitoring</li>
                                                            </ul>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    </div>
                                    <div className="prev-next-project">
                                        <div>
                                            <Link onClick={ClickHandler} to={'/project-single/Server-Storage-Deployment'}>
                                                <div className="icon">
                                                    <i className="fi flaticon-back"></i>
                                                </div>
                                                <span>Previous project</span>
                                                <h5>Server & Storage Deployment</h5>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link onClick={ClickHandler} to={'/project-single/Microsoft-365-Enablement'}>
                                                <div className="icon">
                                                    <i className="fi flaticon-next"></i>
                                                </div>
                                                <span>Next project</span>
                                                <h5>Microsoft 365 Enablement</h5>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
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
export default ProjectSinglePage;
