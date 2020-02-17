/************************************************************************
 * Isolated Page to show the IoT Valve project in more depth
 * Hardcoded for now
 ************************************************************************/

import React from 'react';
import '../components_css/Indepth.css';
import overview from '../assets/Valve_System.png';
import gear from '../assets/arduino.png';
import adafruit from '../assets/adafruit.png';


function Valve() {
    return(
    <div className="indepth">
        <div className="indepth_header">
            <h1>IoT Irrigation Valve</h1>
        </div>
        <div className="indepth_bio">
            <h2>Project Purpose:</h2>
            <h3>Create and design a proof of concept for our sponsor, P&R Surge Systems.</h3>
            <p>P&R Surge Systems is a company that makes battery operated irrigation valves that open and close based off of timing parameters.  However, the valves are not remotely operated, and require physical interaction every time settings need to be changed. In addition, the valve did not support any sensing or dynamic operation. 
               <b> The goal was to use microcontrollers and LoRa (Long Range Radio) to be able to operate the valve from approximately 12 miles away, and receive state data such as temperature, time, soil moisture, battery level, and the electrical conductivity.</b>
            </p>
        </div>    
        <div className= "indepth_img">
            <img src={overview} alt="system diagram" className="img"/>
            <p>The above is a system diagram. The Irrigation Valves are shown on the right, the communications hub in the middle, and the UI on the left</p>
            
        </div>
        <div className="indepth_bio">
            <h2>System Design:</h2>
            <h3></h3>
        </div>
        <div className= "indepth_img">
            <img src={gear} alt="hardware used" className="img"/>
            <p>The above is a system diagram. The Irrigation Valves are shown on the right, the communications hub in the middle, and the UI on the left</p>

        </div>
        <div className="indepth_bio">
            <h2>Communications Hub:</h2>
            <h3></h3>
        </div>
        <div className= "indepth_img">
            <img src={adafruit} alt="hardware used" className="img"/>
            <p>The above is a system diagram. The Irrigation Valves are shown on the right, the communications hub in the middle, and the UI on the left</p>

        </div>
        <div className="indepth_bio">
            <h2>Documentation and Reporting:</h2>
            <h3></h3>
        </div>
        <div className= "indepth_img">
            <img src={gear} alt="hardware used" className="img"/>
            <p>Test</p>
        </div>
        <div className="indepth_bio">
            <h2>Code:</h2>
            <h3></h3>
        </div>
        <div className= "indepth_img">
            <img src={gear} alt="hardware used" className="img"/>
            <p>Test</p>
        </div>
    </div>
    
    );
    
}

export default Valve;