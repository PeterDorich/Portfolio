/************************************************************************
 * Isolated Page for The React Portfolio portion
 * 
 * GitHub Logo is free to use to link to github, and is from : 
 *      https://github.com/logos
 ************************************************************************/

import React from 'react';
import github_logo from '../assets/GitHub_Logo.png';

function RA(){
    return(
        <div className="indepth">
            <div className="indepth_header">
            <h1>React Application</h1>
            </div>
            <div className="indepth_body">
                <div className="indepth_bio">
                    <h2>Project Purpose:</h2>
                    
                </div>

                <div className="indepth_bio">
                    <h2>Code:</h2>
                    <h3>Take a look at the github to view my portion of the project: the communications hub</h3>
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