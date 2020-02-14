/****************************************************************************
 * Main will choose which componenet to render based on which "link" was chosen. 
 * the resume page is just a pdf link, so it doesnt need its own route.
 ******************************************************************************/

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
//import Resume from './Resume';
import Contact from './Contact';
import Home from './Home';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path ='/contact' component={Contact}></Route>
    </Switch>
);

export default Main;