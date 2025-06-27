describe('Test two but with mock data', () => {
    it('Visits the star wars page and displays a hero from mocked data', () => {
        cy.intercept('https://swapi.info/api/people/1', { fixture: 'hero.json' });
        cy.visit('http://localhost:5173');
        cy.contains('Star Wars').click();
        cy.url().should('include', '/star-wars');
        cy.get('.star-wars').get('h1').should('contain', 'Han Solo');
        cy.get('.star-wars').get('h2').should('contain', '29BBY');
    });
});