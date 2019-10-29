import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <Link to="/">
                <p className="navigation">Home</p>
            </Link>
            <Link to="/staff">
                <p className="navigation">Our staff</p>
            </Link>
        </div>
    )
}

export default Header