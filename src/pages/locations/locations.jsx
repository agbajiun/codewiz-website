import React from 'react';

//import Directory from '../../components/directory/directory.component';
import AboutPageImg from '../../assets/images/Group-4.png';

import './locations.styles.scss';
import Button from '../../components/button/button.component';
import MapContainer from '../../components/google-map/google-map.component';
import '../../assets/js/maps';

const LocationsPage = () => (
    <div className="locations-content">
        <div className="container header-text-container">
            <div className="row">
                <div className="top-header col-sm-12 col-md-6">
                    <div className="text">
                        <h1 className="header-title cw-dark-blue bungee">FIND A LOCATION</h1> 
                        <h2 className="header-text cw-dark-blue">We make it fun and easy to learn code, wherever you are! Code Wiz offers a range of coding classes, flexible schedules and expert coaches in convenient locations throughout the Northeast. Enter your area code below to find the closest Code Wiz near you.</h2>
                        <Button color="orange" link="https://www.firstlegoleague.org/" size="medium">FIND A LOCATION</Button>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 mobile-img d-md-block d-lg-none order-1">
                    <img src={AboutPageImg} alt="About"/>
                </div>
            </div>
            {/* <img src={HomePageImg} className="header-image hidden-sm"/> */}
        </div>
        <div className="body-wrapper locations-wrapper">
            <div className="container find-a-location-container">
                <div className="row">
                    <div className="text abs right col-md-12">
                        <h3 className="bungee">find a code wiz center near you</h3>
                        {/* <input className="location-input" type="text" placeholder="ZIP, POSTAL CODE OR CITY"/> */}
                    </div>
                </div>
            </div>
            <div className="container empty-space-half bw-4"></div>
            <div className="container empty-space bw-5"></div>
        </div>
        <div id="map" className="map"></div>
        {/* <MapContainer /> */}
        <div className="location-links-container container">
            {/* <div className="row location-links">
                <a className="col-md-2" href="/jerseycity">JERSEY CITY, NJ</a>
                <a className="col-md-2" href="/westborough">WESTBOROUGH, MA</a>
                <a className="col-md-2" href="/westford">WESTFORD, MA</a>
                <a className="col-md-2" href="/arlington">ARLINGTON, MA</a>
                <a className="col-md-2" href="/reading">READING, MA</a>
            </div> */}
            <div className="row address-boxes">
                <div className="col-md-5 box">
                    <h4 className="cw-dark-blue">Jersey City, NJ</h4>
                    <p>357 3RD STREET JERSEY CITY NJ, 07302</p>
                    <span><i className="fa fa-phone"></i></span> <a href="tel:201-589-0199">(201)-589-0199</a><br/><br/>
                    <Button color="light-blue" link="/jerseycity" size="small">VISIT WEBSITE</Button>
                </div>
            
                <div className="col-md-5 box">
                    <h4 className="cw-dark-blue">Westborough, MA</h4>
                    <p>30 LYMAN ST. WESTBOROUGH, MA 01581</p>
                    <span><i className="fa fa-phone"></i></span> <a href="tel:508-277-4562">(508)-277-4562</a><br/><br/>
                    <Button color="light-blue" link="/westborough-ma" size="small">VISIT WEBSITE</Button>
                </div>

                <div className="col-md-5 box">
                    <h4 className="cw-dark-blue">Arlington, MA</h4>
                    <p>TBD ARLINGTON MA, TBD</p>
                    <span><i className="fa fa-phone"></i></span> <a href="tel:201-589-0199">(201)-589-0199</a><br/><br/>
                    <Button color="light-blue" link="/arlington-ma" size="small">VISIT WEBSITE</Button>
                </div>
            
                <div className="col-md-5 box">
                    <h4 className="cw-dark-blue">Westford, MA</h4>
                    <p>9 CORNERSTONE SQ. WESTFORD, MA 01886</p>
                    <span><i className="fa fa-phone"></i></span> <a href="tel:508-277-4562">(508)-277-4562</a><br/><br/>
                    <Button color="light-blue" link="/westford-ma" size="small">VISIT WEBSITE</Button>
                </div>

                <div className="col-md-5 box">
                    <h4 className="cw-dark-blue">Reading, MA</h4>
                    <p>347 MAIN STREET READING, MA 01867</p>
                    <span><i className="fa fa-phone"></i></span> <a href="tel:508-277-4562">(508)-277-4562</a><br/><br/>
                    <Button color="light-blue" link="/reading-ma" size="small">VISIT WEBSITE</Button>
                </div>
            </div>
        </div>
    </div>

);

export default LocationsPage;