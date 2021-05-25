import {screen, render} from "@testing-library/react"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme';
import Login from "../Components/SupplierActivities/Login/login";
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
    renderer(<Router><Login/></Router>, element);
  });


});

test('Should have Login text on button Login Component', () => {
  render(<Router><Login /></Router>);
  expect(screen.getByTestId('loginBtn')).toHaveTextContent('Login');
});      

test('Brand Name In Hero-Element', () => {
  render(<Router><Login /></Router>);
  expect(screen.getByTestId('HeroElement')).toHaveTextContent('AUXILIUM')
}); 

test('Should have heading Supplier Login in Login Component', () => {
  render(<Router><Login /></Router>);
  expect(screen.getByTestId('SupplierLoginText')).toHaveTextContent('Supplier Login')
});      

test('Should have BackToMain text on button Login Component', () => {
  render(<Router><Login /></Router>);
  expect(screen.getByTestId('BackToMain')).toHaveTextContent('Back to Main');
});  