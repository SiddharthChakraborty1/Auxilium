import React, { useState, useEffect } from 'react'
import { Card, CardContent, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { orange, red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import {changeAvailabilityForProducts, changeAvailabilityForFood, DeleteFoodByFoodId, DeleteProductByProductId, GetRequestsByProductId, ModifyProductByProductId, ModifyFoodByFoodId } from '../../Services/SupplierDashboard.service';
import { Row, Form, Col, Modal, Table } from 'react-bootstrap';
import Product from '../../Model/Product';
import ambulance from "../../images/ambulance.svg";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const DisplayProducts = ({ id, supplierId, title, desc, loc, verificationNumber, availability, packaging, modDate }) => {

    const [requests, setRequests] = useState([])
    useEffect(() => {
        if (title != "Food Services") {
            //setRequests(GetRequestsByProductId(id, 0))
            GetRequestsByProductId(id,0).then((res) => setRequests(res))
        }
        else {
            GetRequestsByProductId(id,1).then((res) => setRequests(res))
        }
    }, [])

    const [ModifyFlag, setModifyFlag] = useState(-1)
    const ModifyFlagToggle = () => {
        setModifyFlag(-1 * ModifyFlag)
    }
    const DeleteProduct = () => {
        if (title != "Food Services") {
            DeleteProductByProductId(id)
        }
        else {
            DeleteFoodByFoodId(id)
        }
        window.location.href = "http://localhost:3000/SupplierDashboard"
    }

    const [newDesc, setNewDesc] = useState(desc)
    const handleDesc = (e) => {
        setNewDesc(e.target.value)
    }
    const [newLoc, setNewLoc] = useState(loc)
    const handleLoc = (e) => {
        setNewLoc(e.target.value)
    }
    

    const SubmitModification = (e) => {
        e.preventDefault()
        var date = new Date()
        if (title != "Food Services") {
            console.log(date.toISOString());
            const Product = {
                ProductId: id,
                SupplierId: supplierId,
                ProductType: title,
                ProductDesc: newDesc,
                ProductAvailability: availability,
                ProductLastModifyDate: date.toISOString(),
                ProductGstn: verificationNumber,
                ProductServiceAddress: newLoc
            }
            ModifyProductByProductId(Product).then(()=>alert('Product Service Modified'));
        }

        else
        {
            const Food = {
                FoodId: id,
                SupplierId: supplierId,
                FoodDesc: newDesc,
                FoodPackaging: packaging,
                FoodAvailability: availability,
                FoodLastModifyDate: date.toISOString(),
                FoodLicenseNumber: verificationNumber,
                FoodServiceAddress: newLoc

            }

            ModifyFoodByFoodId(Food).then(()=>alert('Food Service Modified'))

        }
            
        }

       

    const OrangeSwitch = withStyles({
        switchBase: {
            color: red[800],


            '&$checked': {
                color: orange[500],
            },
            '&$checked + $track': {
                backgroundColor: orange[500],
            },
        },
        checked: {},
        track: {
            backgroundColor: red[800]
        },
    })(Switch);


    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            backgroundColor: '#000000',
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 36,
            color: orange[500]
        },
        pos: {
            marginBottom: 12,
        },
        desc: {
            fontsize: 14,
            color: '#eee'
        },
        ButtonBox: {
            marginTop: '2vh',
        },
        button: {

            backgroundColor: orange[500],
            marginTop: "10%",
            color: '#eee',
            '&:hover': {
                backgroundColor: '#212121'
            }
        },
        button1: {

            backgroundColor: red[500],
            marginTop: "10%",
            color: '#eee',
            '&:hover': {
                backgroundColor: '#212121'
            }
        },
        button2: {

            backgroundColor: orange[500],
            color: '#eee',
            '&:hover': {
                backgroundColor: '#212121'
            }
        },
    });

    const classes = useStyles();
    const [state, setState] = useState(true);
    useEffect(() => {
        function setStateOfSwitch() {
            if (availability == 1) {
                setState(true)
            }
            else {
                setState(false)
            }
        }
        setStateOfSwitch()
    }, [])

    const handleChange = (event) => {
        setState(!state)
       if(state == true)
       {
           availability = 0
       }
       else if(state == false)
       {
           availability = 1;
       }
        var now = new Date();
        if (title != "Food Services") {

            let Product = {
                ProductId: id,
                SupplierId: supplierId,
                ProductType: title,
                ProductDesc: desc,
                ProductAvailability: availability,
                ProductLastModifyDate: now.toISOString(),
                ProductGstn: verificationNumber,
                ProductServiceAddress: loc
            }
            changeAvailabilityForProducts(Product).then(()=>alert('Availability changed'))
            

        }
        else
        {
            let Food = {
                FoodId: id,
                SupplierId: supplierId,
                FoodDesc: desc,
                FoodPackaging: packagingDropdown,
                FoodAvailability: availability,
                FoodLastModifyDate: modDate,
                FoodLicenseNumber: verificationNumber,
                FoodServiceAddress: loc
            }

            changeAvailabilityForFood(Food).then(()=>alert('availability changed'))
           

        }
        
        //console.log(state);
        //PUT code for the DB to be added here.
    };

    const [packagingDropdown, setPackagingDropdown] = useState(packaging)
    const handlePackagingChange = (e) => {
        setPackagingDropdown(e.target.value)
        console.log(packagingDropdown);
    }

    const [requestsModal, setRequestsModal] = useState(false)
    const ViewRequests = () => {
        //console.log("here");
        setRequestsModal(true)
    }
    const handleClose = () => setRequestsModal(false);

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography className={classes.title}>
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                variant="contained"
                                className={classes.button}
                                onClick={ViewRequests}
                                style={{ marginTop: "4.5%" }}
                            >
                                View Requests
                            </Button>

                            <Modal show={requestsModal} onHide={handleClose} size="lg" className="request-modal">
                                <Modal.Header style={{ background: 'black', color: 'white', borderColor: 'orange', borderWidth: '1px' }}>Requests</Modal.Header>
                                <Modal.Body style={{ background: '#212121', color: 'white', borderColor: 'orange' }}>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Contact Number</th>
                                                <th>Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                requests.map((request,i) =>
                                                    <tr>
                                                        <th>{i+1}</th>
                                                        <th>{request.userName}</th>
                                                        <th>{request.userContact}</th>
                                                        <th>{request.userEmail}</th>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </Modal.Body>
                                    <Modal.Footer style={{ background: 'black', color: 'white', borderColor: 'orange', borderWidth: '1px' }}>
                                        <Button
                                            variant="contained"
                                            className={classes.button2}
                                            onClick={handleClose}
                                        >
                                            Close
                                        </Button>
                                    </Modal.Footer>
                            </Modal>
                        </Grid>
                            <Grid item xs={2}>

                                <FormGroup style={{ marginTop: "6.8%" }}>
                                    {
                                        state == true &&
                                        <FormControlLabel
                                            control={<OrangeSwitch checked={state} onChange={handleChange} name="checkedA" />}
                                            label="Availabile" style={{ color: orange[500] }}
                                        />
                                    }
                                    {
                                        state == false &&
                                        <FormControlLabel
                                            control={<OrangeSwitch checked={state} onChange={handleChange} name="checkedA" />}
                                            label="Not Available" style={{ color: red[500] }}
                                        />
                                    }
                                </FormGroup>
                            </Grid>
                        </Grid>
                        <hr style={{ backgroundColor: 'orange', height: '2px' }} />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography className={classes.desc}>
                                    {desc}
                                </Typography>
                                <br />
                                <Typography className={classes.desc}>
                                    <u style={{ textDecoration: 'underline orange' }}><b>Service location:</b></u><br />
                                    {loc}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                {
                                    title == "Food Services" &&
                                    <Typography className={classes.desc}>
                                        <u style={{ textDecoration: 'underline orange' }}><b>Packaging type:</b></u><br />
                                        {packaging}
                                    </Typography>
                                }
                                <Typography className={classes.desc}>
                                    <u style={{ textDecoration: 'underline orange' }}><b>Last modified on:</b></u><br />
                                    {modDate}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>

                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    variant="contained"
                                    className={classes.button}
                                    onClick={ModifyFlagToggle}
                                >
                                    Modify
                                </Button>
                                <br />
                                <Button
                                    variant="contained"
                                    className={classes.button1}
                                    onClick={DeleteProduct}

                                >
                                    Delete
                                </Button>
                            </Grid>
                        </Grid>
                        {ModifyFlag == 1 &&
                            <div >
                                <br />
                                <hr style={{ backgroundColor: 'orange', height: '2px' }} />
                                <br />
                                <Form style={{ minWidth: "100%" }}>
                                    <Row>
                                        <Col>
                                            <Form.Label>Change Description</Form.Label>
                                            <Form.Control placeholder={desc} onChange={handleDesc} />
                                        </Col>
                                        <Col>
                                            <Form.Label>Change Service Location</Form.Label>
                                            <Form.Control placeholder={loc} onChange={handleLoc} />
                                        </Col>
                                        {
                                            title == "Food Services" &&
                                            <Col>
                                                <Form.Label>Change Packaging</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    onChange={handlePackagingChange}
                                                >
                                                    <option value="reselect">--Select a packaging--</option>
                                                    <option value="Fruits and/or Vegetables">Fruits and/or Vegetables</option>
                                                    <option value="Tiffin Services">Tiffin Services</option>
                                                    <option value="Fruits and/or Vegetables & Tiffin Services">Both</option>
                                                </Form.Control>
                                            </Col>
                                        }
                                    </Row>

                                    <br />
                                    <Row className="mx-auto">
                                        <Button
                                            variant="contained"
                                            className={classes.button2}
                                            onClick={SubmitModification}
                                            style={{ maxWidth: "7vw" }}
                                        >
                                            Submit
                                        </Button>
                                    </Row>
                                </Form>
                            </div>
                        }
                </CardContent>
            </Card>
        </div>
            )
}

            export default DisplayProducts
