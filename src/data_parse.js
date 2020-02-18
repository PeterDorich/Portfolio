/************************************************************************
 * Parse functional component.
 * This is the structure that each project will follow. The number of 
    projects will be dynamic to how many are in proj_data.
 ************************************************************************/

import React from 'react';
import './components_css/Projects.css';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal';

function Parse(props){
    return(
        <div className="project">
          <div className="proj_column">
               <Fade left>
                <div className="proj_info">
                    <h2>{props.name}</h2>
                    <p>Tech and Concepts:</p>
                    {props.tech}
                    {props.desc}   
                        <NavLink className="button" exact to={props.link} >
                            View Project
                        </NavLink>
                </div>
                </Fade>
            </div>
            <div className="proj_column">
                <Fade right>
                <div className="proj_img">
                    <NavLink exact to={props.link}>
                         {props.img}
                    </NavLink>
                </div> 
                </Fade>  
            </div>
        </div>
    );
}

export default Parse;