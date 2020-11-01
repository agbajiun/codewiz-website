import React from 'react';
import Review from '../review/review.component';

import './reviews.styles.scss';

class Reviews extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                review: 'Code Wiz is awesome!',
                author: 'l. Smith',
                id: 1
            },
            {
                review: 'My kids love Code Wiz',
                author: 'J. Johnson',
                id: 2
            }]
        }
    }

    render() {
        return (
            <div className="container reviews">
                <div className="row">
                {
                    this.state.sections.map(({id,...otherSectionProps}) => (
                        <Review key={id} {...otherSectionProps} />
                    ))
                }
                </div>
            </div>
        );
    }
}

export default Reviews;

