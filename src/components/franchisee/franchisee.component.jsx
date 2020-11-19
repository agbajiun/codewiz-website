import React, {Component, Fragment} from 'react';
// import firebase from '../Firebase/firebase.js';

import AboutPageImg from '../../assets/images/Group-4.png';
import AboutSpark from '../../assets/images/image-2.png';
import AboutGivingBack from '../../assets/images/giving-back-image.png';
import CityImage from '../../assets/images/location-pin.png';
import CodingRobotics from '../../assets/images/landing-page-coding-robotics.png';
import WhyCodewiz from '../../assets/images/landing-page-why-codewiz.png';
import MidBkgImage from '../../assets/images/landing-page-mid bkg.png';

import Button from '../../components/button/button.component';
import Review from '../../components/review/review.component';
import RuthImg from '../../assets/images/ruth-agbaji.jpg';
import EstherImg from '../../assets/images/esther.jpg';

import './franchisee.styles.scss';

class Franchisee extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            name: props.name,
            headertext: "Unlock Your Child's Inner Genius",
            fallclasses: "https://app.iclasspro.com/portal/codewiz/classes",
            tryfreeclass: "https://codewiz.simplybook.me/v2/#book",
            parentportal : "https://app.iclasspro.com/portal/codewiz/booking/wizard-question-01",
            classschedule: "https://app.iclasspro.com/portal/codewiz/classes",
            facebook: "https://www.facebook.com/codewizwestford",
            instagram: "https://www.instagram.com/codewizwestfordma/",
            addressstreet: "9 Cornerstone Sq.",
            citystate: "Westford, Massachusetts",
            city: "Westford",
            state: "MA",
            zip: "01886",
            phone: "(978) 496-1053",
            email: "westford@thecodewiz.com",
            team: [
                {name: 'Ruth Agbaji', title: 'Owner/Tutor In Chief', picture: ''},
                {name: 'Brenda Austin', title: 'Centre Director', picture: ''},
                {name: 'Emmie Ohn', title: 'Coach', picture: ''},
                {name: 'Esther Agbaji', title: 'Tech Nerd', picture: ''}
            ],
            map: props.name + "-map"
        }
    }


    render(){
        return (
            <div className="subsite" id={this.state.name}> 
                <div className="container header-text-container">
                    <div className="row">
                        <div className="top-header col-sm-12 col-md-6">
                            <div className="text">
                                <h1 className="header-title cw-dark-blue bungee">{this.state.headertext}</h1> 
                                <h3 className="header-text cw-dark-blue map-pin"><span><img src={CityImage}/></span>{this.state.citystate}</h3> 
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 mobile-img d-md-block d-lg-none order-1">
                            <img src={AboutPageImg} alt="About"/>
                        </div>
                    </div>
                    {/* <img src={HomePageImg} className="header-image hidden-sm"/> */}
                </div>
                <div className="body-wrapper cw-dark-blue">
                    <div className="container">
                        <div className="empty-space-half"></div>
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="bungee">code. create. grow.</h3>
                                <p className="">Give  your child the chance to learn life-shaping skills with fun, flexible programs offered online or at our Westford location.</p>
                                <Button color="orange" link={this.state.fallclasses} size="medium">SEE FALL SCHEDULE</Button>
                                <Button color="blue" link={this.state.classschedule} size="medium">VIEW ALL CLASSES</Button>
                            </div>
                            <div className="col-md-6 form-white">
                                <h3 className="bungee cw-dark-blue">get in touch</h3>
                                <p className="cw-dark-blue">Try a free class, see all schedules and view all classes</p>
                                <form id="cw-contact-form" className="contact-form cw-dark-blue" action="https://docs.google.com/forms/u/2/d/e/1FAIpQLScz3Dvot-sHEb3aWpKp0ucYKXjMYgw2L6dxTc8hlkqMBBQeCA/formResponse">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputFirst">First Name</label>
                                            <input name="entry.1123156379" type="text" className="form-control" id="inputFirst" placeholder="firstname"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputLast">Last Name</label>
                                            <input name="entry.1695660224" type="text" className="form-control" id="inputLast" placeholder="lastname"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Email</label>
                                            <input name="emailAddress" type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPhone">Phone</label>
                                            <input name="entry.1582897065" type="tel" className="form-control" id="inputPhone" placeholder="123-456-7890"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputState">How can we help?</label>
                                            <select name="entry.923012768" id="inputState" className="form-control">
                                            <option value="option-1">Signing up for a trial class</option>
                                            <option value="option-2">More information</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputAge">Child's Age</label>
                                            <input name="entry.2124218212" type="number" className="form-control" id="inputAge"/>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <label className="form-check-label" htmlFor="gridCheck">
                                                By submitting this form, you are consenting to be contacted by Code Wiz and you will be added to their mailing list.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn orange-button" target="_blank">SEND</button>
                                </form>
                            </div>
                        </div>
                        <div className="empty-space"></div>
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="bungee">coding and robotics classes in Westford, MA</h3>
                                <p>Students of all ages and skill levels learn programming while strengthening their critical thinking and problem-solving capabilities. Help your kid become a wiz - try a free class today!</p>
                                <Button color="orange" link={this.state.tryfreeclass} size="medium">TRY A FREE ONLINE CLASS</Button>
                            </div>
                            <div className="col-md-6">
                                <img src={CodingRobotics} alt=""/>
                            </div>
                        </div>
                        <div className="empty-space-half"></div>
                        <div className="row">
                            <div className="col-md-6">
                                <img className="width-100" src={WhyCodewiz} alt=""/>
                            </div>
                            <div className="col-md-6">
                                <h3 className="bungee">why code wiz?</h3>
                                <h5 className="bungee">project-driven, student-steered learning</h5>
                                <p>Kids create by completing projects rather than lessons or levels</p>

                                <h5 className="bungee">really cool rewards</h5>
                                <p>We reward learning with Code Wiz gear and other awesome prizes</p>

                                <h5 className="bungee">community connectivity</h5>
                                <p>Students can check their work online and get inspired by peer projects</p>

                                <h5 className="bungee">progress at your fingertips</h5>
                                <p>Stay connected to your child's success with automated progress report emails</p>

                                <h5 className="bungee">free, no-strings intro class</h5>
                                <p>See how learning to code can change your child's life-all classes are offered online!</p>
                                <br/>

                                <Button color="orange" link={this.state.tryfreeclass} size="medium">TRY A FREE ONLINE CLASS</Button>
                            </div>
                        </div>  
                    </div>
                    <div className="empty-space"></div>
                    <div className="empty-space-half"></div>
                </div>
                <div className="container contact-info-contact-page">
                    <div className="mid-layer">
                        <h3 className="bungee center cw-dark-blue">location</h3>
                        <div className="row">
                            <div className="col">
                                <div className="contact-circle"><i className="fa fa-map-marker fa-5x cw-orange"></i></div>
                                <h5>ADDRESS:</h5>
                                <p>9 Cornerstone Sq <br/> Westford, MA 01886</p>
                            </div>
                            <div className="col">
                                <div className="contact-circle"><i className="fa fa-phone fa-5x cw-orange"></i></div>
                                <h5>CONTACT:</h5>
                                <p><a href="tel:9784961053">(978) 496-1053</a> <br/>
                                <a href="mailto:westford@thecodewiz.com">westford@thecodewiz.com</a></p>
                            </div>
                            <div className="col">
                                <div className="contact-circle"><i className="fa fa-map-marker fa-5x cw-orange"></i></div>
                                <h5>HOURS:</h5>
                                <p>
                                    Tue: 5.00PM - 7.00PM <br/>
                                    Wed: 4.00PM - 7.00PM <br/>
                                    Thu: 4.00PM - 7.00PM <br/>
                                    Fri: 4.00PM - 7.00PM <br/>
                                    Sat: 10.00AM - 2.00PM
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 center"><Button color="orange" link={this.state.tryfreeclass} size="medium">TRY A FREE ONLINE CLASS</Button></div>

                {/* <!-- Location Map --> */}
                <div id={this.state.map} className="map"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 center">
                            <h3 className="bungee cw-orange">reviews</h3>
                            <h4 className="bungee cw-dark-blue">Ecstatic students <br/> happy parents</h4>
                            <section className="pt-5 pb-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6"></div>
                                        <div className="col-6 text-right">
                                            <a className="btn btn-primary mb-3 mr-1" href="#parentreviews" role="button" data-slide="prev">
                                                <i className="fa fa-arrow-left"></i>
                                            </a>
                                            <a className="btn btn-primary mb-3 " href="#parentreviews" role="button" data-slide="next">
                                                <i className="fa fa-arrow-right"></i>
                                            </a>
                                        </div>
                                        <div className="col-12">
                                            <div id="parentreviews" className="carousel slide" data-ride="carousel">
                                
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <div className="row">
                                                            <Review review="text text text 1" author="Satisfied Parent"/>
                                                            <Review review="text text text 2" author="Satisfied Parent 2"/>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <div className="row">
                                                            <Review review="text text text 3" author="Satisfied Parent 3"/>
                                                            <Review review="text text text 4" author="Satisfied Parent 4"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h3 className="bungee cw-dark-blue center">Our Team</h3>
                    <h5 className="center">Meet the Westford Team</h5>
                    <div className="row team-row">
                        <section className="pt-5 pb-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        {/* <!-- <h3 class="mb-3">Carousel cards title </h3> --> */}
                                    </div>
                                    <div className="col-6 text-right">
                                        <a className="btn btn-primary mb-3 mr-1" href="#teamCarousel" role="button" data-slide="prev">
                                            <i className="fa fa-arrow-left"></i>
                                        </a>
                                        <a className="btn btn-primary mb-3 " href="#teamCarousel" role="button" data-slide="next">
                                            <i className="fa fa-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="col-12">
                                        <div id="teamCarousel" className="carousel slide" data-ride="carousel">
                            
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="row">
                            
                                                        <div className="col-md-3 mb-3">
                                                            <div className="teammate center">
                                                                <img src={RuthImg} className="team-picture"/><br/>
                                                                <span className="team-member-name center">RUTH AGBAJI</span><br/>
                                                                <span className="team-member-position center">Owner/Tutor In Chief</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <div className="teammate center">
                                                                <img src={RuthImg} className="team-picture"/><br/>
                                                                <span className="team-member-name center">BRENDA AUSTIN</span><br/>
                                                                <span className="team-member-position center">Centre Director</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <div className="teammate center">
                                                                <img src={RuthImg} className="team-picture"/><br/>
                                                                <span className="team-member-name center">EMMIE OHN</span><br/>
                                                                <span className="team-member-position center">Coach</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <div className="teammate center">
                                                                <img src={EstherImg} className="team-picture"/><br/>
                                                                <span className="team-member-name center">ESTHER AGBAJI</span><br/>
                                                                <span className="team-member-position center">Tech Nerd</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="row">
                                                        <div className="col-md-3 mb-3">
                                                            <div className="teammate center">
                                                                <img src={RuthImg} className="team-picture"/><br/>
                                                                <span className="team-member-name center">RUTH AGBAJI</span><br/>
                                                                <span className="team-member-position center">Owner/Tutor In Chief</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <div className="teammate center">
                                                                <img src={RuthImg} className="team-picture"/><br/>
                                                                <span className="team-member-name center">RUTH AGBAJI</span><br/>
                                                                <span className="team-member-position center">Owner/Tutor In Chief</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <div className="teammate center">
                                                                <img src={RuthImg} className="team-picture"/><br/>
                                                                <span className="team-member-name center">RUTH AGBAJI</span><br/>
                                                                <span className="team-member-position center">Owner/Tutor In Chief</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <div className="teammate center">
                                                                <img src={RuthImg} className="team-picture"/><br/>
                                                                <span className="team-member-name center">RUTH AGBAJI</span><br/>
                                                                <span className="team-member-position center">Owner/Tutor In Chief</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>



            </div>
        );
    }
}

export default Franchisee
