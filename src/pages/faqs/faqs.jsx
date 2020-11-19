import React from 'react';

//import Directory from '../../components/directory/directory.component';
import AboutPageImg from '../../assets/images/Group-4.png';

import './faqs.styles.scss';
import Button from '../../components/button/button.component';

const FAQPage = () => (
    <div className="competitions-content">
        <div className="container header-text-container">
            <div className="row">
                <div className="top-header col-sm-12 col-md-6">
                    <div className="text">
                        <h1 className="header-title cw-dark-blue bungee">FAQS</h1> 
                        <h2 className="header-text cw-dark-blue">&nbsp;</h2>
                        <Button color="blue" link="https://www.firstlegoleague.org/" size="medium">LEARN MORE</Button>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 mobile-img d-md-block d-lg-none order-1">
                    <img src={AboutPageImg} alt="About"/>
                </div>
            </div>
            {/* <img src={HomePageImg} className="header-image hidden-sm"/> */}
        </div>
        <div className="body-wrapper competitions-wrapper">
            <div className="container party-options">
                <div className="cw-dark-blue">
                    <h4 className="bungee">GENERAL FAQS</h4>
                    <div id="accordion">
                        <div className="card">
                            <div className="card-header" id="generalFaqOne">
                                <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span><i className="fas fa-arrow-alt-circle-down"></i></span>
                                    <h5 className="bungee cw-dark-blue">Do we get feedback on what our kids are working on?</h5>
                                    
                                </button>
                                </h5>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="generalFaqOne" data-parent="#accordion">
                                <div className="card-body">
                                    Yes, total transparency is very important to us. At the end of the class, kids are encouraged to share the amazing projects they’ve been working on. We also send routine progress report emails that include links to your child’s completed projects.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="generalFaqTwo">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <h5 className="bungee cw-dark-blue">Do you offer group classes or personalized classes?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="generalFaqTwo" data-parent="#accordion">
                                <div className="card-body">
                                    All classes are personalized to your child’s interests, skills and goals. We tailor the experience for each child to ensure that they are always learning and working on projects that they are excited for and truly passionate about. 
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="generalFaqThree">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <h5 className="bungee cw-dark-blue">How long will it take my child to learn coding?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="generalFaqThree" data-parent="#accordion">
                                <div className="card-body">
                                    Learning to code is like learning a new language—the more you practice, the better you get! Some kids breeze through their lessons and projects while others take a little more time. That’s why Code Wiz has a project-based curriculum that supports all speeds of learning. For us, the most important takeaway is that your child understands the programming concepts and builds computational thinking skills that will serve them through life.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="generalFaqFour">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <h5 className="bungee cw-dark-blue">Can we do more than one class per week?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="generalFaqFour" data-parent="#accordion">
                                <div className="card-body">
                                    Absolutely!
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="generalFaqFive">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    <h5 className="bungee cw-dark-blue">Pay by class or by session?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="collapseFive" className="collapse" aria-labelledby="generalFaqFive" data-parent="#accordion">
                                <div className="card-body">
                                    We know flexibility is important, which is why we will never tie you into a long-term contract. We bill monthly and will continue to enroll your child in the next month of courses. If you ever wish to pause classes, all you have to do is provide a 30-day cancellation notice.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="generalFaqSix">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    <h5 className="bungee cw-dark-blue">Do the kids get homework?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="collapseSix" className="collapse" aria-labelledby="generalFaqSix" data-parent="#accordion">
                                <div className="card-body">
                                    We offer the option to have take-home practice. However, we do not require that these assignments be submitted. If your child is enthusiastic enough to take on extra work and would like additional feedback and coaching, this service is available for a small added cost.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="generalFaqSeven">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    <h5 className="bungee cw-dark-blue">Do you offer trial classes?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="collapseSeven" className="collapse" aria-labelledby="generalFaqSeven" data-parent="#accordion">
                                <div className="card-body">
                                    Absolutely! We know your child will love coding, and we are excited to show them how it’s done! All you have to do is choose a time slot that works best for you—simply click here to schedule a trial class. 
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="generalFaqEight">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                    <h5 className="bungee cw-dark-blue">Are you classes session-based?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="collapseEight" className="collapse" aria-labelledby="generalFaqEight" data-parent="#accordion">
                                <div className="card-body">
                                    No. We offer personalized classes for each child and that allows for a student to start at any time because he or she would be working on lessons and projects independently of other kids.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="generalFaqNine">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                    <h5 className="bungee cw-dark-blue">It's the middle of the month. Can I still sign up for classes?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="collapseNine" class="collapse" aria-labelledby="generalFaqNine" data-parent="#accordion">
                                <div className="card-body">
                                    Yes, it’s never too late to learn how to code! Your cost will be prorated based on the number of weeks left in the month.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="generalFaqTen">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                    <h5 className="bungee cw-dark-blue">My child has some coding experience. Are your classes appropriate for her?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="collapseTen" className="collapse" aria-labelledby="generalFaqTen" data-parent="#accordion">
                                <div className="card-body">
                                    Yes, we welcome all levels! Prior to starting a class, we will evaluate your child to ensure they are placed at a level that will challenge them appropriately.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="generalFaqEleven">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                    <h5 className="bungee cw-dark-blue">What is your coach : student ratio?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="collapseEleven" className="collapse" aria-labelledby="generalFaqEleven" data-parent="#accordion">
                                <div className="card-body">
                                    We are proud to offer hands-on, personalized instruction. Our class sizes average 1:4 for our younger kids and 1:6 for our older, more independent kids. 
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="generalFaqTwelve">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                    <h5 className="bungee cw-dark-blue">What course options do you have for older/younger kids?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="collapseTwelve" className="collapse" aria-labelledby="generalFaqTwelve" data-parent="#accordion">
                                <div className="card-body">
                                    Tons! Our infographic explains it best <a href="www.thecodewiz.com/our-programs">www.thecodewiz.com/our-programs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className="container party-options">
                <div className="cw-dark-blue">
                    <h4 className="bungee">CAMPS FAQS</h4>
                    <div id="accordion">
                        <div className="card">
                            <div className="card-header" id="campFaqOne">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#campCollapseOne" aria-expanded="false" aria-controls="campCollapseOne">
                                    <h5 className="bungee cw-dark-blue">What’s your cancellation policy?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="campCollapseOne" className="collapse" aria-labelledby="campFaqOne" data-parent="#accordion">
                                <div className="card-body">
                                    In order to cancel your child’s classes at Code Wiz, a completed withdrawal form must be submitted in writing at least 30 days prior to the last class. Please confirm receipt of all emailed or faxed withdrawal forms due to potential transmission errors.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="campFaqTwo">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#campCollapseTwo" aria-expanded="false" aria-controls="campCollapseTwo">
                                    <h5 className="bungee cw-dark-blue">What ages can participate?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="campCollapseTwo" className="collapse" aria-labelledby="campFaqTwo" data-parent="#accordion">
                                <div className="card-body">
                                    We have fun, challenging, informative courses for kids ages 7 – 17!
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="campFaqThree">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#campCollapseThree" aria-expanded="false" aria-controls="campCollapseThree">
                                    <h5 className="bungee cw-dark-blue">Do you offer trial classes?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="campCollapseThree" className="collapse" aria-labelledby="campFaqThree" data-parent="#accordion">
                                <div className="card-body">
                                    Absolutely! We know your child will love coding at our camp sessions, and we are excited to show them how it’s done! All you have to do is choose a time slot that works best for you—simply click here to schedule a trial class. 
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="campFaqFour">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#campCollapseFour" aria-expanded="false" aria-controls="campCollapseFour">
                                    <h5 className="bungee cw-dark-blue">What are your hours? Do you have extended day options?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="campCollapseFour" className="collapse" aria-labelledby="campFaqFour" data-parent="#accordion">
                                <div className="card-body">
                                    Our summer programs are from 9 am-4 pm. Please let us know in advance if you need extended care for an additional fee. Please contact the location closest to you for aftercare pricing.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="campFaqFive">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#campCollapseFive" aria-expanded="false" aria-controls="campCollapseFive">
                                    <h5 className="bungee cw-dark-blue">Can my child attend half-day programs? Or will my child fall behind?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="campCollapseFive" className="collapse" aria-labelledby="campFaqFive" data-parent="#accordion">
                                <div className="card-body">
                                    Our half-day programs offer the same enriching experience as the full-day camps. Regardless of the time spent with us, your child will finish the week with at least one successful, completed project!
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="campFaqSix">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#campCollapseSix" aria-expanded="false" aria-controls="campCollapseSix">
                                    <h5 className="bungee cw-dark-blue">What summer programs do you offer?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="campCollapseSix" className="collapse" aria-labelledby="campFaqSix" data-parent="#accordion">
                                <div className="card-body">
                                    Please click here to see a list of our locations and their summer programs.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="campFaqSeven">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#campCollapseSeven" aria-expanded="false" aria-controls="campCollapseSeven">
                                    <h5 className="bungee cw-dark-blue">What is the day like?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="campCollapseSeven" className="collapse" aria-labelledby="campFaqSeven" data-parent="#accordion">
                                <div className="card-body">
                                    Students generally spend the first half of their day reviewing lessons. During the second half, our kids dive right in applying that knowledge to their individual projects. Their coach is always closeby to inspire, empower and answer any questions.<br/>
                                    It is important that our students also socialize and get to know one another, which is why we offer two 30-minute snack breaks and a lunch hour. During this time, they can take a mental break to play games, make new friends and get out some energy!
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="campFaqNine">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#campCollapseNine" aria-expanded="false" aria-controls="campCollapseNine">
                                    <h5 className="bungee cw-dark-blue">How will I know what my child has learned?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="campCollapseNine" className="collapse" aria-labelledby="campFaqNine" data-parent="#accordion">
                                <div className="card-body">
                                    We encourage parents to arrive early on the last day of our program so they can see what their children worked on. Every student completes our program with at least two independent projects. You’ll also receive a progress report, including links to any other work they did.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="campFaqTen">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#campCollapseTen" aria-expanded="false" aria-controls="campCollapseTen">
                                    <h5 className="bungee cw-dark-blue">How old are your students?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="campCollapseTen" className="collapse" aria-labelledby="campFaqTen" data-parent="#accordion">
                                <div className="card-body">
                                    Our coders are 7-17.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="campFaqEleven">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#campCollapseEleven" aria-expanded="false" aria-controls="campCollapseEleven">
                                    <h5 className="bungee cw-dark-blue">How are the different age groups separated for summer camp?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="campCollapseEleven" className="collapse" aria-labelledby="campFaqEleven" data-parent="#accordion">
                                <div className="card-body">
                                    For the most part, our programs are grouped by age: 7-9, 10-12 and 13+. Students all work on projects determined by their individual skill levels, but we aim to keep them situated with their peers throughout the duration of the program. 
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="campFaqTwelve">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#campCollapseTwelve" aria-expanded="false" aria-controls="campCollapseTwelve">
                                    <h5 className="bungee cw-dark-blue">Does my child need to bring a computer?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="campCollapseTwelve" className="collapse" aria-labelledby="campFaqTwelve" data-parent="#accordion">
                                <div className="card-body">
                                    Nope! We provide everything your child needs to succeed. Our team ensures computer stations are set up and ready to go on their very first day.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="campFaqThirteen">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#campCollapseThirteen" aria-expanded="false" aria-controls="campCollapseThirteen">
                                    <h5 className="bungee cw-dark-blue">Who are your coaches?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="campCollapseThirteen" className="collapse" aria-labelledby="campFaqThirteen" data-parent="#accordion">
                                <div className="card-body">
                                    Our coaches all have extensive coding experience and are assigned to camps based on their area of expertise and ability to work well with and motivate kids. All staff is CORI checked and there is always someone on duty who is trained in basic first aid. 
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="campFaqFourteen">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#campCollapseFourteen" aria-expanded="false" aria-controls="campCollapseFourteen">
                                    <h5 className="bungee cw-dark-blue">Do you provide lunch and snacks?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="campCollapseFourteen" className="collapse" aria-labelledby="campFaqFourteen" data-parent="#accordion">
                                <div className="card-body">
                                    In order to ensure the safety of the students with food allergies, we ask all families to please provide both snacks and lunch which are completely nut-free.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="campFaqFifteen">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#campCollapseFifteen" aria-expanded="false" aria-controls="campCollapseFifteen">
                                    <h5 className="bungee cw-dark-blue">What is your cancellation policy?</h5>
                                </button>
                                </h5>
                            </div>
                            <div id="campCollapseFifteen" className="collapse" aria-labelledby="campFaqFifteen" data-parent="#accordion">
                                <div className="card-body">
                                    Cancellations made two or more weeks prior to camp will receive a full refund, minus a $75 processing fee. Cancellations after that are non-refundable.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

);

export default FAQPage;