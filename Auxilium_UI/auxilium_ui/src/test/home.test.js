import PersistentDrawerLeft from "../Components/Home/Home";
import { render as renderer, unmountComponentAtNode } from "react-dom"
import { getByTestId, fireEvent, render, screen, getAllByRole, within } from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom';
import { Component } from "react";

describe("Home test cases", ()=>{
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

    test('renders without crashing', () => {
        renderer(<Router><PersistentDrawerLeft /></Router>, element)
    })
    
    
})