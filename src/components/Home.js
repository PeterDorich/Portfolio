/*****************************************************************************
 * Home page function.
 * This will be what is displayed on the homepage.
 * Homepage will generally remain static, so its hardcoded in JSX for now,
   rather than dynamically loaded from a file.
 *****************************************************************************/

import React from 'react';
import profile_pic from '../assets/profile_pic.jpg';
import '../components_css/Home.css';
import Fade from 'react-reveal';
import pdf from '../assets/resume.pdf';

const Home = () => (
    <div className='Home'>
        <div className="home_container">
        <div className="column">
            <Fade down>
                <h1>Peter Dorich</h1>
                <div className="container_info">
                    <h3>Recently graduated from Oregon State University with a degree in Computer Science, and a Minor in Buisness and Entrepreneurship.</h3>
                    <h3>I'm looking for a full time Software Developer Position in the Columbia River Gorge.</h3>
                    <h3>Take a look at my Resume and a few of my favorite projects!</h3>
                </div>
                <div className="resume_link">
                    <a href ={pdf}>View My Resume Here</a>
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