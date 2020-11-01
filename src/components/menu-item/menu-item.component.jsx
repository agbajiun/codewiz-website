import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({title, history, linkUrl, match}) => (
    // <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    //     <div className="background-image" />
    //     <div className="content">
    //         <h1 className="title">{title.toUpperCase()}</h1>
    //         <span className="subtitle">SHOP NOW</span>
    //     </div>
    // </div>
    <li className="nav-item"><a className="nav-link" href={`${linkUrl}`}>{title.toUpperCase()}</a></li>
);

export default withRouter(MenuItem);