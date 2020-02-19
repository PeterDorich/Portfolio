/************************************************************************
 * Isolated Page for The React Portfolio portion
 * 
 * GitHub Logo is free to use to link to github, and is from : 
 *      https://github.com/logos
 ************************************************************************/

import React from 'react';
import github_logo from '../assets/GitHub_Logo.png';
import port from '../assets/portfolio.png';
import wireframe from '../assets/wireframe.jpg';

function RA(){
    return(
        <div className="indepth">
            <div className="indepth_header">
            <h1>React Application</h1>
            </div>
            <div className="indepth_body">
                <div className="indepth_bio">
                    <h2>Project Purpose:</h2>
                    <h3>Learn the React.js framework and create a Portfolio of my work.</h3>
                    <p>I wasn’t exposed to much user interface development in my CS courses in college, and when applying for jobs I’ve noticed that React.js and Angular are 2 very common sought-after skills for developers. Since I wanted to create a project portfolio website, I decided to dive into the React.js framework to gain some experience. What I found is that while I was previously un-interested in web development and UI design, I had a lot of fun developing this portfolio, and am very interested in pursuing it as a career. </p>
                </div>
                <div className="indepth_img">
                    <img src={port} alt="screenshot of my portfolio site" className="img"/>
                    <p>Screenshot of the homepage of the web application.</p>
                </div>
                <div className="indepth_bio">
                    <h2>Learning React:</h2>
                    <p>Before I even sat down to write the portfolio, I spent a lot of time reading and practicing with the React.js Tutorials and learning how it works. I haven’t been exposed to much JavaScript, so this was a great opportunity to learn both at the same time. Although my app is built with the React Framework, it doesn’t even scratch the surface for utilizing all it has to offer. It did serve as a great project to learn what React is capable of.</p>
                </div>
                <div className="indepth_bio">
                    <h2>Web App Design:</h2>
                    <p>The app was setup using the Create-React-App command, which sets up the project structure and all of the necessary node modules. I practiced setting up the React App from scratch, but for my portfolio I wanted to be certain that things were set up correctly. This way I got to see how an actual React App would be structured, and I could closely follow the best practices. </p>
                    <p>I wanted to split up the application into separate JS files for each component. This was easier for me to keep track of components and their styling. I did the same thing with the CSS files. I have all the images for the project under one folder, “assets”, and each component and CSS file in their own respective folders as well. One piece of advice I read was to not nest your folders too much, or it will be a pain to reference things as the project develops.</p>
                    <p>Before coding I also made sure to draw up some wireframe sketches for each page, for a general idea of how it will look. I didn’t go for a particularly flashy design with big animations, as I didn’t think it was necessary for a sleek portfolio. In my opinion, some sites can get too cumbersome with big animations. I did utilize the ‘React-Reveal’ library to put some simple fade-in effects.</p>
                    <p>One feature I’d like to point out is that each project from the ‘Project’ page is dynamically rendered and read from a data file. This is where I really got to practice some functionality that React is really used for. Each project is rendered with the exact same component, but with different data. That is what React is really designed for, and where it shines. </p>
                </div>
                <div className="indepth_img">
                    <img src={wireframe} alt="wireframe drawing" className="img"/>
                    <p>My wireframe drawing for the initial projects page design. </p>
                </div>
                <div className="indepth_bio">
                    <h2>What I Learned:</h2>
                    <p>Before I started this project, I had very little experience with HTML, CSS, and JavaScript, and now I feel very comfortable setting up a nice responsive webpage. I have a lot more to learn about React, but I have a solid understanding of the basics, and why it is used so much. </p>
                    <p>This portfolio is ongoing as well, I have a lot more to do. For instance, each in-depth project page doesn’t utilize the dynamic rendering that the project page does, in part due to my use of React-Router for rendering separate pages for the site. </p>
                    <p>I also plan to change how the CSS is organized in the project. With better planning I will be able to reuse a lot of the styling across all of the pages. Initially I wanted separate CSS files for each component because I wanted to be able to style them each differently. However, I ended up repeating more of the styling than I would have liked. </p>
                    <p>I’d also like to add more projects to it, especially ones that can execute and run directly on the web app. In the future I’ll be moving more school projects onto the site directly. </p>
                </div>
                <div className="indepth_bio">
                    <h2>Code:</h2>
                    <h3>Take a look at the GitHub to view the project code!</h3>
                </div>
                <a href ="https://github.com/PeterDorich/Portfolio.git"
                    target="_blank"
                    id="lnGH"
                    rel="noopener noreferrer">
                    <div className="github_link">
                        <img src={github_logo} alt="github logo link" id="gh_l" className="img"/>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default RA;