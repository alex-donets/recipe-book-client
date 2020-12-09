describe('App testing', () => {
    it('Header has been rendered successfully', () => {
        cy.visit(Cypress.env('ui_url'));
        cy.contains('Recipe Book');
        cy.contains('Login');
        cy.contains('Register')
    });

    it('Header navigation works', () => {
        cy.visit(Cypress.env('ui_url'));
        cy.contains('Login').click();
        cy.url().should('include', 'login');

        cy.contains('Register').click();
        cy.url().should('include', 'register');

        cy.contains('Recipe Book').click();
        cy.url().should('eq', Cypress.env('ui_url'));
    });
});
