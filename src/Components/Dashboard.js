import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Dashboard extends Component {
    render() {
        return (
            <aside className="nav-outer">
                <nav className="nav-container">
                    <Link to='/' className="link">Home</Link>
                    <Link to='/Projects' className="link">Projects</Link>
                    <Link to='/Resume' className="link">Resume</Link>
                    <Link to='/Contact' className="link">Contact</Link>
                </nav>
            </aside>
        )
    }
}