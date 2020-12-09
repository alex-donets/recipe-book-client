describe('Home page', () => {
    const adminUser = { ...Cypress.env('user_data').admin };
    const userData = {
        email: adminUser.email,
        password: adminUser.password,
    };

    const categoryData = [ 'First Category', 'Second Category'];

    before(() => {
        cy.login(userData.email, userData.password);
        categoryData.forEach(el => cy.add_category(el));
        cy.visit(`${Cypress.env('ui_url')}`);
    });

    it('Categories should be displayed', () => {
        categoryData.forEach(el => {
            cy.contains(el)
        });
    });

    after(() => {
        cy.delete_categories(categoryData);
    })
});
