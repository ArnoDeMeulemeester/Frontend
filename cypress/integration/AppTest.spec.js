describe('Test of hij het openingsscherm toont', () => {
  it('should run the application', () => {
    cy.visit('http://localhost:3000');
    cy.get('header').should('exist');
  });

  it('should display a form', () => {
    cy.visit('http://localhost:3000');
    cy.get('form').should('exist');
  });

  it("should log in", () => {
    cy.visit("http://localhost:3000");
  
    cy.get("[data-cy=username]").type("User");
    cy.get("[data-cy=password]").type("user");   
    cy.get("[data-cy=submit]").click(); 

    cy.get('nav').should('exist');
    cy.get('ul').should('exist');
  });
}); 