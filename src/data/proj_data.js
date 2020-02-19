/****************************************************************************
 * proj_data.js: this is a data file that shows each project.  
 * The info here will be loaded into the project page.
 * Allows a tempate-like structure for easy additions.
 ******************************************************************************/

 import port from '../assets/portfolio.png';
import valve from '../assets/p&r_valve.png';
import model from '../assets/db_model.png';
import React from 'react';

const data = {
        projects: [
            {
                id: "1",
                name: "IoT Irrigation Valve - Wireless Hub",
                component: "projects",
                date: "2017-2018",
                img: <img src={valve} alt="valve" className="img"/>,
                desc: <p>This is my section of a yearlong group senior project at OSU. The project was an open source proof of concept internet-connected irrigation valve and control suite. I worked closely with the 'OPEnS' Lab (Openly Published Environmental Sensing Lab) to create a prototype from an existing industry irrigation valve, supplied by our collaborator, 'P&R Surge Systems'. Over the course of the year I worked to create professional design documents and reports for our sponsor, as well as design and implement the Wireless Hub portion of the project.
                </p>,
                tech: <ul><li>Arduino (C/C++)</li> <li>MQTT</li> <li>Adafruit.io</li> <li>Microcontrollers</li> <li>LoRa (Long Range Radio)</li> <li>Documentation and Reporting</li></ul>,
                page_link: "/IoTValve"
            },
            {
                id: "2",
                name: "Relational Database",
                component: "projects",
                date: "2019",
                img: <img src={model} alt='database_model' className='img'/>,
                desc: <p>In one of my favorite college courses, 'Database Management Systems'. I was tasked with designing a relational database schema and implementing it. The database supported 4 SQL operations: Create, Read, Update, and Delete. The database was designed with ACID properties in mind (Atomicity, Consistency, Isolation and Durability), and through the use of foreign keys, the database state is always valid.</p>,
                tech: <ul><li>PHP</li> <li>HTML</li> <li>MySQL</li><li>phpMyAdmin</li></ul>,
                page_link: "/RelationalDB"
            },
            {
                id: "3",
                name: "React Portfolio",
                component: "projects",
                date: "2019-2020",
                img: <img src={port} alt="website" className="img"/>,
                desc: <p>What you're viewing right now! I created this portfolio to showcase my skills and projects to employers. I created this using React.js. Other than the simple UI for the previous project, I haven't been exposed to creating a sleek and responsive interface. In addition, React.js is a very sought-after tool for the industry. I thought what better way to prepare for a job than to learn how it works and show off the end product! I learned a lot while doing this project, and because of it I am very interested in front-end/ user interface development.</p>,
                tech: <ul><li>React.js</li><li>Javascript</li><li>CSS</li><li>HTML</li><li>Visual Studio Code</li><li>Visual Studio 2019</li></ul>,
                page_link: "/ReactApp"
            }
        ]
};

export default data;