import React from 'react';

//import Directory from '../../components/directory/directory.component';
import AboutPageImg from '../../assets/images/Group-4.png';
import ProgramsPower from '../../assets/images/program-wrapper-img.png';

import './programs.styles.scss';
import Button from '../../components/button/button.component';
import Programs from '../../components/programs/programs.component';

const ProgramsPage = () => (
    <div className="programs-page-content">
        <div className="container header-text-container">
            <div className="row">
                <div className="top-header col-sm-12 col-md-6">
                    <div className="text">
                        <h1 className="header-title cw-dark-blue bungee">PROGRAMS</h1> 
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
        <div className="body-wrapper programs-wrapper">
            <div className="container programs-container">
                <div className="row">
                    <div className="image col-md-6 order-md-1">
                        <img src={ProgramsPower} alt="Program Power"/>
                    </div> 
                    <div className="text abs right col-md-6 order-md-2">
                        <h3 className="bungee">What powers us</h3>
                        <p>At Code Wiz, we believe that learning to code is the easiest way to shape your child’s future. Our students develop programming skills along with invaluable approaches to critical thinking and problem solving. Best of all, anyone can learn to code—no matter their age, tech proficiency or personal interests. We’ve designed fun, flexible programs to ensure every kid becomes a wiz!</p>
                        <Button color="orange" link="https://codewiz.simplybook.me/v2/#book" size="medium">FIND A CENTER NEAR ME</Button>
                    </div>
                </div>
            </div>
            <div className="container empty-space bw-4"></div>
            {/* <div className="container empty-space-large bw-3"></div> */}
            <div className="container empty-space-large bw-5"></div>
        </div>
        <div class="container">
            <h3 class="bungee center cw-dark-blue focused-programs">About our classes</h3>
        </div>
        <Programs />
    </div>

);

export default ProgramsPage;