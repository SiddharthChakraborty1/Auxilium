import React from 'react'
import { Container } from 'react-bootstrap'
import './SupplierDashboard.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Cards from '../Cards/Cards'

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
                    <Button variant="primary" style={{minWidth:"10vw"}}>Edit Profile</Button>
                    <Button variant="primary" style={{minWidth:"10vw"}}>Add Product</Button>
                </Col>
            </Row>
            <hr/>
            <div className="card-box">
                 <Cards/> 
                Minaiy Mouse
            </div>
        </Container>
    )
}

export default SupplierDashboard
