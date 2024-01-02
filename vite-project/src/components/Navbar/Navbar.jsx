import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuthContext } from '../../contexts/authContext'

import "./navbar.css"

export default function Navbar() {

    const { user } = useAuthContext();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavToggle = () => {
        setIsNavCollapsed(!isNavCollapsed);
      };

    // const [activeLink, setActiveLink] = useState() - change active class

    const navbarHandler = (e) => {
        e.preventDefault();

        
    }

    let userNav = (
        <>
        <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="tracks" className="nav-item nav-link">All Tracks</Link>
            <Link to="/mytracks" className="nav-item nav-link">My Tracks</Link>
        </div>
        <Link to="/create" className="btn btn-primary rounded-pill py-2 px-4">Create track</Link>
        <Link to="/logout" className="btn btn-primary rounded-pill py-2 px-4">Log Out</Link>
        </>
    )

    let guestNav = (
        <>
            <div className="navbar-nav ms-auto py-0">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="tracks" className="nav-item nav-link">All Tracks</Link>
            </div>
            <Link to="/login" className="btn btn-primary rounded-pill py-2 px-4">Log In</Link>
            <Link to="/register" className="btn btn-primary rounded-pill py-2 px-4">Register</Link>
        </>
    )

    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="" className="navbar-brand p-0">
            <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>Tourist</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavToggle}
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarCollapse">
            {user.email
              ? userNav
              : guestNav
            }
          </div>
        </nav>
      );
}