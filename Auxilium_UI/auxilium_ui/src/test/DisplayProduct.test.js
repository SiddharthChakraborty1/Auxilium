import { render, screen } from "@testing-library/react"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme';
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { unmountComponentAtNode } from "react-dom"
import DisplayProducts from "../Components/DisplayProducts/DisplayProducts";


Enzyme.configure({ adapter: new Adapter() });
describe("Display Products test cases", () => {

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

  it("Display Product Title", () => {
    render(<Router><DisplayProducts title='abc'/></Router>, element);
    let Dtitle=screen.getByTestId("DisplayTitle").textContent
    expect(Dtitle).toBe("abc");
  });

});
