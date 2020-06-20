import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//styles
import '../styles/Navigation.css';
import logo from '../assets/logo.png';

const Navigation = () => {
    return (
        <Navbar sticky="top" variant="dark" collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Link to="/">
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Link>
                    
                    <Link to="/countries">
                        <Nav.Link href="/countries">By Country</Nav.Link>
                    </Link>
                    <Link to="/info">
                        <Nav.Link href="/info">Covid-19</Nav.Link>
                    </Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
