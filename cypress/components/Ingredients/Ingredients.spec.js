import 'cypress-react-selector';

describe('Recipe', () => {
    before(() => {
        const regUser = { ...Cypress.env('user_data').regular };
        cy.login(regUser.email, regUser.password);
        cy.visit(`${Cypress.env('ui_url')}recipes`);
        cy.waitForReact();
    });

    it('IngredientForm component should exists', () => {
        cy.react('IngredientForm').should('exist');
    })
});
