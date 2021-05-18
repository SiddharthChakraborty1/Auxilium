import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import axios from 'axios';
import {getSupplierById} from '../../Services/SupplierCredentials.service'
import UserCard from "../UserCard/UserCard";



const UserDashboard = () => {
  const [productList, setProductList] = useState([]);
  const [tempList, setTempList] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = "#404040";
    getProductsByType('Bed Services');
  }, []);

 useEffect(()=>{
     setProductList(tempList);
     

  },[tempList])

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
          if(pList.length == productArray.length)
          {
              setTempList(pList);
          }
          //console.log(finalProductList);
        });
        //return finalProductList;
      });
      //return finalProductList
    }
  }
  // const items = [
  //     {
  //         Title: "asd",
  //         Desc: "kughzzzzzzzzzzj",
  //         Contact: "abc"
  //     },
  //     {
  //         Title: "khg",
  //         Desc: "khjjkn",
  //         Contact: "abc"
  //     },
  // ]
  return (
    <Container>
      <div className="heading">
        <h1 style={{ color: "white" }}>Product type</h1>
      </div>
      <div className="cardContainer">
        {/*<UserCard Title="Watermelon" Desc="<3" />*/}
        {productList.map((item) => (
          <div>
            <UserCard
              Title={item.productDesc}
              Desc={item.supplierName}
              Contact={item.supplierContact}
            />
            <br />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default UserDashboard;
