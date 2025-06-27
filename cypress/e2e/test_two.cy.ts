describe('Test two', () => {
    it('Visits the star wars page and displays a hero properly from the API', () => {
        cy.visit('http://localhost:5173');
        cy.contains('Star Wars').click();
        cy.url().should('include', '/star-wars');
        cy.get('.star-wars').get('h1').should('contain', 'Luke Skywalker');
        cy.get('.star-wars').get('h2').should('contain', '19BBY');
    });
});