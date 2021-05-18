import { Container, createMuiTheme, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import axios from "axios";
import { getSupplierById } from "../../Services/SupplierCredentials.service";
import { getFood } from "../../Services/UserDashboard.service";
import UserCard from "../UserCard/UserCard";
import { ThemeProvider, TextField, MenuItem, Paper } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

const themes = createMuiTheme({
    palette:{
        primary: {
            main: orange[500],
            dark: orange[500]
        }
    }
})



const useStyles = makeStyles((theme) => ({
  bgPaper: {
    width: "60vw",
    backgroundColor: "#212121",
    marginBottom: "20px",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },

  input: {
    margin: "0px 10px",
    width: "50%",
    backgrondColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  inputLabel: {
    color: "white",
  },
}));

const UserDashboard = (props) => {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [tempList, setTempList] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = "#404040";
    if (props.productType != "Food Services") {
      getProductsByType(props.productType);
    } else {
      getFood();
    }
  }, []);

  useEffect(() => {
    setProductList(tempList);
  }, [tempList]);

  async function getProductsByType(productType) {
    {
      console.log("came inside get products by type");

      //note: the product type will be supplied by the userDashboard
      //let finalProductList = [];
      let pList = [];
      let productArray = [];
      let url = "http://localhost:17014/api/products/type/" + productType;
      const response = await axios.get(url);
      const returnedData = await response.data;
      productArray = await returnedData;
      console.log(productList);

      // now we will get the required supplier details by using the supplier id
      // provided by the product

      productArray.forEach((element) => {
        let finalProductDetail = {};
        let supplier = getSupplierById(element.supplierId);
        supplier.then((data) => {
          console.log("got the supplier for product");

          // the following object will contain all the required data about the product
          // and it's supplier
          finalProductDetail = {
            ...element,
            supplierState: data.supplierState,
            supplierCity: data.supplierCity,
            supplierContact: data.supplierContact,
            supplierName: data.supplierName,
          };
          console.log(finalProductDetail);

          pList.push(finalProductDetail);
          if (pList.length == productArray.length) {
            setTempList(pList);
          }
          //console.log(finalProductList);
        });
        //return finalProductList;
      });
      //return finalProductList
    }
  }

  async function getFood() {
    {
      console.log("came inside get products by type");

      //note: the product type will be supplied by the userDashboard
      //let finalProductList = [];
      let pList = [];
      let foodArray = [];
      let url = "http://localhost:17014/api/foods";
      const response = await axios.get(url);
      const returnedData = await response.data;
      foodArray = await returnedData;
      console.log(productList);

      // now we will get the required supplier details by using the supplier id
      // provided by the product

      foodArray.forEach((element) => {
        let finalProductDetail = {};
        let supplier = getSupplierById(element.supplierId);
        supplier.then((data) => {
          console.log("got the supplier for product");

          // the following object will contain all the required data about the product
          // and it's supplier
          finalProductDetail = {
            ...element,
            supplierState: data.supplierState,
            supplierCity: data.supplierCity,
            supplierContact: data.supplierContact,
            supplierName: data.supplierName,
          };
          console.log(finalProductDetail);

          pList.push(finalProductDetail);
          if (pList.length == foodArray.length) {
            setTempList(pList);
          }
          //console.log(finalProductList);
        });
        //return finalProductList;
      });
      //return finalProductList
    }
  }
  
  return (
    <Container>
      <div className="heading">
        <h1 style={{ color: "white" }}>{props.productType}</h1>
      </div>
      <div className="cardContainer">
          
        <Paper className={classes.bgPaper} elevation={10}>
        <h4 style={{color: 'orange',  textAlign: 'center'}}>Search by your state and city</h4>
          <Grid className={classes.container} container>
            <Grid className={classes.input} item sm={5}>
              <TextField
                InputLabelProps={{
                  className: classes.inputLabel,
                }}
                name="stateText"
                required
                fullWidth
                id="states"
                label="State"
                select
              >
                {/* {this.state.dropDownList1.map((x) => {
                        return <MenuItem value={x.name}>{x.name}</MenuItem>;
                      })} */}
              </TextField>
            </Grid>
            <ThemeProvider theme={themes}>
              <Grid className={classes.input} item sm={5}>
                <TextField
                  InputLabelProps={{
                    className: classes.inputLabel,
                  }}
                  name="stateText"
                  required
                  fullWidth
                  id="states"
                  label="State"
                  select
                >
                  {/* {this.state.dropDownList1.map((x) => {
                        return <MenuItem value={x.name}>{x.name}</MenuItem>;
                      })} */}
                </TextField>
              </Grid>
            </ThemeProvider>
          </Grid>
        </Paper>
        {/*<UserCard Title="Watermelon" Desc="<3" />*/}
        {productList.map((item) => (
          <div>
            <UserCard
              description={
                props.productType != "Food Services"
                  ? item.productDesc
                  : item.foodDesc
              }
              supplier={item.supplierName}
              contact={item.supplierContact}
              state={item.supplierState}
              city={item.supplierCity}
              location={item.productServiceAddress}
              date={item.productLastModifyDate}
            />
            <br />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default UserDashboard;
