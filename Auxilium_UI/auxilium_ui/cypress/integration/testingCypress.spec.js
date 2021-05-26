describe("end to end testing", () => {
  it("Home Page testing", () => {
    expect(true).to.equal(true);
  });
  //Arrange
  //-visit
  //query for element
  //act
  //interact
  //assert
  //make assertion

  it("Should visit Home Page", function () {
    cy.visit("http://localhost:3000/");
    cy.contains("Auxilium").click();
    cy.url().should("include", "http://localhost:3000/home");
    //cy.get('emailText').type('b@upadhye@gmail.com').should('have.value','b@upadhye@gmail.com')
  });
});

describe("end to end testing for Login page", () => {
  it("Login", () => {
    expect(true).to.equal(true);
  });

  it("Should visit Login Page n then Register", function () {
    cy.contains("Supplier-Login").click();
    cy.url().should("include", "http://localhost:3000/login");
    cy.contains("Sign Up").click();
    cy.url().should("include", "http://localhost:3000/rgnew");
  });
});

describe("end to end testing for Register page", () => {
  it("Regiester page", () => {
    expect(true).to.equal(true);
  });

  it("Should visit Register Page n then Login", function () {
    cy.contains("Login").click();
    cy.url().should("include", "http://localhost:3000/login");
  });
});

