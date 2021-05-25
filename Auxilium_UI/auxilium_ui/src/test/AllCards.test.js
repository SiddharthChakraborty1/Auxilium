import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme';
import AllCards from "../Components/NavCards/AllCards";
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { render as renderer, unmountComponentAtNode } from "react-dom"


Enzyme.configure({ adapter: new Adapter() });
describe("Cards Components rendering test cases", () => {
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
    renderer(<Router><AllCards /></Router>, element);
  });

});
