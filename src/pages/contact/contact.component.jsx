import React from 'react';

//import Directory from '../../components/directory/directory.component';
import AboutPageImg from '../../assets/images/Group-4.png';
import AboutPower from '../../assets/images/image-1.png';
import AboutSpark from '../../assets/images/image-2.png';
import AboutGivingBack from '../../assets/images/giving-back-image.png';

import './contact.styles.scss';
import Button from '../../components/button/button.component';

const ContactPage = () => (
    // <div className="homepage">
    //    <h1>This the Code Wiz Home page</h1>
    // </div>
    <div className="contact-page-content">
        <div className="container header-text-container">
            <div className="row">
                <div className="top-header col-sm-12 col-md-6">
                    <div className="text">
                        <h1 className="header-title cw-dark-blue bungee">Contact us</h1> 
                        <h2 className="header-text cw-dark-blue">Code Wiz is always here to help your child learn, grow and gain the skills they need to succeed now and later. We know that once your child tries coding, they'll fall in love-<span className="cw-orange">that's why we offer a free trial class.</span> Sign up below to get started or reach out to us for more information today.</h2>
                        <Button color="orange" link="https://codewiz.simplybook.me/v2/#book" size="medium">TRY A FREE CLASS</Button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 mobile-img visible-sm">
                    <img src={AboutPageImg} />
                </div>
            </div>
            {/* <img src={HomePageImg} className="header-image hidden-sm"/> */}
        </div>
        <div className="container contact-info-contact-page">
            <div className="row">
                <div className="col">
                    <div className="contact-circle"><i className="fa fa-map-marker fa-5x cw-orange"></i></div>
                    <h5>ADDRESS:</h5>
                    <p>9 Cornerstone Sq Westford, MA 01886</p>
                </div>
                <div className="col">
                    <div className="contact-circle"><i className="fa fa-phone fa-5x cw-orange"></i></div>
                    <h5>CONTACT:</h5>
                    <a href="tel:9784961053">(978) 496-1053</a> <br /><a href="mailto:westford@thecodewiz.com">westford@thecodewiz.com</a>
                </div>
                <div class="col">
                    <div class="contact-circle"><i class="fa fa-map-marker fa-5x cw-orange"></i></div>
                    <h5>HOURS:</h5>
                    <p>
                        Tue: 5.00PM - 7.00PM <br />
                        Wed: 4.00PM - 7.00PM <br />
                        Thu: 4.00PM - 7.00PM <br />
                        Fri: 4.00PM - 7.00PM <br />
                        Sat: 10.00AM - 2.00PM
                        
                    </p>
                </div>
            </div>
        </div>        
    </div>

);

export default ContactPage;