import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

//styles
import '../styles/Footer.css';

const Footer = () => {
    return (
        <Navbar className="footer" >
            <Nav className="justify-content-center" >
                <Nav.Item>
                    <Nav.Link>EMERGENCY HOTLINE - 911</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>DOH - (02) 894-COVID</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>DILG - (02) 894-26843</Nav.Link>
                </Nav.Item>
            </Nav>

            <Nav className="justify-content-center">
                <p>Made by Lorenzo Veloso ☕️, Data by <a href="https://disease.sh/docs/">NovelCOVID API</a></p>
            </Nav>
        </Navbar>
    )
}

export default Footer
