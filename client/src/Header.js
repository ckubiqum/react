import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/staff">
                <p>Our staff</p>
            </Link>
        </div>
    )
}

export default Header