import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

//styles
import '../styles/Footer.css';

const Footer = () => {
    return (
        <Navbar className="footer">
            <Nav className="mx-auto">
                <p>Copyright © 2020 Lorenzo Veloso</p>
            </Nav>
        </Navbar>
    )
}

export default Footer
