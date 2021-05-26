

describe("end to end testing", () => {
  it("Does not do much", () => {
  expect(true).to.equal(true)
  });
  //Arrange
  //-visit
  //query for element
  //act
  //interact
  //assert
  //make assertion

  it('Should visit Home Page',function(){
    cy.visit("http://localhost:3000/");
    cy.contains('Auxilium').click()
    cy.url().should('include','http://localhost:3000/home')

  })
})
 