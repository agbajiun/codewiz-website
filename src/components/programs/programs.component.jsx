import React from 'react';

import './programs.styles.scss';
import Button from '../../components/button/button.component';

import codingprg from '../../assets/images/program-free-class.png';
import teambasedprg from '../../assets/images/program-community.png';
import holidaycampprg from '../../assets/images/program-montesorri.png';
import bdaypartyprg from '../../assets/images/program-rewards.png';
import girlscoutprg from '../../assets/images/program-finger-tips.png';

const Programs = () => (
    <div className="container">
             <div className="row">
                <div className="col-md-12">
            
                <ul className="nav md-pills nav-justified pills-rounded pills-purple-gradient cw-programs">
                    <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#panel100" role="tab"><span><img src={codingprg} alt="Coding Program"/></span> CODING AND ROBOTICS CLASSES</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#panel101" role="tab"><span><img src={teambasedprg} alt="Team Based Program"/></span> TEAM-BASED ACTIVITIES</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#panel102" role="tab"><span><img src={holidaycampprg} alt="Holiday Camp Program"/></span> AND HOLIDAY CAMPS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#panel103" role="tab"><span><img src={bdaypartyprg} alt="Birthday Party Program"/></span> BIRTHDAY PARTIES</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#panel104" role="tab"><span><img src={girlscoutprg} alt="Girl's Scout Program"/></span> GIRL'S SCOUT</a>
                    </li>
                </ul>
            
                
                <div className="tab-content">
                    <div className="tab-pane fade in show active" id="panel100" role="tabpanel">
                        <div className="container">
                            <div className="detail-box col-md-12">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6 coding-robotics">
                                        <div className="detail-img"></div>
                                    </div>
                                    <div className="col-md-12 col-lg-6 orange-bkg">
                                        <h4 className="bungee">CODING, ROBOTICS & 3D CLASSES</h4>
                                        <p>Loremt</p>
                                        <Button color="light-blue" link="/birthday-parties" size="small">CHECK IT OUT</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="panel101" role="tabpanel">
                        <div className="detail-box col-md-12">
                            <div className="row">
                                <div className="col-md-12 col-lg-6 team-based">
                                    <div className="detail-img"></div>
                                </div>
                                <div className="col-md-12 col-lg-6 orange-bkg">
                                    <h4 className="bungee">TEAM-BASED ACTIVITIES</h4>
                                    <p>Lorem</p>
                                    <Button color="light-blue" link="/competitions" size="small">CHECK IT OUT</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="panel102" role="tabpanel">
                        <div className="detail-box col-md-12">
                            <div className="row">
                                <div className="col-md-12 col-lg-6 camps">
                                    <div className="detail-img"></div>
                                </div>
                                <div class="col-md-12 col-lg-6 orange-bkg">
                                    <h4 className="bungee">SUMMER AND HOLIDAY CAMPS</h4>
                                    <p>Lorem</p>
                                    <Button color="light-blue" link="/camps" size="small">CHECK IT OUT</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className="tab-pane fade" id="panel103" role="tabpanel">
                        <div className="detail-box col-md-12">
                            <div className="row">
                                <div className="col-md-12 col-lg-6 bday-party">
                                    <div className="detail-img"></div>
                                </div>
                                <div className="col-md-12 col-lg-6 orange-bkg">
                                    <h4 className="bungee">BIRTHDAY PARTIES</h4>
                                    <p>Lorem</p>
                                    <Button color="light-blue" link="/birthday-parties" size="small">CHECK IT OUT</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="panel104" role="tabpanel">
                        <div className="detail-box col-md-12">
                            <div className="row">
                                <div className="col-md-12 col-lg-6 girls-scout">
                                    <div className="detail-img"></div>
                                </div>
                                <div className="col-md-12 col-lg-6 orange-bkg">
                                    <h4 className="bungee">Girl's scout</h4>
                                    <p>Lorem</p>
                                    <Button color="light-blue" link="/girls-scout" size="small">CHECK IT OUT</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                </div>
            </div> 
        </div>
);

export default Programs