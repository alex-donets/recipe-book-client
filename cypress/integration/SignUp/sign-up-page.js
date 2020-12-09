describe('Register page', () => {
    before(() => {
        cy.visit(`${Cypress.env('ui_url')}register`);
    });

    it('Register page has been rendered', () => {
        cy.contains('Creating a new profile');
        cy.contains('I agree to the Terms and Conditions');
    });

    it('Register form should have validation', () => {
        cy.get('[data-cy=register-btn]').click();
        cy.contains('required');
    });
});
