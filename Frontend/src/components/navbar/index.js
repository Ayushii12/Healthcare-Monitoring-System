import React from 'react'
import { Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom";
import './style.css'

const Navbar = () =>{
    return (
        <React.Fragment>
            <nav className="navbar fixed navbar-expand-lg navbar-dark bg-primary navbar-temp">
                    <ul className="navbar-nav temp1">
                        <li className="nav-item temp3">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item temp3">
                            <a className="nav-link" href="/About-us">About Us</a>
                        </li>
                        <li className="nav-item temp3">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item temp3">
                            <a className="nav-link" href="#">Testimonials</a>
                        </li>
                        <li className="nav-item temp3">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
    
                    
                    
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <Link to={"/signup"}>
                        <Button type="button" variant="info" className="btn btn-secondary">
                            Sigh Up</Button>{' '}
                            </Link>


                        <Link to={"/signin"}>
                            <Button type="button" variant="info" className="btn btn-secondary">Sign In</Button>
                        </Link>
                
                    </div>
                

            
            </nav>

        </React.Fragment>
    );
}

export default Navbar;