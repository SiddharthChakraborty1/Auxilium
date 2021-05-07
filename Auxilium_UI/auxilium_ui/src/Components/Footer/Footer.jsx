import React from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container fluid className="footer">
            <p align="center" id="copyright">&copy; Copyrights 2021</p>
            <p align="center"><a href="#">Contact us</a></p>
        </Container>
    )
}

export default Footer