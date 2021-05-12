import React, { useState, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import './EditProfile.css'

const EditProfile = ({ name, email, state, city }) => {
    const GST_Services = ['Ambulabce', 'Hospital beds', 'Medical supplies', 'Oxygen']

    const [newName, setNewName] = useState(name)
    const [newEmail, setNewEmail] = useState(email)
    const [newState, setNewState] = useState(state)
    const [newCity, setNewCity] = useState(city)
    const handleName = (e) => {
        setNewName(e.target.value);
    }
    useEffect(() => {
    }, [newName])

    const handleEmail = (e) => {
        setNewEmail(e.target.value);
    }
    useEffect(() => {
    }, [newEmail])

    const handleState = (e) => {
        setNewState(e.target.value);
    }
    useEffect(() => {
    }, [newState])

    const handleCity = (e) => {
        setNewCity(e.target.value);
    }
    useEffect(() => {
    }, [newCity])
    return (
        <div>
            <Container className="Form-box">
                <Form className="mx-auto form">
                    <Form.Group>
                        <Form.Label>
                            Name
                        </Form.Label>
                        <Form.Control type="text" placeholder={name} onChange={handleName} maxLength={14} style={{ backgroundColor: "black", color: "white", borderColor: "orange" }} />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>
                            E-mail
                        </Form.Label>
                        <Form.Control type="text" placeholder={email} onChange={handleEmail} maxLength={14} style={{ backgroundColor: "black", color: "white", borderColor: "orange" }} />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>
                            State
                        </Form.Label>
                        <Form.Control type="text" placeholder={state} onChange={handleState} maxLength={14} style={{ backgroundColor: "black", color: "white", borderColor: "orange" }} />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>
                            City
                        </Form.Label>
                        <Form.Control type="text" placeholder={city} onChange={handleCity} maxLength={14} style={{ backgroundColor: "black", color: "white", borderColor: "orange" }} />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Button variant="warning">
                            Add product
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default EditProfile
