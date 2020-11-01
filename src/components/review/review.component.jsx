import React from 'react';
//import { withRouter } from 'react-router-dom';

import './review.styles.scss';

const Review = ({review, author}) => (
    <div className="col-md-6">
        <div className="review-box">
            <p className="review">{review}</p>
            <p className="review-name col-md-8">{author}</p>
        </div>
    </div>
);

export default Review;