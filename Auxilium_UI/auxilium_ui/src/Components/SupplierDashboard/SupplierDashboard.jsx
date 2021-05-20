import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { orange } from "@material-ui/core/colors"
import { Container } from "react-bootstrap"
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import AddProductForm from '../AddProductForm/AddProductForm'
import './SupplierDashboard.css'
import EditProfile from '../EditProfile/EditProfile';
import { GetFoodsBySupplierId, GetProductsBySupplierId } from '../../Services/SupplierDashboard.service'
import { getSupplierById } from '../../Services/SupplierCredentials.service';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    useEffect(() => {
        document.body.style.backgroundColor = '#404040'
    });

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} style={{ background: "#404040" }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}



TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabstyles: {
        '&:hover': {
            color: orange[600],
            opacity: '1'

        }
    }
}));


function LinkTab(props) {
    const classes = useStyles();
    return (
        <Tab
            hover
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
            className={classes.tabstyles}

        />
    );
}



export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    useEffect(() => {
        getSupplierName();
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [i, setI] = useState(0)
    const [items, setItems] = useState([])
    const [fooditems, setFooditems] = useState([])
    useEffect(() => {
        GetProductsBySupplierId(localStorage.getItem('supId')).then((res) => setItems(res))
        GetFoodsBySupplierId(localStorage.getItem('supId')).then((res) => setFooditems(res))
    }, [i])

    const loadData = () => {
        setI(-1 * i)
    }

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#212121"
            },
            secondary: {
                main: orange[500]
            }
        }
    });

    const [supplierName, setSupplierName] = useState('');

    const getSupplierName = () => {

        getSupplierById(localStorage.getItem('supId')).then(data => {

            setSupplierName(data.supplierName)
            console.log(data.supplierName);
        })

    }
    return (
        <Container>
            <ThemeProvider theme={theme}>
                <div className="labelBox">
                    <p align="center">
                        <h1>Hello, {supplierName}</h1>
                    </p>
                </div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="nav tabs example"
                            className='tabstyles'
                            centered
                        >
                            <LinkTab label="Current products" {...a11yProps(0)} onClick={loadData} />
                            <LinkTab label="Add products" {...a11yProps(1)} />
                            <LinkTab label="Edit profile" href="/spam" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <br />
                        {/* <DisplayProducts title="abc" desc="oiudshviun"/> */}
                        {
                            items.map((item) =>
                                <div>
                                    <DisplayProducts id={item.productId} title={item.productType} desc={item.productDesc} loc={item.productServiceAddress} verificationNumber={item.productGstn} availability={item.productAvailability} packaging="none" modDate={item.productLastModifyDate}/>
                                    <br />
                                </div>
                            )
                        }
                        {
                            fooditems.map((fooditem) =>
                                <div>
                                    <DisplayProducts id={fooditem.foodId} title="Food Services" desc={fooditem.foodDesc} loc={fooditem.foodServiceAddress} verificationNumber={fooditem.foodLicenseNumber} availability={fooditem.foodAvailability} packaging={fooditem.foodPackaging} modDate={fooditem.foodLastModifyDate} />
                                    <br />
                                </div>
                            )
                        }
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <AddProductForm />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        {/* <EditProfile name="abc" email="zxc" state="Goa" city="fgh" /> */}
                        
                    </TabPanel>
                </div>
            </ThemeProvider>
        </Container>

    );
}

