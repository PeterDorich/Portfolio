/*****************************************************************************
 * Functional Project Page Component.
 * This will dynamically create projects and display them via project_page
 * Data mapped from proj_data file, for ease of adding or removing projects
 ****************************************************************************/ 

import React from 'react';
import '../components_css/Projects.css';
import data from '../data/proj_data';
import Parse from '../data_parse.js';

function Projects(props){
    return(
        <div className="project_page">
            <div className="project_header">
                <h1>Projects</h1>
                <h3>Take a look at a few of my favorite major projects from the last few years!</h3>
            </div>
            {data.projects.map((project)=> (
                <Parse key={project.id}
                    name={project.name}
                    desc={project.desc}
                    date={project.date}
                    img={project.img}
                    tech={project.tech}
                />
            ))}
        </div>
    )
}

export default Projects;