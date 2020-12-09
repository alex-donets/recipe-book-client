describe('Logout page', () => {
    before(() => {
        const regUser = { ...Cypress.env('user_data').regular };
        cy.login(regUser.email, regUser.password);
        cy.visit(Cypress.env('ui_url'));
    });

    it('User Info dropdown works', () => {
        cy.get('[data-cy=user-info-dropdown]').children().click();
        cy.contains('Log Out');
    });

    it('Logout works', () => {
        cy.get('[data-cy=logout-btn]').click();
        cy.url().should('include', '/login');
    });
});
