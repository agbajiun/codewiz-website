import React from 'react';

import HeaderDetails from '../header-details/header-details.component';
import HeaderBkg from '../header-bkg-images/header-bkg-images.component';

//import Contact from '../contact-info/contact-info.component';

import './header.styles.scss';

const Header = (props) => (
    <header className="page-header">
        <HeaderDetails />
        <HeaderBkg image={props.image}/>
    </header>
);

export default Header;

