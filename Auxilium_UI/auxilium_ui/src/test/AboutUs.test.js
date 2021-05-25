import Aboutus from '../Components/AboutUs/Aboutus'
import { render as renderer, unmountComponentAtNode } from "react-dom"
import { render, screen } from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom';

describe("AboutUs component test cases", ()=>{
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

    test('Page heading', () => {
        render(<Router><Aboutus/></Router>)
        expect(screen.getByTestId('heading')).toHaveTextContent("About Us")
    })
    
    test('Carousel loading', () => {
        renderer(<Router><Aboutus /></Router>, element);
        const count = element.getElementsByClassName('carouselItem').length;
        expect(count).toEqual(3);
    })
    
})

export default Aboutus