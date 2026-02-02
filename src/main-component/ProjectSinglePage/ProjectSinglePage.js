import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useParams, useNavigate } from 'react-router-dom'
import Projects from '../../api/project'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/vermontlogo.png'
import { Link } from "react-router-dom";

const ProjectSinglePage = (props) => {

    const { slug } = useParams()
    const navigate = useNavigate()

    const projectDetails = Projects.find(item => item.slug === slug)

    // If project not found, redirect to 404
    React.useEffect(() => {
        if (!projectDetails) {
            navigate('/404')
        }
    }, [projectDetails, navigate])

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Show nothing while redirecting
    if (!projectDetails) {
        return null;
    }

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
                                            <li><span>Client:</span> {projectDetails.client || 'Enterprise Customer'}</li>
                                            <li><span>Location:</span> {projectDetails.location || 'Cape Town, South Africa'}</li>
                                            <li><span>Status:</span> {projectDetails.status || 'Completed'}</li>
                                            <li><span>Duration:</span> {projectDetails.duration || '6 Weeks'}</li>
                                            <li><span>Tags:</span> {projectDetails.tags || projectDetails.subTitle}</li>
                                        </ul>
                                    </div>
                                    <h2>{projectDetails.mainTitle || projectDetails.title}</h2>
                                    <p>{projectDetails.description || 'Vermont Capital Partners delivered a comprehensive solution tailored to client needs.'}</p>
                                    <p>{projectDetails.description2 || 'Our team ensured successful project delivery with exceptional results.'}</p>

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
                                                        <p>{projectDetails.challenge || 'The client faced complex business challenges requiring strategic solutions.'}</p>
                                                        {projectDetails.challengeDetails && (
                                                            <ul>
                                                                {projectDetails.challengeDetails.map((detail, idx) => (
                                                                    <li key={idx}><i className="ti-check"></i>{detail}</li>
                                                                ))}
                                                            </ul>
                                                        )}
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
                                                    <p>{projectDetails.solution || 'Vermont Capital Partners delivered comprehensive solutions that exceeded client expectations.'}</p>
                                                            {projectDetails.solutionDetails && (
                                                                <ul>
                                                                    {projectDetails.solutionDetails.map((detail, idx) => (
                                                                        <li key={idx}><i className="ti-check"></i>{detail}</li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    </div>
                                    <div className="prev-next-project">
                                        <div>
                                            <Link onClick={ClickHandler} to={'/coming-soon'}>
                                                <div className="icon">
                                                    <i className="fi flaticon-back"></i>
                                                </div>
                                                <span>Previous project</span>
                                                <h5>Coming Soon</h5>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link onClick={ClickHandler} to={'/coming-soon'}>
                                                <div className="icon">
                                                    <i className="fi flaticon-next"></i>
                                                </div>
                                                <span>Next project</span>
                                                <h5>Coming Soon</h5>
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
