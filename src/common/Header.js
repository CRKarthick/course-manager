import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-expand-sm navbar-dark bg-dark'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink className='nav-link' exact to='/'>
                        Home
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/courses'>
                        Courses
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/about'>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
