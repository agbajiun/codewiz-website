import React from 'react';

import {Link} from 'react-router-dom';
import Reviews from '../reviews/reviews.component';
import FooterLogo from '../../assets/images/grey-logo.png';

import './footer.styles.scss';

const Footer = () => (
    /*<div className="footer">
        <Link className="footer-logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <h3 className="copyright">COPYRIGHT &copy; CODE WIZ 2019-20</h3>
        <div className="locations">
            <Link className="location" to="/reading">Reading, MA</Link> | 
            <Link className="location" to="/arlington">Arlington, MA</Link> | 
            <Link className="location" to="/westford">Westford, MA</Link> | 
            <Link className="location" to="/jerseycity">Jersey City, NJ</Link>
        </div>
        <div className="social-media"></div>
    </div>*/
    <div className="footer">
        <div className="row">
            <div className="col-md-6">
                <div className="container empty-space-half"></div>
                <h3 className="bungee center cw-dark-blue">why parents and kids love us</h3>
            </div>
        </div>
        <Reviews />
        <div className="container">
            <div className="footer-logo"> 
                <img src={FooterLogo} alt="Logo" />
                <h6>COPYRIGHT &copy; CODE WIZ 2019-20</h6>
                <div className="location-links">
                    <Link className="location" to="/reading">Reading, MA</Link> | 
                    <Link className="location" to="/arlington"> Arlington, MA</Link> | 
                    <Link className="location" to="/westford"> Westford, MA</Link> | 
                    <Link className="location" to="/jerseycity"> Jersey City, NJ</Link>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;