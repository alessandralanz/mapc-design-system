import React from 'react';
import './Navbar.css';
import logoImage from '/public/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItems = [
        { name: 'Map', path: '/map' },
        { name: 'Executive Summary', path: '/executive-summary' },
        { name: 'Report', path: '/report' },
        { name: 'About', path: '/about' }
    ];

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logoImage} alt="Homes for Profit Logo" className="logo-img"/>
                <span className="logo-text">Homes for Profit</span>
            </div>
            <div className="nav-links-container">
                {navItems.map(({ name, path }) => (
                    <NavLink
                        key={name}
                        to={path}
                        activeClassName="active"
                        className="nav-link"
                    >
                        {name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;