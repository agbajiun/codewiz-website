import React from 'react';

//import Directory from '../../components/directory/directory.component';
import AboutPageImg from '../../assets/images/Group-4.png';
import FindACourseCoding from '../../assets/images/coding-course.png';
import FindACourseGaming from '../../assets/images/gaming-course.png';
import FindACourseRobotics from '../../assets/images/robotics-course.png';
import FindACourseCompetition from '../../assets/images/competition-course.png';

import './find-a-course.styles.scss';
import Button from '../../components/button/button.component';

const FindACoursePage = () => (
    <div className="find-a-course-content">
        <div className="container header-text-container">
            <div className="row">
                <div className="top-header col-sm-12 col-md-6">
                    <div className="text">
                        <h1 className="header-title cw-dark-blue bungee">FIND A COURSE</h1> 
                        <h2 className="header-text cw-dark-blue">&nbsp;</h2>
                        <Button color="orange" link="https://codewiz.simplybook.me/v2/#book" size="medium">FIND A LOCATION</Button>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 mobile-img d-md-block d-lg-none order-1">
                    <img src={AboutPageImg} alt="About"/>
                </div>
            </div>
            {/* <img src={HomePageImg} className="header-image hidden-sm"/> */}
        </div>
        <div className="body-wrapper find-a-course-wrapper">
            
            <div className="container">
                <div className="center">
                    <h3 className="bungee">Code Wiz Courses</h3>
                    <p>At Code Wiz, we believe that anyone can learn to code—and everyone will fall in love with the process! We create super-fun, highly individualized classes for kids from ages 7-17. Whether your child is a budding coder or practically running Python in their sleep, we scale the level of difficulty to fit their skill level so that they continue to learn and grow.</p>
                    <p>Click below to learn more about the options available for your child or reach out to us today for guidance.</p>
                </div>
                <div className="center">
                    <h4 className="bungee">student's age</h4>
                    <div className="row select-student-age">
                        <select id="select-age" className="form-control col-md-10">
                            <option>Choose...</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                        </select>
                        <button className="btn orange-button col-md-2" id="start">START</button>
                    </div>
                </div>
                <div className="row"> 
                    <div id="coding" className="col hidden">
                        <div className="course">
                            <div className="course-img"><img src={FindACourseCoding} alt="Find a coding course"/></div>
                            <h4 className="cw-dark-blue">CODING</h4>
                            <select id="selectcoding" className="form-control form-control-md"></select>
                            <button id="coding-start" className="btn orange-button course-btn">SEE DETAILS</button>
                        </div>
                    </div>
                     
                    <div id="gaming" className="col hidden">
                        <div className="course">
                            <div className="course-img"><img src={FindACourseGaming} alt="Find a gaming course"/></div>
                            <h4 className="cw-dark-blue">GAMING</h4>
                            <select id="select-gaming" className="form-control form-control-md"></select>
                            <button id="gaming-start" className="btn orange-button course-btn">SEE DETAILS</button>
                        </div>
                    </div>
                    
                    <div id="robotics" className="col hidden">
                        <div className="course">
                            <div className="course-img"><img src={FindACourseRobotics} alt="Find a robotics course"/></div>
                            <h4 className="cw-dark-blue">ROBOTICS</h4>
                            <select id="select-robotics" className="form-control form-control-md"></select>
                            <button id="robotics-start" className="btn orange-button course-btn">SEE DETAILS</button>
                        </div>
                    </div>

                    <div id="competitions" className="col hidden">
                        <div className="course">
                            <div className="course-img"><img src={FindACourseCompetition} alt="Find a competition"/></div>
                            <h4 className="cw-dark-blue">COMPETITION</h4>
                            <select id="select-competitions" className="form-control form-control-md"></select>
                            <button id="competition-start" className="btn orange-button course-btn">SEE DETAILS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

);

export default FindACoursePage;