describe('Login page', () => {
    const adminUser = { ...Cypress.env('user_data').admin };

    const userData = {
        email: adminUser.email,
        password: adminUser.password,
    };

    before(() => {
        cy.visit(`${Cypress.env('ui_url')}login`);
    });

    it('Inputs have values', () => {
        Object.keys(userData).map((key) => {
            cy.get(`[data-cy=login-${key}-input]`)
                .type(userData[key])
                .children()
                .should('have.value', userData[key]);
        });
    });

    it('Login form has been submitted', () => {
        cy.get('[data-cy=login-btn]').click();
        cy.url().should('eq', Cypress.env('ui_url'));
        cy.contains('Create Recipe');
    });

    it('Categories route should be displayed for admin', () => {
        cy.get('.custom-header').find('[href="/categories"]');
    })
});
