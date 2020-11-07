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
                    title: 'About Us',
                    dpLinkUrl: '/about-us',
                    id: 10
                },
                {
                    title: 'Blog',
                    dpLinkUrl: '/blog',
                    id: 11
                },
                {
                    title: 'Contact Us',
                    dpLinkUrl: '/contact',
                    id: 12
                }
            ]
            },
            {
                title: 'Programs',
                linkUrl: '/programs',
                id: 2,
                htmlId: '',
                dropdown: [{
                    title: 'Overview',
                    dpLinkUrl: '/programs',
                    id: 13
                },
                {
                    title: "Girl's Scout",
                    dpLinkUrl: '/girls-scout',
                    id: 14
                },
                {
                    title: 'Birthday Parties',
                    dpLinkUrl: '/birthday-parties',
                    id: 15
                }]
            },
            {
                title: 'Classes',
                linkUrl: '/classes',
                id: 4,
                htmlId: '',
                dropdown: []
            },
            {
                title: 'Camps',
                linkUrl: '/camps',
                id: 5,
                htmlId: '',
                dropdown: []
            },
            {
                title: 'Competitions',
                linkUrl: '/competitions',
                id: 6,
                htmlId: '',
                dropdown: [{
                    title: 'Overview',
                    dpLinkUrl: '/competitions',
                    id: 16
                },
                {
                    title: "Technovation",
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
                title: 'Locations',
                linkUrl: '/locations',
                id: 8,
                dropdown: []
            },
            {
                title: 'Franchising',
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

