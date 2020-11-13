import React from 'react';

//import Directory from '../../components/directory/directory.component';
import HomePageImg from '../../assets/images/Group-4.png';
import HomePageMobileImg from '../../assets/images/camps-and-summer-header-1.png';

import './header-bkg-images.styles.scss';

const HeaderBkg = () => (
    <img src={HomePageImg} alt="home background" className="bkg-img d-none d-lg-block"/>
);

export default HeaderBkg;