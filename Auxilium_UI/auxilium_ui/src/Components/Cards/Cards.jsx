import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import './Cards.css'

const Cards = ({title, desc}) => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Row>
                        <Col xs={9}>
                            <Card.Title><h2>{title}</h2></Card.Title>
                            <hr/>
                            <Card.Text>
                                {desc}
                            </Card.Text>
                        </Col>
                        <Col xs={3} className="justify-content-center">
                        <Button variant="outline-primary">Update</Button>
                        <br/><br/>
                        <Button variant="outline-danger">Delete</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards
