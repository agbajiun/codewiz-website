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
                id: 1
            },
            {
                title: 'Programs',
                linkUrl: '/programs',
                id: 2
            },
            {
                title: 'Online Offerings',
                linkUrl: '/online-offerings',
                id: 3
            },
            {
                title: 'Classes',
                linkUrl: '/classes',
                id: 4
            },
            {
                title: 'Camps',
                linkUrl: '/camps',
                id: 5
            },
            {
                title: 'Competitions',
                linkUrl: '/competitions',
                id: 6
            },
            {
                title: 'FAQs',
                linkUrl: '/faqs',
                id: 7
            },
            {
                title: 'Locations',
                linkUrl: '/locations',
                id: 8
            },
            {
                title: 'Franchising',
                linkUrl: '/franchising',
                id: 9
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

