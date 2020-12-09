describe('Register page', () => {
    const adminUser = { ...Cypress.env('user_data').admin };
    const userData = {
        name: adminUser.name,
        email: adminUser.email,
        password: adminUser.password,
        confirmPassword: adminUser.password,
    };

    before(() => {
        cy.delete_user(userData.email);
        cy.visit(`${Cypress.env('ui_url')}register`);
    });

    it('Inputs have values', () => {
        Object.keys(userData).map((key) => {
            cy.get(`[data-cy=register-${key}-input]`)
                .type(userData[key])
                .children()
                .should('have.value', userData[key]);
        });

        cy.get(`[data-cy=register-agreeTaC-input]`)
            .children('input')
            .click({force: true})
            .should('have.value', "true");
    });

    it('Register form has been submitted', () => {
        cy.get('[data-cy=register-btn]').click();
        cy.url().should('include', '/login');
    })
});
