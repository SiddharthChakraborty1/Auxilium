import {screen, render} from "@testing-library/react"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme';
import RegisterNew from "../Components/SupplierActivities/Register/registerNew";
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { render as renderer, unmountComponentAtNode } from "react-dom"


Enzyme.configure({ adapter: new Adapter() });
describe("Login test cases", () => {

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
    renderer(<Router><RegisterNew/></Router>, element);
  });


});

test('Should have RegisterNew text on button RegisterNew Component', () => {
  render(<Router><RegisterNew /></Router>);
  expect(screen.getByTestId('RegisterBtn')).toHaveTextContent('Register');
});      

test('Should have heading Supplier Login in RegisterNew Component', () => {
  render(<Router><RegisterNew /></Router>);
  expect(screen.getByTestId('SupplierRegisterText')).toHaveTextContent('Supplier Registration')
});      

test('Should have BrandName text on button Login Component', () => {
  render(<Router><RegisterNew /></Router>);
  expect(screen.getByTestId('BrandName')).toHaveTextContent('Auxilium');
});  