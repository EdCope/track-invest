describe('Navigate to /', () => {
  it('Displays a title', () => {
    cy.visit('/');
    cy.contains('Track Invest');
  })
})