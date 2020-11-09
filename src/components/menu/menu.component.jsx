import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './menu.styles.scss';

class Menu extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                title: 'Home',
                linkUrl: '/',
                id: 1,
                htmlId: 'homeDropdownMenu',
                dropdown: [{
                    title: 'ABOUT US',
                    dpLinkUrl: '/about-us',
                    id: 10
                },
                {
                    title: 'BLOG',
                    dpLinkUrl: '/blog',
                    id: 11
                },
                {
                    title: 'CONTACT US',
                    dpLinkUrl: '/contact',
                    id: 12
                }
            ]
            },
            {
                title: 'PROGRAMS',
                linkUrl: '/programs',
                id: 2,
                htmlId: '',
                dropdown: [{
                    title: 'OVERVIEW',
                    dpLinkUrl: '/programs',
                    id: 13
                },
                {
                    title: "GIRL'S SCOUT",
                    dpLinkUrl: '/girls-scout',
                    id: 14
                },
                {
                    title: 'BIRTHDAY PARTIES',
                    dpLinkUrl: '/birthday-parties',
                    id: 15
                }]
            },
            {
                title: 'CLASSES',
                linkUrl: '/classes',
                id: 4,
                htmlId: '',
                dropdown: []
            },
            {
                title: 'CAMPS',
                linkUrl: '/camps',
                id: 5,
                htmlId: '',
                dropdown: []
            },
            {
                title: 'COMPETITIONS',
                linkUrl: '/competitions',
                id: 6,
                htmlId: '',
                dropdown: [{
                    title: 'OVERVIEW',
                    dpLinkUrl: '/competitions',
                    id: 16
                },
                {
                    title: "TECHNOVATION",
                    dpLinkUrl: '/technovation',
                    id: 17
                },
                {
                    title: 'FLL',
                    dpLinkUrl: '/fll',
                    id: 18
                }]
            },
            {
                title: 'FAQs',
                linkUrl: '/faqs',
                id: 7,
                htmlId: '',
                dropdown: []
            },
            {
                title: 'LOCATIONS',
                linkUrl: '/locations',
                id: 8,
                dropdown: []
            },
            {
                title: 'FRANCHISING',
                linkUrl: '/franchising',
                id: 9,
                dropdown: []
            }]
        }
    }

    render() {
        return (
            <div className="menu-navigation">
                <ul className="navbar-nav mr-auto col-md-12">
                {
                    this.state.sections.map(({id,...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
                </ul>
            </div>
            
        );
    }
}

export default Menu;

