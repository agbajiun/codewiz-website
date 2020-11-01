import React from 'react';
import './contact-info.styles.scss';

class ContactInfo extends React.Component {
    // construction(){
    //     super();

    //     this.state = {
    //         contacts: {
    //             sms: "(213) 279-2176",
    //             tollFree: "(877) 421-1498",
    //             uk: "+44 (20) 33501310",
    //             facebook: "https://www.facebook.com/codewizwestford",
    //             instagram: "https://www.instagram.com/codewizwestfordma/",
    //         }
    //     }
    // }

    render() {
        return (
            // <Contact key={id} (...otherContactProps) />
        <div className="contact-info col-md-12">
            <ul className="menu">
                <li><i className="fa fa-comments-o" aria-hidden="true"></i> <a href="tel:213-279-2176">(213) 279-2176</a></li>
                <li><i className="fa fa-phone" aria-hidden="true"></i> <a href="#">TOLL-FREE (877) 427-1498 | UK +44(20)33501310</a></li>
            </ul>
        </div>
        );
    }
}

export default ContactInfo;

