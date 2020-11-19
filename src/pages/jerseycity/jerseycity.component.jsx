import React from 'react';
// import Header from './components/header/header.component';
import Franchisee from '../../components/franchisee/franchisee.component';

//import './westford.styles.scss';

class JerseyPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            location: 'Westford Location',
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
            <Franchisee name="Jersey"/>
    
        );
    }
}

export default JerseyPage;

