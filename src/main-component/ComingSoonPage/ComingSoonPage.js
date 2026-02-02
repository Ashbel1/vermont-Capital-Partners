import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import Footer from '../../components/footer/Footer';

const ComingSoonPage = () => {
    return (
        <Fragment>
            <Navbar />
            <ComingSoon />
            <Footer />
        </Fragment>
    )
};

export default ComingSoonPage;
