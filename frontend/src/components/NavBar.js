import React from "react";
import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <nav className = "navbar">
            <h1 className="nav-title">Marketplace Simulation</h1>
            <div className="nav-links">
                <input className="nav-search"type="text" placeholder="search item"></input>
                <Link to="/products/search" className="search-link">Search</Link>
                <Link to ="/login" className="login-link">login</Link>
            </div>
        </nav>
    )
}