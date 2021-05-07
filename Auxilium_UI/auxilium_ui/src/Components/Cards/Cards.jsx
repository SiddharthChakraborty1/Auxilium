import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'

const Cards = () => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Row>
                        <Col xs={9}>
                            <Card.Title><h2>Card Title</h2></Card.Title>
                            <hr/>
                            <Card.Text>
                                meow
                            </Card.Text>
                        </Col>
                        <Col xs={3} className="justify-content-center">
                        <Button style={{minWidth:"12vw"}} variant="outline-primary">Update</Button>
                        <br/><br/>
                        <Button style={{minWidth:"12vw"}} variant="outline-danger">Delete</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards
