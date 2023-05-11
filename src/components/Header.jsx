import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
    return <div className="header-container">
            <header>
            <Link to="/" className="site-logo">
                Pen Spinning
            </Link>
            <nav className="nav-header">
                <Link to="/host">host</Link>
                <Link to="/about">about</Link>
                <Link to="/pens">pens</Link>
            </nav>
            </header>
        </div>
}
