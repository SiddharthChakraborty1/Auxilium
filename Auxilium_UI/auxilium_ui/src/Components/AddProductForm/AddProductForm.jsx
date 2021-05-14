import React, { useState, useEffect } from 'react'
import './AddProductForm.css'
import { Container, Form, Button } from 'react-bootstrap'
import { Avatar, Grid, Paper, TextField, Typography, Link, MenuItem } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { orange, red } from '@material-ui/core/colors'

const GST_Services = ['Ambulance', 'Bed Services', 'Medical Supplies', 'Oxygen Services']


const AddProductForm = () => {
    const [productType, setProductType] = useState('reselect')
    const [verificationNumber, setVerificationNumber] = useState('')
    const [productDesc, setProductDesc] = useState('')

    const buttonStyle = { marginTop: "20px", marginBottom: "5px", backgroundColor: 'orange' };
    const textFieldStyle = { marginTop: "5px", borderBottomColor: 'white' };

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
        console.log(productDesc);
    }, [productDesc])

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: orange[500],
                dark: orange[500],
                light: orange[500]
            },
            secondary: {
                main: orange[500],
                dark: orange[500],
                light: orange[500]
            },
            error: {
                main: red[500],
            },
        },
    })
    const products = ['Ambulance', 'Bed Services', 'Food Services', 'Medical Supplies', 'Oxygen Services']
    return (
        <div>
            {/* <Container>
                <Grid align="center">
                    <h2 style={{ color: orange[500] }}>Register</h2>
                </Grid>
                <ThemeProvider>
                    <TextField 
                        inputProps={{
                            className:'textField'
                        }}
                        InputLabelProps={{
                            className:'textField'
                        }}
                        id="productType"
                        select
                        label="Product type"
                        onChange={handleDropdown}
                        
                    >
                        {
                            products.map((product) => (
                                <MenuItem key={product} value={product}>
                                    {product}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </Container> */}
            <Container className="Form-box">
                <Form className="mx-auto form">
                    <Form.Group>
                        <Form.Label>
                            Product type
                        </Form.Label>
                        <Form.Control as="select" onChange={handleDropdown} style={{ backgroundColor: "black", color: "white", borderColor: "orange" }}>
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
                                <Form.Control type="text" placeholder="Enter food license number" onChange={handleVerificationCode} maxLength={14} style={{ backgroundColor: "black", color: "white", borderColor: "orange" }} />
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
                                <Form.Control as="textarea" rows={3} onChange={handleProductType} maxLength={500} placeholder='Enter description' style={{ backgroundColor: "black", color: "white", borderColor: "orange" }} />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>
                                    Service address:
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={handleProductType} maxLength={500} placeholder='Enter the location from where services are being provided' style={{ backgroundColor: "black", color: "white", borderColor: "orange" }} />
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
                                <Form.Control type="text" placeholder="Enter GST number" onChange={handleVerificationCode} maxLength={15} style={{ backgroundColor: "black", color: "white", borderColor: "orange" }} />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>
                                    Service Description:
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={handleProductType} maxLength={500} placeholder='Enter description' style={{ backgroundColor: "black", color: "white", borderColor: "orange" }} />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>
                                    Service Address:
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={handleProductType} maxLength={500} placeholder='Enter the location from where services are being provided' style={{ backgroundColor: "black", color: "white", borderColor: "orange" }} />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Button variant="warning">
                                    Add product
                                </Button>
                            </Form.Group>
                        </div>
                    }
                </Form>
            </Container>
        </div>

        // ambulance, medical supplies, Hospital beds, oxygen, food
    )
}

export default AddProductForm
