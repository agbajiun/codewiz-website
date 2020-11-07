import React from 'react';

//import Directory from '../../components/directory/directory.component';
import AboutPageImg from '../../assets/images/Group-4.png';
import GirlsScoutDaisies from '../../assets/images/girls-scout-daisies.png';
import GirlsScoutBrownies from '../../assets/images/girls-scout-brownies.png';
import GirlsScoutJunior from '../../assets/images/girls-scout-juniors.png';
import GirlsScoutCadets from '../../assets/images/girls-scout-cadets.png';

import './girls-scout.styles.scss';
import Button from '../../components/button/button.component';

const GirlsScoutPage = () => (
    <div className="girls-scout-page-content">
        <div className="container header-text-container">
            <div className="row">
                <div className="top-header col-sm-12 col-md-6">
                    <div className="text">
                        <h1 className="header-title cw-dark-blue bungee">GIRL'S SCOUT</h1> 
                        <h2 className="header-text cw-dark-blue">Encourage girls to explore STEM! We work closely with troop leaders to craft a custom experience for the girls based on their interests and troop size.</h2>
                        <Button color="orange" link="https://codewiz.simplybook.me/v2/#book" size="medium">FIND A LOCATION</Button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 mobile-img visible-sm">
                    <img src={AboutPageImg} />
                </div>
            </div>
            {/* <img src={HomePageImg} className="header-image hidden-sm"/> */}
        </div>
        <div className="body-wrapper girls-scout-wrapper">
            <div className="container badges-options-top">
                <div className="center">
                    <h3 className="bungee">build for badges</h3>
                    <p>We make it easy for young girls to realize their full potential through the power of code. All programs cost just $20/hour per child. Earning badges is easy—in fact, most badges can be obtained in an hour, and multiple badges can often be combined into about two hours of programming. Though Code Wiz rewards girls with fun patches at the end of every event, troop leaders are responsible for providing their troop with official Girl Scout badges.
                        Learn more about the incredible skills girls will learn at every level!
                    </p>
                </div>
                <div className="row"> 
                    <div className="text col-md-6 order-md-1">
                        <h3 className="bungee">Daisies</h3>
                        <h5 className="bungee cw-orange">ROBOTICS JOURNEY</h5>
                        <p>Girls first learn what robots do by watching an informative video about the different types of robots and what makes them tick. Next, Daisies put their knowledge to the test by designing and coding their very own robot using LEGO® WeDo sets.</p>
                        <h5 className="bungee cw-orange">COMPUTER SCIENCE JOURNEY</h5>
                        <p>Girls initiate their computer science journey by coding mini animations with a simple drag-and-drop platform. For gaining this foundational experience, they earn a “Think Like a Programmer” badge.</p>
                    </div>
                    <div className="image col-md-6 order-md-2">
                        <img src={GirlsScoutDaisies} />
                    </div>
                </div>
                <div className="row">
                    <div className="image col-md-6 order-md-1">
                        <img src={GirlsScoutBrownies} />
                    </div> 
                    <div className="text col-md-6 order-md-2">
                        <h3 className="bungee">BROWNIES</h3>
                        <h5 className="bungee cw-orange">ROBOTICS JOURNEY</h5>
                        <p>Girls first learn what robots do by watching an informative video about the different types of robots and how they work. Brownies then put their knowledge to the test by designing and coding their very own robot using LEGO® WeDo sets.</p>
                        <h5 className="bungee cw-orange">COMPUTER SCIENCE JOURNEY</h5>
                        <p>Girls continue their computer science journey by coding mini animations with a simple drag-and-drop platform. For added coding experience, they earn a “Think Like a Programmer” badge.</p>
                    </div>
                </div>
            </div>
            <div className="container empty-space bw-4"></div>
        </div>
        <div className="container badges-options-bottom">
            <div className="row"> 
                <div className="text col-md-6 order-md-1 cw-dark-blue">
                    <h3 className="bungee">JUNIORS</h3>
                    <h5 className="bungee cw-orange">ROBOTICS JOURNEY</h5>
                    <p>After learning about different types of robots and how they work, Juniors design and code their own robot using LEGO®  MINDSTORMS® EV3 sets.</p>
                    <h5 className="bungee cw-orange">COMPUTER SCIENCE JOURNEY</h5>
                    <p>Girls get their hands on the Python coding platform and use its easy, drag-and-drop interface to code animations, greeting cards and more. For their efforts, Juniors earn a “Think Like a Programmer” badge towards completing their Computer Science journey.</p>
                </div>
                <div className="image col-md-6 order-md-2">
                    <img src={GirlsScoutJunior} />
                </div>
            </div>
            <div className="row"> 
                <div className="image col-md-6 order-md-1 cw-dark-blue">
                    <img src={GirlsScoutCadets} />
                </div>
                <div className="text col-md-6 order-md-2 cw-dark-blue">
                    <h3 className="bungee">CADET</h3>
                    <h5 className="bungee cw-orange">ROBOTICS JOURNEY</h5>
                    <p>Girls first absorb the basics of robotics by watching a video. Cadettes then get to master the skills firsthand by designing and coding a robot using LEGO® MINDSTORMS® EV3 sets.</p>
                    <h5 className="bungee cw-orange">COMPUTER SCIENCE JOURNEY</h5>
                    <p>For diving headfirst into the Python platform to code animations, greeting cards and so much more, Cadettes are awarded a “Think Like a Programmer” badge towards completing their Computer Science journey.</p>
                </div>
            </div>
        </div>
        <div className="container center cw-dark-blue">
            <p>Click below to find the closest location to your troup or email info@thecodewiz.com to set up a time for your girls to come in!</p><br />
            <Button color="orange" link="https://codewiz.simplybook.me/v2/#book" size="medium">FIND A LOCATION</Button> 
        </div>

    </div>

);

export default GirlsScoutPage;