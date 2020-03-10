/*************************************************************************
 * About page for some more information about me as a person.
 * 
 * I plan to include a picture of the Tree Farm soon once I can take it
 *************************************************************************/

 import React from 'react';
 import '../components_css/About.css';
 import Fade from 'react-reveal';

 const About = () => (
     <div className="about=">
        <div className="about_header">
             <h1>A little bit about me:</h1>
        </div>        
        <Fade left cascade>
        <div className="about_bio">
             <p>As a new Computer Science graduate from Oregon State University, I am ready and eager to fit into whatever software engineering position that is needed. Having been exposed to many core computer science concepts, I am ready to hit the ground running wherever desired. If I haven’t learned something, I am not afraid to admit it, and will work tirelessly to learn it as fast as I can. </p>
             <p>I was born and raised in Hood River, Oregon, and I would be thrilled with an opportunity to stay here and work as a software engineer. My family owns a Christmas Tree farm in the valley which I have loved working on my entire life.</p>
             <p>In my free time I enjoy all of which Hood River has to offer, which includes skiing on Mt. Hood in the winter, and boating and wakeboarding on the Columbia River Gorge in the summer.</p>
        </div>
        </Fade> 
     </div>
 )

 export default About;