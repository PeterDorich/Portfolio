/************************************************************************
 * Parse functional component.
 * This is the structure that each project will follow. The number of 
    projects will be dynamic to how many are in proj_data.
 ************************************************************************/

import React from 'react';
import './components_css/Projects.css';

function Parse(props){
    return(
        <div className="project">
          <div className="proj_column">
                <div className="proj_info">
                  
                    <p>{props.name}</p>

                    {props.desc}
                    {props.tech}
                </div>
          
            </div>
            <div className="proj_column">
                <div className="proj_img">
                    {props.img}
                </div>   
            </div>
        </div>
    );
}

export default Parse;