import React, { useState } from 'react'
import { Card, CardContent, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { orange, red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { DeleteProductByProductId, ModifyProductByProductId } from '../../Services/SupplierDashboard.service';
import { Row, Form, Col } from 'react-bootstrap';
import Product from '../../Model/Product';

const DisplayProducts = ({ id, title, desc, loc, verificationNumber }) => {

    const [ModifyFlag, setModifyFlag] = useState(-1)
    const ModifyFlagToggle = () => {
        setModifyFlag(-1 * ModifyFlag)
    }
    const DeleteProduct = () => {
        if (title != "Food Services") {
            DeleteProductByProductId(id)
            window.location.href = "http://localhost:3000/SupplierDashboard"
        }
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

        console.log(date.toISOString());
        var productObject = new Product(
            localStorage.getItem('supId'),
            title,
            newDesc,
            1,
            date.toISOString(),
            { verificationNumber },
            newLoc
        );
        ModifyProductByProductId(productObject, id)
    }

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

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={10}>
                            <Typography className={classes.title}>
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Button
                                variant="contained"
                                className={classes.button}
                                onClick={ModifyFlagToggle}
                            >
                                Modify
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button
                                variant="contained"
                                className={classes.button1}
                                onClick={DeleteProduct}
                                
                            >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                    <hr style={{ backgroundColor: 'orange', height: '2px' }} />
                    <Typography className={classes.desc}>
                        {desc}
                    </Typography>
                    <br />
                    <Typography className={classes.desc}>
                        <u style={{textDecoration:'underline orange'}}><b>Service location:</b></u><br />
                        {loc}
                    </Typography>
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
