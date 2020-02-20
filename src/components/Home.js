/*****************************************************************************
 * Home page function.
 * This will be what is displayed on the homepage.
 * Homepage will generally remain static, so its hardcoded in JSX for now,
   rather than dynamically loaded from a file.
 *****************************************************************************/

import React from 'react';
import profile_pic from '../assets/profile_pic.png';
import '../components_css/Home.css';
import Fade from 'react-reveal';

const Home = () => (
    <div className='Home'>
        <div className="home_container">
        <div className="column">
            <Fade down>
                <h1>Peter Dorich</h1>
            </Fade>
            <Fade left cascade >
                <div className="container_info">
                    <h3><li>Computer Science Degree from Oregon State University.</li></h3>
                    <h3><li>Minor in Business and Entrepreneurship.</li></h3>
                    <h3><li>Seeking Software Engineering job in the Columbia River Gorge.</li></h3>
                    <h3><li>Take a look at my Resume and a few of my favorite projects!</li></h3>
                </div>
           </Fade>
        </div>
        <div className="column">
        <Fade right>
                <img src={profile_pic} id="profile_pic" alt="Peter_Dorich" />
            </Fade>
        </div>
       </div>
    </div>
);

export default Home;