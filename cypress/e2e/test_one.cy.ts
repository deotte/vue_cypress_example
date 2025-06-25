describe('Test one', () => {
    it('Visits the home page and clicks the about link', () => {
        cy.visit('http://localhost:5173');
        cy.contains('About').click();
        cy.url().should('include', '/about');
        cy.get('.about')
            .get('h1').should('contain', 'This is an about page');
    });
});