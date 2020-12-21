import 'cypress-react-selector';

describe('Recipe', () => {
    const values = {
        categoryId: "",
        directions: "",
        name: "",
    };

    before(() => {
        const adminUser = { ...Cypress.env('user_data').admin };
        cy.login(adminUser.email, adminUser.password);
        cy.visit(`${Cypress.env('ui_url')}recipes`);
        cy.waitForReact();
    });

    it('RecipeForm component should exists', () => {
        cy.react('RecipeForm').should('exist');
        cy.react('RecipeForm',  { props: { values }}).should('exist');
    });

    it('RecipeForm input should have value', () => {
        cy.react('Input', { props:{ id: "recipe-name-input" }}).type('text');
        cy.get('Input').should('have.value', 'text');
    })
});
