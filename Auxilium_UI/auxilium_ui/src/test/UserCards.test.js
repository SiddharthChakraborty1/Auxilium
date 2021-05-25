import { render, screen, getByTestId } from "@testing-library/react"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme';
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { unmountComponentAtNode } from "react-dom"
import UserCard from '../Components/UserCard/UserCard'

Enzyme.configure({ adapter: new Adapter() });
describe("User Cards test cases", () => {

 let element = ''

    beforeEach(() => {
        element = document.createElement('div')
        document.body.appendChild(element)
    })

    afterEach(() => {
        unmountComponentAtNode(element);
        element.remove();
        element = null;
    })

    it("Contact of SupplierName", () => {

        render(<Router><UserCard supplier="Siddharth" date="2021-05-20T14:28:23.013" /></Router>, element);     
        const SName=screen.getByTestId("SupplierName").textContent
        expect(SName).toBe("Provided by : Siddharth");
      });

      it("Contact of Supplier Location", () => {

        render(<Router><UserCard location="Bardi" city="Nagpur" state="Maharashtra" date="2021-05-20T14:28:23.013" /></Router>, element);
        const LocationSupplier=screen.getByTestId("SupplierLocation").textContent
        expect(LocationSupplier).toBe("Location : Bardi, Nagpur, Maharashtra .");
      });

      it("Product Updated on", () => {

        render(<Router><UserCard date="2021-05-20T14:28:23.013" /></Router>, element);
        const Date=screen.getByTestId("UpdatedOn").textContent
        expect(Date).toBe("Updated on : 2021-05-20");
      });

      
  it("Contact of Supplier Contact", () => {

    render(<Router><UserCard contact="8482810828" date="2021-05-20T14:28:23.013" /></Router>, element);
    const Contact=screen.getByTestId("ContactTest").textContent
    expect(Contact).toBe("Contact : 8482810828");
  });


});
