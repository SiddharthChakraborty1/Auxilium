import React from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import Aboutus from "../About/Aboutus";
import AllCards from "./AllCards";

export default class NavCards extends React.Component {
  constructor() {
    super();
  }

  

  render() {
    return (
      <div>
        <Header></Header>
        
        <AllCards></AllCards>
        <br />
        <Aboutus></Aboutus>
        <br/>
        <Footer></Footer>
      </div>
    );
  }
}
