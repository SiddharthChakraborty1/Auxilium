import React, { useState, useEffect } from 'react'
import './AddProductForm.css'
import { Container, Form, Button } from 'react-bootstrap'
import Product from '../../Model/Product'
import { AddProduct } from '../../Services/SupplierDashboard.service'
import { useHistory } from 'react-router-dom'

const GST_Services = ['Ambulance', 'Bed Services', 'Medical Supplies', 'Oxygen Services']


const AddProductForm = () => {
    const [productType, setProductType] = useState('reselect')
    const [verificationNumber, setVerificationNumber] = useState('')
    const [productDesc, setProductDesc] = useState('')
    const [serviceAddress, setServiceAddress] = useState('')

    const handleDropdown = (e) => {
        setProductType(e.target.value);
    }
    useEffect(() => {
        console.log(productType);
    }, [productType])

    const handleVerificationCode = (e) => {
        setVerificationNumber(e.target.value);
    }
    useEffect(() => {
    }, [verificationNumber])

    const handleProductType = (e) => {
        setProductDesc(e.target.value);
    }
    useEffect(() => {
    }, [productDesc])

    const handleServiceAddress = (e) => {
        setServiceAddress(e.target.value)
    }
    useEffect(() => {
    }, [serviceAddress])

    let history = useHistory();

    const handleSubmit = (e) => {
        //console.log(localStorage.getItem('supId'));
        e.preventDefault()
        var date = new Date()

        console.log(date.toISOString());
        var productObject = new Product(
            localStorage.getItem('supId'),
            productType,
            productDesc,
            1,
            date.toISOString(),
            verificationNumber,
            serviceAddress
            );
               
        AddProduct(productObject).then(alert("Product Added.")).then(setProductType('reselect'));
             
        
    }


    return (
        <div>
            <Container className="Form-box">
                <Form className="mx-auto form">
                    <Form.Group>
                        <Form.Label>
                            Product type
                        </Form.Label>
                        <Form.Control 
                        as="select" 
                        onChange={handleDropdown} 
                        style={{ 
                            backgroundColor: "black", 
                            color: "white", 
                            borderColor: "orange" 
                            }}
                        id="drop">
                            <option value="reselect">Select a service</option>
                            <optgroup label="Requires GST number" >
                                {
                                    GST_Services.map((service) => (
                                        <option value={service}>{service}</option>
                                    ))
                                }
                            </optgroup>
                            <optgroup label="Requires Food License">
                                <option>Food Services</option>
                            </optgroup>
                        </Form.Control>
                    </Form.Group>
                    <br />
                    {
                        productType == 'Food Services' &&
                        <div>
                            <Form.Group>
                                <Form.Label>
                                    Food license number
                                </Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter food license number" 
                                onChange={handleVerificationCode} 
                                maxLength={14} 
                                style={{ 
                                    backgroundColor: "black", 
                                    color: "white", 
                                    borderColor: "orange" 
                                    }} />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>
                                    Type of packaging:
                                </Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Fruits and/or Vegetables"
                                    name="packaging"
                                    id="packaging1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Tiffin Services"
                                    name="packaging"
                                    id="packaging2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Both"
                                    name="packaging"
                                    id="packaging3"
                                />

                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>
                                    Service description
                                </Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                onChange={handleProductType} 
                                maxLength={500} 
                                placeholder='Enter description' 
                                style={{ 
                                    backgroundColor: "black", 
                                    color: "white", 
                                    borderColor: "orange"
                                    }} />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>
                                    Service address:
                                </Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                onChange={handleProductType} 
                                maxLength={500} 
                                placeholder='Enter the location from where services are being provided' 
                                style={{ 
                                    backgroundColor: "black", 
                                    color: "white", 
                                    borderColor: "orange" 
                                    }} />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Button variant="warning">
                                    Add product
                                </Button>
                            </Form.Group>
                        </div>
                    }
                    {
                        productType != 'Food Services' && productType != 'reselect' &&
                        <div>
                            <Form.Group>
                                <Form.Label>
                                    GST Identification Number:
                                </Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter GST number" 
                                    onChange={handleVerificationCode} 
                                    maxLength={15} 
                                    style={{ 
                                        backgroundColor: "black", 
                                        color: "white", 
                                        borderColor: "orange" 
                                        }} />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>
                                    Service Description:
                                </Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    onChange={handleProductType} 
                                    maxLength={500} 
                                    placeholder='Enter description' 
                                    style={{ 
                                        backgroundColor: "black", 
                                        color: "white", 
                                        borderColor: "orange" 
                                        }} />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>
                                    Service Address:
                                </Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    onChange={handleServiceAddress} 
                                    maxLength={500} 
                                    placeholder='Enter the location from where services are being provided' 
                                    style={{ 
                                        backgroundColor: "black", 
                                        color: "white", 
                                        borderColor: "orange" 
                                        }} />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Button variant="warning" onClick={handleSubmit}>
                                    Add product
                                </Button>
                            </Form.Group>
                        </div>
                    }
                </Form>
            </Container>
        </div>
    )
}

export default AddProductForm
