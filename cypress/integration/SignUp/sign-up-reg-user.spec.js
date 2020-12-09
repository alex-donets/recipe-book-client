describe('Register page', () => {
    const regUser = { ...Cypress.env('user_data').regular };
    const userData = {
        name: regUser.name,
        email: regUser.email,
        password: regUser.password,
        confirmPassword: regUser.password,
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
