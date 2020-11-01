import React from 'react';

import './programs.styles.scss';

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
                    <a className="nav-link active" data-toggle="tab" href="#panel100" role="tab"><span><img src={codingprg}/></span> CODING AND ROBOTICS CLASSES</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#panel101" role="tab"><span><img src={teambasedprg} /></span> TEAM-BASED ACTIVITIES</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#panel102" role="tab"><span><img src={holidaycampprg}/></span> AND HOLIDAY CAMPS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#panel103" role="tab"><span><img src={bdaypartyprg}/></span> BIRTHDAY PARTIES</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#panel104" role="tab"><span><img src={girlscoutprg}/></span> GIRL'S SCOUT</a>
                    </li>
                </ul>
            
                
                <div className="tab-content">
                    <div className="tab-pane fade in show active" id="panel100" role="tabpanel">
                        <div className="container">
                            <div className="detail-box cw-orange col-md-12">
                                <div className="row">
                                    <div className="col-sm-6 coding-robotics">
                                        <div className="detail-img"></div>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4 className="bungee">CODING, ROBOTICS & 3D CLASSES</h4>
                                        <p>Lorem</p>
                                        <button className="btn">CHECK IT OUT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="panel101" role="tabpanel">
                        <div className="detail-box col-md-12">
                            <div className="row">
                                <div className="col-sm-6 team-based">
                                    <div className="detail-img"></div>
                                </div>
                                <div className="col-sm-6">
                                    <h4 className="bungee">TEAM-BASED ACTIVITIES</h4>
                                    <p>Lorem</p>
                                    <button className="btn">CHECK IT OUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="panel102" role="tabpanel">
                        <div className="detail-box col-md-12">
                            <div className="row">
                                <div className="col-sm-6 camps">
                                    <div className="detail-img"></div>
                                </div>
                                <div class="col-sm-6">
                                    <h4 className="bungee">SUMMER AND HOLIDAY CAMPS</h4>
                                    <p>Lorem</p>
                                    <button className="btn">CHECK IT OUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className="tab-pane fade" id="panel103" role="tabpanel">
                        <div className="detail-box col-md-12">
                            <div className="row">
                                <div className="col-sm-6 bday-party">
                                    <div className="detail-img"></div>
                                </div>
                                <div className="col-sm-6">
                                    <h4 className="bungee">BIRTHDAY PARTIES</h4>
                                    <p>Lorem</p>
                                    <button className="btn">CHECK IT OUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="panel104" role="tabpanel">
                        <div className="detail-box col-md-12">
                            <div className="row">
                                <div className="col-sm-6 girls-scout">
                                    <div className="detail-img"></div>
                                </div>
                                <div className="col-sm-6">
                                    <h4 className="bungee">Girl's scout</h4>
                                    <p>Lorem</p>
                                    <button className="btn">CHECK IT OUT</button>
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