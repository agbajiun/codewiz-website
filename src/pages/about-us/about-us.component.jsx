import React from 'react';

//import Directory from '../../components/directory/directory.component';
import AboutPageImg from '../../assets/images/Group-4.png';
import AboutPower from '../../assets/images/image-1.png';
import AboutSpark from '../../assets/images/image-2.png';
import AboutGivingBack from '../../assets/images/giving-back-image.png';

import './about-us.styles.scss';
import Button from '../../components/button/button.component';

const AboutPage = () => (
    // <div className="homepage">
    //    <h1>This the Code Wiz Home page</h1>
    // </div>
    <div className="about-page-content">
        <div className="container header-text-container">
            <div className="row">
                <div className="top-header col-sm-12 col-md-6">
                    <div className="text">
                        <h1 className="header-title cw-dark-blue bungee">ABOUT US</h1> 
                        <h2 className="header-text cw-dark-blue">&nbsp;</h2>
                        <Button color="orange" link="https://codewiz.simplybook.me/v2/#book" size="medium">TRY A FREE CLASS</Button>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 mobile-img d-md-block d-lg-none order-1">
                    <img src={AboutPageImg} alt="About"/>
                </div>
            </div>
            {/* <img src={HomePageImg} className="header-image hidden-sm"/> */}
        </div>
        <div className="body-wrapper about-us-wrapper">
            <div className="container about-us-container">
                <div className="row">
                    <div className="image col-md-6 order-md-1">
                        <img src={AboutPower} alt="About Power"/>
                    </div> 
                    <div className="text abs right col-md-6 order-md-2">
                        <h3 className="bungee">What powers us</h3>
                        <p>At Code Wiz, we believe that learning to code is the easiest way to shape your child’s future. Our students develop programming skills along with invaluable approaches to critical thinking and problem solving. Best of all, anyone can learn to code—no matter their age, tech proficiency or personal interests. We’ve designed fun, flexible programs to ensure every kid becomes a wiz!</p>
                        <Button color="orange" link="https://codewiz.simplybook.me/v2/#book" size="medium">FIND A CENTER NEAR ME</Button>
                    </div>
                </div>
            </div>
            <div className="container empty-space bw-4"></div>
            <div className="mid-section">
                <div className="container">
                    <div className="row">
                        <div className="text col-md-6">
                            <h3 className="bungee">The spark that got us started</h3>
                            <p>There is no limit to your child’s potential. We encourage them to create by completing projects rather than levels. This approach fosters creativity and fuels the entrepreneurial spirit that may later lead to world-changing technologies—you never know, you may be raising the next Bill Gates! </p>
                        </div>
                        <div className="image img-right col-md-6">
                            <img src={AboutSpark} alt="About Spark"/>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="container empty-space-large bw-3"></div>
                <div className="container empty-space bw-5"></div>
            </div>
        </div>
        {/* <div className="container">
            <h3 className="bungee center cw-dark-blue focused-programs">Focused Programs. infinite potential</h3>
        </div> */}
        <div className="container">
            <div className="row">
                <div class="col giving-back-img">
                    <img src={AboutGivingBack} alt="About Giving Back"/>
                </div>
                <div className="col">
                    <h3 className="bungee cw-dark-blue">Giving back as we grow</h3>
                    <p>See how learning to code can change your child’s life. Start with a no-obligation introductory class that can be done from the comfort of your home today—all Code Wiz classes are currently being offered online!</p>
                    <Button color="orange" link="https://codewiz.simplybook.me/v2/#book" size="medium">LEARN MORE</Button>
                </div>
            </div>
        </div>
    </div>

);

export default AboutPage;