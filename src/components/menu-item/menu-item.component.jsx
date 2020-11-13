import React from 'react';
import { withRouter } from 'react-router-dom';

import MenuItemDropdown from './menu-dropdown.component';
import './menu-item.styles.scss';

const MenuItem = ({title, history, linkUrl, match, dropdown, htmlId}) => {
    if (dropdown.length === 0){
        return (
            <li className="nav-item"><a className="nav-link" href={`${linkUrl}`}>{title.toUpperCase()}</a></li>
        );
    }
    else {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id={htmlId} href={`${linkUrl}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{title.toUpperCase()}</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby={htmlId}>{
                    dropdown.map(({id, ...otherDropdownProps}) =>(
                        <MenuItemDropdown key={id} {...otherDropdownProps} />
                    ))
                }
                </div>
            </li>
        );
    }
};

export default withRouter(MenuItem);
