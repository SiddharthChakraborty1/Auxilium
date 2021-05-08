import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import './Cards.css'
import {motion} from 'framer-motion'


const scaleUp={
    enlarge: {scale: 1.03}
}
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
                            <motion.div
                            variants={scaleUp}
                            whileHover='enlarge'
                            
                            >
                        <Button variant="outline-primary">Update</Button>
                        </motion.div>
                        <br/><br/>
                        <motion.div
                        variants={scaleUp}
                        whileHover='enlarge'
                        >
                        <Button variant="outline-danger">Delete</Button>
                        </motion.div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards
