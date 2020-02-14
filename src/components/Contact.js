/****************************************************************************
 * Contact bar functional component.
 * This is just a hardcoded page that displays my contact info, this doesn't
    utilize React props or state.
 * Also sets up a link to my linked in page, as well as telephone/email links.
 * ICONS: LinkedIn logo is from "https://brand.linkedin.com/downloads"
          --free to use logo.
 *      the other 2 icons are free public domain icons. Although they were found
        on "https://www.iconfinder.com/"
 ******************************************************************************/

import React from 'react';
import '../components_css/Contact.css';
import LN from '../assets/LI-In-Bug.png';
import Mail from '../assets/mail_icon.png';
import Phone from '../assets/phone.png';
import Fade from 'react-reveal';

class Contact extends React.Component {
 render(){
     return(
    <div className="contact_page">
        <Fade down>
        <div className="page_title">
            <h1>Contact:</h1>
        </div>
        </Fade>
        <div className="container">
            <Fade left>
            <a href="tel:541-806-0658">    
                <div className="contact_box">
                    <p1>Phone Number</p1>
                    <img src={Phone} id="phone_icon" alt="phone_number" />
                    <p>(541) 806-0658</p>
                </div>
            </a>   
            </Fade>
            <Fade up>
            <a href="mailto: dorich.peter@gmail.com">    
                <div className="contact_box">
                     <p1>Email</p1>
                    <img src={Mail} id="mail_icon" alt="email_icon" />
                    <p>dorich.peter@gmail.com</p>
                </div>
            </a>
            </Fade>
            <Fade right>
            <a href ="https://www.linkedin.com/in/peter-dorich-353b90159"
                    target="_blank"
                    id="lnID"
                    rel="noopener noreferrer">
                <div className="contact_box">
                    <p1>LinkedIn</p1>
                     <img src={LN} id="linkedIn" alt="LinkedIn Logo" />
                   <p>Visit my LinkedIn!</p>
                </div>
            </a>
            </Fade>
        </div>
    </div>
     );
 }
}



export default Contact;