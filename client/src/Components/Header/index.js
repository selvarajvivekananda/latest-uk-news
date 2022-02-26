import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from 'react-bootstrap'
import './index.css'

const Header = () => (
    <>
        <span className="span">UK News</span>
        <div style={{ background: "#a00606" }}>
            <Navbar id="nav" expand="sm" bg="dark" variant="dark">
                <Nav>
                    <Link to="/LandingPage">
                        <Button variant="outlined">Latest News</Button>
                    </Link>
                    <br></br>
                    <Link to="/Search">
                        <Button variant="outline-light">Search</Button>
                    </Link>
                </Nav>
            </Navbar>
        </div>
    </>

);

export default Header;