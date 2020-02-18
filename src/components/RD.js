/************************************************************************
 * Isolated Page for the Relational Database project
 * 
 * GitHub Logo is free to use to link to github, and is from : 
 *      https://github.com/logos
 ************************************************************************/

import React from 'react';
import '../components_css/Indepth.css';
import github_logo from '../assets/GitHub_Logo.png';
import bike_rental from '../assets/bike_rental.png';
import schema from '../assets/db_model.png';

function RD(){
    return(
        <div className="indepth">
            <div className="indepth_header">
                <h1>Relational Database</h1>
            </div>
            <div className="indepth_body">
                <div className="indepth_bio">
                    <h2>Project Purpose:</h2>
                    <h3>Learn to design a relational database schema, and implement it using SQL.</h3>
                    <p>The purpose of this project was to design a relational database schema and implement it with a simple user interface. The database application itself was arbitrary, so I chose to create a database for a made-up bike shop rental service in which customers can log in online and reserve a bike. The real point of the project was to learn, practice, and implement SQL statements, which is why the user interface is very rudimentary.</p>
                </div>
                <div className="indepth_img">
                    <img src={bike_rental} alt="bike renatl screenshot" className="img"/>
                    <p>Screenshot of the simple bike rental UI. The table in the middle shows the database contents.</p>
                </div>
                <div className="indepth_bio">
                    <h2>Design and Tools:</h2>
                    <p>This static portions of the user interface for this project were created with HTML and a little bit of CSS. The database itself was created using phpMyAdmin. Using PHP, I was able to connect to the database and assign SQL queries to interact with the database. The site supported full CRUD operations (Create, Read, Update, and Delete). In addition, I was able to practice using some more complex join statements to display certain attributes at a time.</p>
                    <p>I chose to have one of my database attributes be a username and password, so I was able to gain some experience implementing a sign-in form using PHP. Passwords were hashed in the database.</p>
                    <p>The main goal of the project was to keep the ACID properties in mind. I was able to achieve this by a good understanding of foreign and private keys. When a schema is properly designed and setup using keys, deletions and insertions will always update other tables/ relations.</p>
                </div>
                <div className="indepth_img">
                    <img src={schema} alt="database schema" className="img"/>
                    <p>Above is the relational database schema for the bike rental database. This was generated with phpMyAdmin.</p>
                </div>
                <div className="indepth_bio">
                    <h2>What I learned:</h2>
                    <p>I was able to experiment with designing a relational database using a tool used in the industry, phpMyAdmin. I learned a lot about SQL statements, and how to write some complex queries using Select and Joins. Having to display attributes from multiple tables really helped me to understand how joins work and what is going on behind the scenes. Overall, I discovered I really enjoy working with databases.</p>
                </div>
                <div className="indepth_bio">
                    <h2>Code:</h2>
                    <h3>Take a look at the GitHub to view the project code!</h3>
                </div>
                <a href ="https://github.com/PeterDorich/Relational_Database.git"
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

export default RD;