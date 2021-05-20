import React, { useState, useEffect } from 'react'
import './AddProductForm.css'
import { Container, Form, Button } from 'react-bootstrap'
import Product from '../../Model/Product'
import { AddFood, AddProduct } from '../../Services/SupplierDashboard.service'
import { useHistory, Redirect } from 'react-router-dom'
import Food from '../../Model/Food'
import { Link } from '@material-ui/core'

const GST_Services = ['Ambulance', 'Bed Services', 'Medical Supplies', 'Oxygen Services']


const AddProductForm = () => {
    const history = useHistory();
    const [productType, setProductType] = useState('reselect')
    const [verificationNumber, setVerificationNumber] = useState('')
    const [productDesc, setProductDesc] = useState('')
    const [serviceAddress, setServiceAddress] = useState('')
    const [foodPackaging, setFoodPackaging] = useState('')

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

    const handelProductDesc = (e) => {
        setProductDesc(e.target.value);
    }
    useEffect(() => {
    }, [productDesc])

    const handleServiceAddress = (e) => {
        setServiceAddress(e.target.value)
    }
    useEffect(() => {
    }, [serviceAddress])

    const handleFoodPackaging = (e) => {
        setFoodPackaging(e.target.value)
    }
    

    const handleSubmit = (e) => {
        //console.log(localStorage.getItem('supId'));
        e.preventDefault()
        var date = new Date()

        if (productType != "Food Services") {

            if(productType === '' ||
            verificationNumber === '' ||
            productDesc === '' ||
            serviceAddress === '' 
             ){
                 alert('Multiple Fields Empty')
             }
             else if(verificationNumber.length != 15)
             {
                 alert('invalid GSTN')
             }
             else{
                var productObject = new Product(
                    localStorage.getItem('supId'),
                    productType,
                    productDesc,
                    1,
                    date.toISOString(),
                    verificationNumber,
                    serviceAddress
                );
                
                 AddProduct(productObject).then(()=>{
                     alert('Product Added');
                    
                     return <Redirect to='/login'  />

                     
                 })
                 //.then(setProductType('reselect'));
                // window.location.reload(false);

             }
            
            //console.log(date.toISOString());
}
        else{
                if(

                    productDesc === '' ||
                    foodPackaging === '' ||
                    verificationNumber === '' ||
                    serviceAddress === ''

                ){
                    alert('Multiple Fields Empty')

                }
                else if(verificationNumber.length != 14)
                {
                    alert('Invalid food license number')
                }
                else
                {
                    var foodObject = new Food(
                        localStorage.getItem('supId'),
                        productDesc,
                        foodPackaging,
                        1,
                        date.toISOString(),
                        verificationNumber,
                        serviceAddress
                    );
            
                    //console.log(foodObject);
                    AddFood(foodObject).then(alert("Food Service Added")).then(setProductType('reselect'))

                }

           
        }
        
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
                                    value="Fruits and/or Vegetables"
                                    onChange={handleFoodPackaging}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Tiffin Services"
                                    name="packaging"
                                    value="Tiffin Services"
                                    onChange={handleFoodPackaging}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Both"
                                    name="packaging"
                                    value="Fruits and/or Vegetables & Tiffin Services"
                                    onChange={handleFoodPackaging}
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
                                onChange={handelProductDesc} 
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
                                    onChange={handelProductDesc} 
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
