import React, { useState, useEffect } from 'react'
import './AddProductForm.css'
import { Container, Form } from 'react-bootstrap'

const GST_Services = ['Ambulabce', 'Hospital beds', 'Medical supplies', 'Oxygen']


const AddProductForm = () => {
    const [productType, setProductType] = useState('reselect')
    const handleDropdown = (e) => {
        setProductType(e.target.value);
    }
    useEffect(() => {
        // if (productType == 'reselect') {
        //     alert("Select an option.")
        // }
    }, [productType])

    return (
        <Container className="Form-box">
            <Form className="mx-auto">
                <Form.Group>
                    <Form.Label>
                        Product type
                    </Form.Label>
                    <Form.Control as="select" onChange={handleDropdown}>
                        <option value="reselect">Select a service</option>
                        <optgroup label="Requires GST number">
                            {
                                GST_Services.map((service) => (
                                    <option value={service}>{service}</option>
                                ))
                            }
                        </optgroup>
                        <optgroup label="Requires Food License">
                            <option>Food</option>
                        </optgroup>
                    </Form.Control>
                </Form.Group>
                <br />
                {
                    productType == 'Food' &&
                    <div>
                        <Form.Group>
                            <Form.Label>
                                Food license number
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter food license number" />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>
                                {productType} description
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </div>
                }
                {
                    productType != 'Food' && productType != 'reselect' &&
                    <div>
                        <Form.Group>
                            <Form.Label>
                                GST number
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter GST number" />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>
                                {productType} description
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} maxLength={500} placeholder='Enter description'/>
                        </Form.Group>
                    </div>
                }
            </Form>
        </Container>

        // ambulance, medical supplies, Hospital beds, oxygen, food
    )
}

export default AddProductForm
