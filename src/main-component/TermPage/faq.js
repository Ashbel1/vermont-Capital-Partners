import React from 'react'
import { makeStyles } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },

}));

const FAQ = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div className="wpo-benefits-section">
            <h2>Frequently Ask Questions</h2>
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={classes.heading}>What services does Vermont Capital Partners offer?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                   Vermont Capital Partners provides investment management, wealth advisory, capital solutions, and strategic financial services through our diversified portfolio including automotive, infrastructure, and technology sectors.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography className={classes.heading}>Does Vermont Capital Partners offer specialized financial services?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes. We provide tailored investment strategies, capital advisory, investment management, and access to diverse investment opportunities through our multi-sector portfolio approach.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography className={classes.heading}>What portfolio companies does Vermont Capital Partners manage?</Typography>
                
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We manage a diversified portfolio across automotive, infrastructure, and technology sectors, including leading companies in vehicle trading, construction development, and enterprise IT solutions, providing comprehensive strategic services across multiple industries.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>How does Vermont Capital Partners support investment strategies?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We provide comprehensive investment planning, portfolio optimization, strategic advisory services, and ongoing investment management support to help clients achieve their financial objectives with confidence.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FAQ;