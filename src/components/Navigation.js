/****************************************************************************
 * Navigation bar functional component.
 * This sets up a list of Nav links to click on at the top of the page.
 * Each link has it's own active class name for specific styling.
 ******************************************************************************/

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components_css/Navigation.css';
import pdf from '../assets/resume.pdf';

const Navigation = () => (
    <ul className="navigation_bar">
        <li><NavLink exact activeClassName='active' to='/'>Peter Dorich</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/about'>about me</NavLink></li>
        <li><a href={pdf}>resume</a></li>
        <li><NavLink exact activeClassName='active' to='/projects'>projects</NavLink></li>
        <li><NavLink exact activeClassName='active' to='./contact'>contact</NavLink></li>
    </ul>
);

export default Navigation;
