/****************************************************************************
 * Main will choose which componenet to render based on which "link" was chosen. 
 * the resume page is just a pdf link, so it doesnt need its own route.
 * 
 * Also sets up our links to project pages. These are isolated pages.
 * Scroll to top -- helpful addition that makes sure pages start at the top 
        after scrolling
 ******************************************************************************/

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Valve from './Valve.js';
import RD from './RD.js';
import ReactApp from './ReactApp.js';
import ScrollToTop from 'react-router-scroll-top';

const Main = () => (
    <Switch>
        <ScrollToTop>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route> 
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path ='/contact' component={Contact}></Route>

        <Route exact path = '/IoTValve' component={Valve}></Route>
        <Route exact path = '/RelationalDB' component={RD}></Route>
        <Route exact path = '/ReactApp' component={ReactApp}></Route>
        </ScrollToTop>
    </Switch>
);

export default Main;