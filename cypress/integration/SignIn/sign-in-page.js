describe('Login page', () => {
    before(() => {
        cy.visit(`${Cypress.env('ui_url')}login`);
    });

    it('Login page has been rendered', () => {
        cy.contains('Log-in to your account');
        cy.contains('Forgot Password?');
        cy.contains('New to us? Sign Up');
        cy.contains('Sign in with Google:');
    });

    it('Selectors should have classes', () => {
        cy.get('h2').should('have.class', 'primary-text');
        cy.get('[data-cy="login-btn"]').should('have.class', 'primary-button');
    });

    it('Login form should have data-attributes', () => {
        cy.get('#login-email-input').parent().should('have.attr', 'data-cy');
        cy.get('#login-password-input').parent().should('have.attr', 'data-cy');
    });
});
