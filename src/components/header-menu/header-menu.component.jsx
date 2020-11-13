import React from 'react';

import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/codewiz-logo.svg';
import ContactInfo from '../contact-info/contact-info.component';

import Menu from '../menu/menu.component';

import './header-menu.styles.scss';

const HeaderMenu = () => (
    <div className="content">
        <nav className="navbar navbar-expand-xl navbar-dark primary-color">
            <div className="logo navbar-brand">
                <div className="logo-link-div">
                    <Link className="logo-link" to="/">
                        <Logo className="logo" />
                    </Link>
                </div>
            </div>

            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#codeWizNav"
            aria-controls="codeWizNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse row codewizNavigation" id="codeWizNav">
                <ContactInfo />
                <div className="col-md-12 header-menu">
                    <Menu />
                </div>
            </div>
            
        </nav>
    </div>
);

export default HeaderMenu;