import React from 'react';

//import Directory from '../../components/directory/directory.component';
import AboutPageImg from '../../assets/images/Group-4.png';
import BirthdayOzo from '../../assets/images/bday-ozo.png';
import BirthdayMindstorms from '../../assets/images/bday-mindstorms.png';
import BirthdayRoblox from '../../assets/images/bday-roblox.png';
import BirthdayMinecraft from '../../assets/images/bday-minecraft.png';
import BirthdayTynker from '../../assets/images/bday-tynker.png';

import './birthday-parties.styles.scss';
import Button from '../../components/button/button.component';

const BirthdayPartiesPage = () => (
    <div className="birthday-parties-content">
        <div className="container header-text-container">
            <div className="row">
                <div className="top-header col-sm-12 col-md-6">
                    <div className="text">
                        <h1 className="header-title cw-dark-blue bungee">BIRTHDAY PARTIES</h1> 
                        <h2 className="header-text cw-dark-blue">Gear up for another great year with an unforgettable tech-powered celebrationat Code Wiz</h2>
                        <Button color="orange" link="https://codewiz.simplybook.me/v2/#book" size="medium">FIND A LOCATION</Button>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 mobile-img d-md-block d-lg-none order-1">
                    <img src={AboutPageImg} alt="About"/>
                </div>
            </div>
            {/* <img src={HomePageImg} className="header-image hidden-sm"/> */}
        </div>
        <div className="body-wrapper birthday-parties-wrapper">
            <div className="container party-options">
                <div className="center cw-dark-blue">
                    <h3 className="bungee">party options & pricing</h3>
                    <p>Code Wiz is big on flexible fun: we offer a range of party themes to accommodate all ages, interests and budgets. All of our parties last for 90 minutes, which breaks down into 60 minutes of playtime and a 30-minute break for refreshments. Feel free to bring in pizza, drinks, dessert and cake, and we’ll gladly take care of basic plasticware.
                        Learn more about the parties your kids and their friends will never forget!
                    </p>
                </div>
                <div className="row">
                    <div className="image col-md-6 order-md-1">
                        <img src={BirthdayOzo} alt="Ozo Birthday"/>
                    </div> 
                    <div className="text col-md-6 order-md-2 cw-dark-blue">
                        <h3 className="bungee">ozobots bash</h3>
                        <p>Tiny, little robots make for big-time fun! To program Ozobots, kids use color markers and draw paths for the robots to follow. Through these easy, enjoyable activities, kids learn to code and create robots that navigate custom mazes.</p>
                        <ul>
                            <li>Offered only in person</li>
                            <li>Price includes up to 15 children</li>
                            <li>Age 6+</li>
                        </ul>
                    </div>
                </div>
                <div className="container empty-space-half bw-4"></div>
                <div className="row"> 
                    <div className="text col-md-6 order-md-1 cw-dark-blue">
                        <h3 className="bungee">LEGO® MINDSTORMS® + WeDo Party</h3>
                        <p>Bring Legos to life using one of our Lego WeDo kits and instructions. Working in teams of up to three, party-goers have fun building while learning about motors, belts, gears, building and some basic coding.</p>
                        <ul>
                            <li>Offered only in person</li>
                            <li>Price includes up to 15 children</li>
                            <li>Age 6+</li>
                        </ul>
                    </div>
                    <div className="image col-md-6 order-md-2 cw-dark-blue">
                        <img src={BirthdayMindstorms} alt="Mindstorms Birthday"/>
                    </div>
                </div>
                <div className="container empty-space-half bw-4"></div>
                <div className="row">
                    <div className="image col-md-6 order-md-1">
                        <img src={BirthdayRoblox} alt="Roblox Birthday"/>
                    </div> 
                    <div className="text col-md-6 order-md-2 cw-dark-blue">
                        <h3 className="bungee">Rock with Robolox</h3>
                        <p>Join forces and enjoy playing Roblox in the same room, all at once! The Code Wiz coaches set up a server to help party-goers enjoy a fun experience with up to 60 minutes of seamless playtime. Plus, the server is continually monitored by staff to ensure the connection is safe from internet predators.</p>
                        <ul>
                            <li>Offered in person and online</li>
                            <li>Price includes up to 10 kids.</li>
                            <li>Recommended age: 7+</li>
                            <li>Recommended that party goers should have basic familiarity playing Roblox.</li>
                        </ul>
                    </div>
                </div>
                <div className="container empty-space-half bw-4"></div>
                <div className="row"> 
                    <div className="text col-md-6 order-md-1 cw-dark-blue">
                        <h3 className="bungee">Minecrafters United</h3>
                        <p>Have fun and make memories by bringing Minecraft enthusiasts to play together in the same room, at the same time! Choose from Bedwards, Spleef or Hunger Games maps. Or, if party-goers prefer to play in Create mode, we can take care of that, too! Our team sets up a single, secure server and helps all of the party goers get connected to enjoy 60 minutes of worry-free playtime. </p>
                        <ul>
                            <li>Offered in person and online</li>
                            <li>Price includes up to 10 kids.</li>
                            <li>Recommended age: 7+</li>
                        </ul>
                        <p>Party goers should have basic familiarity with playing Minecraft for a fun experience!</p>
                    </div>
                    <div className="image col-md-6 order-md-2 cw-dark-blue">
                        <img src={BirthdayMinecraft} alt="Minecraft Birthday"/>
                    </div>
                </div>
                <div className="container empty-space-half bw-4"></div>
                <div className="row">
                    <div className="image col-md-6 order-md-1">
                        <img src={BirthdayTynker} alt="Tynker Birthday"/>
                    </div> 
                    <div className="text col-md-6 order-md-2 cw-dark-blue">
                        <h3 className="bungee">Tynker Time</h3>
                        <p>Show your child and their friends that the sky is truly the limit. During this party, kids can create video games, animations, design characters and make them come to life all in Tynker’s amazing, kid-friendly coding platform. Party-goers are free to work independently or team up to create funny comic books, dragon race games and more with simple, drag-and-drop coding blocks!</p>
                        <ul>
                            <li>Offered in person and online</li>
                            <li>Price includes up to 15 kids.</li>
                            <li>Recommended age: 7+</li>
                        </ul>
                    </div>
                </div> 
            </div>
            <div className="container center cw-dark-blue">
                <p>Get the party started! Contact us to reserve space for your kid's special day today</p><br />
                <button className="btn orange-button">FIND A LOCATION</button>  
            </div>
            
        </div>
        
    </div>

);

export default BirthdayPartiesPage;