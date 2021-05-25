import AddProductForm from "../Components/AddProductForm/AddProductForm";
import { render as renderer, unmountComponentAtNode } from "react-dom"
import { getByTestId, fireEvent, render, screen, getAllByRole } from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom';
import { Component } from "react";

describe("AddProductForm test cases", ()=>{
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

    test("dropdown options rendering", ()=> {
        renderer(<Router><AddProductForm /></Router>, element);
        let dropdownOptions = screen.getAllByTestId('options').length
        expect(dropdownOptions).toBeGreaterThanOrEqual(2)
    })

    // test("Food fields", () => {
    //     render(<Router><AddProductForm /></Router>)
    //     let dropdown = screen.getByTestId('dropdown')
    //     fireEvent.click(dropdown)
    //     let dropdownOptions = screen.getAllByTestId('options')
    //     fireEvent.click(dropdownOptions[4])

    //     let numberOfFields = screen.getAllByTestId("field").length
    //     console.log(numberOfFields);

    //     expect(numberOfFields).toEqual(5)
    // })
})