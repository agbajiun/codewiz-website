import React from 'react';

//import Directory from '../../components/directory/directory.component';
import AboutPageImg from '../../assets/images/Group-4.png';
import CompetitionTech from '../../assets/images/competition-technovation.png';
import CompetitionFLL from '../../assets/images/competition-first-lego.png';

import './technovation.styles.scss';
import Button from '../../components/button/button.component';

const TechnovationPage = () => (
    <div className="competitions-content">
        <div className="container header-text-container">
            <div className="row">
                <div className="top-header col-sm-12 col-md-6">
                    <div className="text">
                        <h1 className="header-title cw-dark-blue bungee">Technovation</h1> 
                        <h2 className="header-text cw-dark-blue">&nbsp;</h2>
                        <Button color="blue" link="https://technovationchallenge.org/" size="medium">LEARN MORE</Button>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 mobile-img d-md-block d-lg-none order-1">
                    <img src={AboutPageImg} alt="About"/>
                </div>
            </div>
            {/* <img src={HomePageImg} className="header-image hidden-sm"/> */}
        </div>
        <div className="body-wrapper competitions-wrapper">
            <div className="container competitions-top">
                <div className="row">
                    <div className="image col-md-6 order-md-1">
                        <img src={CompetitionTech} alt="Technovation"/>
                    </div> 
                    <div className="text col-md-6 order-md-2 cw-dark-blue">
                        <h3 className="bungee">technovation</h3>
                        <h4 className="cw-orange">HELPING GIRLS CHANGE THE WORLD</h4>
                        <p>Through Technovation, the world’s largest technology entrepreneurship, the future truly is female. Girls of all ages from all over are invited to solve real problems using technology. Discover how Code Wiz prepares your child for the competition and paves the way for her success!</p>
                        <Button color="orange" link="https://codewiz.simplybook.me/v2/#book" size="medium">FIND A LOCATION</Button>
                    </div>
                </div>
                <div className="row"> 
                    <div className="text col-md-6 order-md-1 cw-dark-blue">
                        <h3 className="bungee">FIRST LEGO LEAGUE</h3>
                        <h4 className="cw-orange">BUILDING A BETTER FUTURE</h4>
                        <p>Let LEGO® inspire, challenge and grow your child like never before. FIRST® LEGO® League invites youth to sharpen their STEM skills with competitions centered around building their very own creation. See how Code Wiz provides the building blocks they need to succeed.</p>
                        <Button color="orange" link="https://codewiz.simplybook.me/v2/#book" size="medium">FIND A LOCATION</Button>
                    </div>
                    <div className="image col-md-6 order-md-2 cw-dark-blue">
                        <img src={CompetitionFLL} alt="FLL"/>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>

);

export default TechnovationPage;