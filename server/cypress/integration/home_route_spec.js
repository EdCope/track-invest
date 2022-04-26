describe('Navigate to /', () => {
  it('Displays a title', () => {
    cy.visit('/');
    cy.contains('Track Invest');
  })
  it('has a price displayed on the page', () => {
    cy.visit('/');
    cy.get('[data-cy=price]').should("contain", "400");
  })
})