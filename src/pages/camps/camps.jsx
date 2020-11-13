import React from 'react';

//import Directory from '../../components/directory/directory.component';
import AboutPageImg from '../../assets/images/Group-4.png';
import CampHome from '../../assets/images/camps-camp-from-home.png';
import CampSummer from '../../assets/images/camps-summer-camps.png';

import './camps.styles.scss';
import Button from '../../components/button/button.component';

const CampsPage = () => (
    <div className="birthday-parties-content">
        <div className="container header-text-container">
            <div className="row">
                <div className="top-header col-sm-12 col-md-6">
                    <div className="text">
                        <h1 className="header-title cw-dark-blue bungee">CAMPS</h1> 
                        <h2 className="header-text cw-dark-blue">&nbsp;</h2>
                        {/* <Button color="orange" link="https://codewiz.simplybook.me/v2/#book" size="medium">FIND A LOCATION</Button> */}
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 mobile-img d-md-block d-lg-none order-1">
                    <img src={AboutPageImg} alt="About"/>
                </div>
            </div>
            {/* <img src={HomePageImg} className="header-image hidden-sm"/> */}
        </div>
        <div className="body-wrapper camps-wrapper">
            <div className="container camps-top">
                
                <div className="row"> 
                    <div className="image col-md-6 order-md-1 cw-dark-blue">
                        <img src={CampHome} alt="Camp"/>
                    </div>
                    <div className="text col-md-6 order-md-2 cw-dark-blue">
                        <h3 className="bungee">camp from home</h3>
                        <h5 className="bungee cw-orange">overview</h5>
                        <p>Encourage your child to learn invaluable skills, make friends and have the best summer ever-all from the safety and comfort of your home. The Code Wiz welcomes students of all skill levels with age groups for 7-9, 10-12 and 13+.</p>
                        <Button color="blue" link="https://codewiz.simplybook.me/v2/#book" size="medium">FIND A LOCATION</Button>
                    </div>
                </div>
                <div className="row"> 
                    <div className="text col-md-6 order-md-1 cw-dark-blue">
                        <h3 className="bungee">summer camps</h3>
                        <h5 className="bungee cw-orange">about camps</h5>
                        <p>Our online summer camps are perfect for keeping kids active when school isn't in session. One week-long sessions are tailored toward what your child wants to learn. Kids can build and program robots, drones and more using drag-and-drop technology like Scratch or more advanced technology like Python and Raspberry Pi. Weekly coding sessions are also offered for kids who want to work on building video games and web apps.</p>
                        <Button color="blue" link="https://codewiz.simplybook.me/v2/#book" size="medium">FIND A CENTER NEAR ME</Button>
                    </div>
                    <div className="image col-md-6 order-md-2">
                        <img src={CampSummer} alt="Summer Camp"/>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>

);

export default CampsPage;