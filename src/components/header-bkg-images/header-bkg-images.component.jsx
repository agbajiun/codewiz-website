import React from 'react';

//import Directory from '../../components/directory/directory.component';
import HomePageImg from '../../assets/images/Group-4.png';

import './header-bkg-images.styles.scss';

const HeaderBkg = () => (
    <img src={HomePageImg} alt="background-image" className="bkg-img"/>
);

export default HeaderBkg;