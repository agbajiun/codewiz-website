import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItemDropdown = ({title, dpLinkUrl, htmlId}) => (
    <a className="dropdown-item" href={`${dpLinkUrl}`}>{title}</a>
);

export default withRouter(MenuItemDropdown);