import React from 'react';
import { NavLink } from 'react-router-dom';

export default class TopNavBar extends React.Component {
    render () {
        return (
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <NavLink to='/Home' className="brand-logo">Face App</NavLink>
                    <ul className="right">
                        <li><NavLink to="/Attendance">Attendance</NavLink></li>
                        <li><NavLink to="/Modify">Modify</NavLink></li>
                        <li><NavLink to="/Report">Report</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
