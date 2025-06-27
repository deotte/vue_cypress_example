describe(('Test two but with better selectors'), () => {
  it('Visits the star wars page and displays a hero with better cypress selectors', () => {
    cy.visit('http://localhost:5173');
    cy.get('[data-cy="star-wars-link"]').click();
    cy.url().should('include', '/star-wars');
    cy.get('[data-cy="hero-name"]').should('contain', 'Luke Skywalker');
    cy.get('[data-cy="hero-birthday"]').should('contain', '19BBY');
  });
});