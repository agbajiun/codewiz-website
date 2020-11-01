import React from 'react';

//import Directory from '../../components/directory/directory.component';
import HomePageImg from '../../assets/images/Group-4.png';
import HomepageBodyWrapper from '../../assets/images/Group-14.png';
import RewardsImg from '../../assets/images/Ellipse-orange.png';
import ProgressImg from '../../assets/images/Ellipse-green.png';
import CommunityImg from '../../assets/images/Ellipse-light-blue.png';
import FreeClassImg from '../../assets/images/Ellipse-purple.png';
import MontesorriImg from '../../assets/images/Ellipse-yellow.png';

import Programs from '../../components/programs/programs.component';
import './homepage.styles.scss';

const HomePage = () => (
    // <div className="homepage">
    //    <h1>This the Code Wiz Home page</h1>
    // </div>
    <div className="homepage-content">
        <div className="container header-text-container">
            <div className="row">
                <div className="top-header col-sm-12 col-md-6">
                    <div className="text">
                        <h1 className="header-title cw-dark-blue bungee">DECODE THE FUTURE</h1> 
                        <h2 className="header-text cw-dark-blue">Code Wiz kids learn, create, collaborate and gain the problem-solving savvy they need to compete in a changing world</h2>
                        <button className="btn orange-button">TRY A FREE CLASS</button> 
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 mobile-img visible-sm">
                    <img src={HomePageImg} />
                </div>
            </div>
            {/* <img src={HomePageImg} className="header-image hidden-sm"/> */}
        </div>
        <div className="body-wrapper">
            <div className="container in-our-code">
                <div className="row"> 
                    <div className="text col-md-6 order-md-1">
                        <h3 className="bungee">HELPING KIDS LEARN & GROW-IT'S IN OUR CODE</h3>
                        <p>At Code Wiz, we believe that learning to code is the easiest way to shape your child’s future. Our students develop programming skills along with invaluable approaches to critical thinking and problem solving. Best of all, anyone can learn to code—no matter their age, tech proficiency or personal interests. We’ve designed fun, flexible programs to ensure every kid becomes a wiz!</p>
                        <button className="btn orange-button">FIND A CENTER NEAR ME</button>
                    </div>
                    <div className="image col-md-6 order-md-2">
                        <img src={HomepageBodyWrapper} />
                    </div>
                </div>
            </div>
             <div className="project-driven">
                <div className="container">
                    <div className="row">
                        <div className="container empty-space bw-1"></div>
                        <div className="container empty-space bw-2"></div>
                        <div className="image col-md-6"></div>
                        <div className="text col-md-6">
                            <h3 className="bungee">The code wiz script for success</h3>
                            <p className="cw-yellow">PROJECT-DRIVEN, STUDENT-STEERED LEARNING</p>
                            <p>There is no limit to your child’s potential. We encourage them to create by completing projects rather than levels. This approach fosters creativity and fuels the entrepreneurial spirit that may later lead to world-changing technologies—you never know, you may be raising the next Bill Gates! </p>
                        </div>
                    </div>
                    
                </div>
                <div className="container empty-space-large bw-3"></div>
                <div className="whycodewiz">
                    <div className="container">
                        <div className="row">
                            <div className="reason col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                    <   img src={RewardsImg} />
                                    </div>
                                    <div className="col-md-8 reason-text">
                                        <h5>REALLY COOL REWARDS</h5>
                                        <p>Our students love to learn—and we love to reward them for it! For the completion of each project (as well as little milestones along the way), students earn badges and “WizBucks,” which are redeemable for Code Wiz gear and other awesome prizes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="reason col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={ProgressImg} />
                                    </div>
                                    <div className="col-md-8 reason-text">
                                        <h5>PROGRESS AT YOUR FINGER TIPS</h5>
                                        <p>We know it’s important for you to stay connected to your child’s success. That’s why we send automated progress report emails that let you know exactly what your child is working on and when they have completed a project. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="reason col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={CommunityImg} />
                                    </div>
                                    <div className="col-md-8 reason-text">
                                        <h5>COMMUNITY CONNECTIVITY</h5>
                                        <p>For accountability and added inspiration, all students have access to a personalized web portal. Here, they can view their own work and check out projects completed by Code Wiz kids across the nation. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="reason col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={FreeClassImg} />
                                    </div>
                                    <div className="col-md-8 reason-text">
                                        <h5>FREE, NO-STRINGS TRIAL CLASS</h5>
                                        <p>See how learning to code can change your child’s life. Start with a no-obligation introductory class that can be done from the comfort of your home today—all Code Wiz classes are currently being offered online!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="reason col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={MontesorriImg} />
                                    </div>
                                    <div className="col-md-8 reason-text">
                                        <h5>MONTESORRI STYLE APPROACH</h5>
                                        <p>See how learning to code can change your child’s life. Start with a no-obligation introductory class that can be done from the comfort of your home today—all Code Wiz classes are currently being offered online!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="reason col-md-6"></div>
                            <div className="reason col-md-6">
                                <button className="btn orange-button">TRY A FREE CLASS</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="container empty-space-large bw-4"></div>
                <div class="container empty-space-half bw-5"></div>
                {/* <div class="container empty-space-half bw-5"></div> */}
            </div> 
            {/* <img src={HomepageMidImg} class="body-wrapper-img"/> */}
        </div>
        <div className="container">
            <h3 className="bungee center cw-dark-blue focused-programs">Focused Programs. infinite potential</h3>
        </div>
   
        <Programs />
    </div>

);

export default HomePage;