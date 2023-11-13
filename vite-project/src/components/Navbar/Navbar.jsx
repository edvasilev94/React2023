import { useState } from "react";
import { Link } from "react-router-dom";


import "./navbar.css"

export default function Navbar () {

    // const [activeLink, setActiveLink] = useState() - change active class

    return (
      
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <Link to="" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>Tourist</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="tracks" className="nav-item nav-link active">All Tracks</Link>
                        {/* <a to="#" className="nav-item nav-link">Services</a>
                        <a to="#" className="nav-item nav-link">Packages</a>
                        <a to="#" className="nav-item nav-link">Contact</a> */}
                    </div>
                    <Link to="/login" className="btn btn-primary rounded-pill py-2 px-4">Log In</Link>
                    <Link to="/register" className="btn btn-primary rounded-pill py-2 px-4">Register</Link>
                </div>
            </nav>
       
    )
}