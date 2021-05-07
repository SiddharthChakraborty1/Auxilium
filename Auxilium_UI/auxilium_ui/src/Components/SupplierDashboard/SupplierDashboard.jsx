import React from 'react'
import { Container } from 'react-bootstrap'
import './SupplierDashboard.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const SupplierDashboard = () => {
    return (
        <Container className="dashboard">
            <Row className="banner">
                <Col xs={8}>
                    <h2>
                        Existing products
                    </h2>
                </Col>
                <Col xs={4} className="button-box">
                    <Button variant="outline-primary">Edit Personal Information</Button>
                    <Button variant="outline-primary">Add Product</Button>
                </Col>
            </Row>
            <hr/>
            <div className="card-box">
                {/* <cards/> */}
                ishiusb
            </div>
        </Container>
    )
}

export default SupplierDashboard
