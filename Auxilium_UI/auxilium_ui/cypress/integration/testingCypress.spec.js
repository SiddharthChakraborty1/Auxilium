import { mount } from "@cypress/react";
import Home from '../../src/Components/Home/Home'
import AddProductForm from '../../src/Components/AddProductForm/AddProductForm'
// beforeEach(() => {
//   cy.visit('http://localhost:3000/')
// })

describe("end to end testing", () => {
  // it("it home page", () => {
  //   cy.visit("http://localhost:3000/");
  
  // });
  it("renders Brand link", () => {
    mount(<AddProductForm />);
    cy.visit("http://localhost:3000/AddProductForm");
    //cy.get("Link").contains("Auxilium");
  });
});
