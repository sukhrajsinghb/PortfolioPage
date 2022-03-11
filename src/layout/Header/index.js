import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css'

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink exact to="/" activeClassName="current">Home</NavLink>
                <NavLink to="/portfolio" activeClassName="current">Portfolio</NavLink>
                <NavLink to="/skills" activeClassName="current">Skills</NavLink>
            </nav>
        </div>
    );
}

export default Header;
