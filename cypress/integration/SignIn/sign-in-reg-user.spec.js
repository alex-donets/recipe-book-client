describe('Login page', () => {
    const regUser = { ...Cypress.env('user_data').regular };

    const userData = {
        email: regUser.email,
        password: regUser.password,
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

    it('Categories should not be displayed for regular user', () => {
        cy.get('a', { multiple: true }).should('not.have.attr','href', '/categories');
    })
});
