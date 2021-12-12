import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom'

function Nav(props) {
    const style = {
        color: 'white',
        textDecoration: 'none'
    }
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={style} to="/about">
                    <li>SpaceX Rockets</li>
                </Link>
                <Link style={style} to="/photos">
                    <li>PIC OF THE DAY</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;