import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

//styles
import '../styles/Footer.css';

const Footer = () => {
    return (
        <Navbar className="footer">
            <Nav className="mx-auto">
                <p>Made by Lorenzo Veloso 2020, Data by <a href="https://disease.sh/docs/">NovelCOVID API</a></p>
            </Nav>
        </Navbar>
    )
}

export default Footer
