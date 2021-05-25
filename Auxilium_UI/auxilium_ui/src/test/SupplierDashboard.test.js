import { shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme';
import SupplierDashboard from "../Components/SupplierDashboard/SupplierDashboard";
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { render as renderer, unmountComponentAtNode } from "react-dom"


Enzyme.configure({ adapter: new Adapter() });
describe("supplier dashboard test cases", () => {
//   it("supplier dashboard test case", () => {
//     const wrap = shallow(<SupplierDashboard />)
//     wrap.state({supplierName:"Bhargavi Upadhye"})
    
//     expect(
//         wrap.containsMatchingElement(
//           <h1>Hello, Bhargavi Upadhye</h1>
//         )
//       ).toBeTruthy()


 // });

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

  it("renders without crashing", () => {
    renderer(<Router><SupplierDashboard /></Router>, element);
  });

});
