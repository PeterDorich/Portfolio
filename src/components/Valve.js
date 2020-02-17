/************************************************************************
 * Isolated Page to show the IoT Valve project in more depth
 * Hardcoded for now to get the style right
 * 
 * GitHub Logo is free to use to link to github, and is from : 
 *      https://github.com/logos
 ************************************************************************/

import React from 'react';
import '../components_css/Indepth.css';
import overview from '../assets/Valve_System.png';
import gear from '../assets/arduino.png';
import adafruit from '../assets/adafruit.png';
import github_logo from '../assets/GitHub_Logo.png';



function Valve() {
    return(
    <div className="indepth">
        <div className="indepth_header">
            <h1>IoT Irrigation Valve</h1>
        </div>
        <div className="indepth_body">
            <div className="indepth_bio">
                <h2>Project Purpose:</h2>
                <h3>Create and design a proof of concept for our collaborators, P&R Surge Systems, and the OPEnS Lab.</h3>
                <p>P&R Surge Systems is a company that makes battery operated irrigation valves that open and close based off of timing parameters. However, the valves are not remotely operated, and require physical interaction every time settings need to be changed. In addition, the valve did not support any sensing or dynamic operation. 
                <b> The goal was to use microcontrollers and LoRa (Long Range Radio) to be able to operate the valve from approximately 12 miles away, and receive state data such as temperature, time, soil moisture, battery level, and the electrical conductivity.</b></p>
            </div>    
            <div className= "indepth_img">
                <img src={overview} alt="system diagram" className="img"/>
                <p>The above is a system diagram. The user interface is shown on the left, the communications hub in the middle, and the irrigation valves on the right.</p>
            
            </div>
            <div className="indepth_bio">
                <h2>System Design:</h2>
                <h3>The system was designed to be split into three parts. The user interface, the communications hub, and the valve-controller.</h3>
                <p>P&R Surge Systems’ valve already cdontained a battery and a simple valve-controller for basic open and close operation. We replaced their valve-controller with our own Adafruit Feather M0 board equipped with LoRa (Long Range Radio). This microcontroller now performed the logic of opening and closing based off of soil moisture readings from the Decagon Soil Moisture Sensor. All of the operation parameters come from the user via the communications hub. The valve-controller sends the soil moisture data, temperature, battery level, and more periodically to the Hub. </p>
                <p>The user interface was designed to be a stand alone java app that could run on any computer. The user interface connected to Adafruit.io and retrieved the data. The user interface also had the ability to send email notifications. </p>
                <p><b>The next section shows the communications hub information, which was my section of the project</b></p>
            </div>
            <div className= "indepth_img">
                <img src={gear} alt="hardware used" className="img"/>
                <p>The communications hub (lower left), and the sensor/valve-controller device (upper middle) with the Decagon soil sensor (upper left), and solar panel (right).</p>
            </div>
            <div className="indepth_bio">
                <h2>Communications Hub:</h2>
                <p>The communications hub was my primary portion of the project. The Hub would control the flow of information in our system. On a large sprawling farm, there could be dozens of remote irrigation valves deployed across miles of farmland. Therefore, a singular shared communications hub was the logical way to setup our system. </p>
                <p>The Hub was built on an Adafruit feather M0 board equipped with LoRa, just as the valve-controller. Using the long-range radio functionality, the Hub and the valve-controller exchange information via formatted messages. The hub would send a formatted string that sets the valve’s parameters for opening and closing, such as a volumetric water content threshold, or a time of day threshold. Each string would contain a unique ID for each valve as well, so the system could support as many valves as we wanted. The formatted string was based off of the Open Sound Control Library (OSC) and is used in other OPEnS projects. </p>
                <p>The communications hub then sent the data to a cloud data service called Adafruit.io. An Adafruit Feather Ethernet Wing was attached to the M0 board, allowing us to connect to the internet directly without a Wi-Fi board. Feeds were setup both on Adafruit.io and on the communications hub, so that information could pass back and forth using the same type of formatted string. The user could then control the valve directly from Adafruit.io, or the user interface.</p>

            </div>
            <div className= "indepth_img">
                <img src={adafruit} alt="hardware used" className="img"/>
                <p>The above is a screenshot of Adafruit.io, the cloud service. Each guage shows the data being transmitted from the valve to the Hub.</p>
            </div>
            <div className="indepth_bio">
                <h2>Documentation and Reporting:</h2>
                <h3>This project required regular reporting to both our instructors, our collaborator P&R Surge Systems, and our sponsor/client, the OPEnS lab.</h3>
                <p>It's worth noting that both individually and as a group, frequent and regular reporting to multiple sources was required. Every week we met with our client Chet Udell from the OPEnS lab. During these weekly meetings we updated him on our progress, and he would suggest features that we would explore and implement. Once a month we would video conference with our collaborator P&R Surge Systems, and show them our progress. Multiple times a term we would create professional documents for the instructors of the year long senior project “class”. All of my individual documents are found in the github page for this project. These documents were mostly created using LaTeX, a typeset system. Types of documents I worked on include the design document, problem statement document, technical review, requirement specifications, and many progress reports. In addition, every quarter we would create a video progress report in which we talked through the state of our project, and what needed to come next. At the end of the year we also spent the day showing our project at the Oregon State Engineering Expo! </p>
            </div>
            <div className="indepth_bio">
                <h2>Code:</h2>
                <h3>Take a look at the github to view my portion of the project: the communications hub</h3>
            </div>
            <a href ="https://github.com/PeterDorich/IoTIrrigationValve"
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

export default Valve;