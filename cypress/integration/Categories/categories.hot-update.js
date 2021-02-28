describe('Categories page', () => {
    const adminUser = { ...Cypress.env('user_data').admin };
    const userData = {
        email: adminUser.email,
        password: adminUser.password,
    };

    const categoryData = ['Test Category'];

    before(() => {
        cy.login(userData.email, userData.password);
        cy.visit(`${Cypress.env('ui_url')}categories`);
    });

    it('Create category component should be displayed', () => {
        cy.contains('Add New').click();
        cy.get('#new').click();
        cy.contains('Create a category');
    });

    it('Categories should be added', () => {
        categoryData.forEach(el => {
            cy.get('[data-cy=category-name-input]')
                .children()
                .type(el, { force: true });

            cy.fixture('images/default-image.png').as('image');

            cy.get('input[type=file]').then(function (el) {
                // convert the logo base64 string to a blob
                const blob = Cypress.Blob.base64StringToBlob(this.image, 'image/png');

                const file = new File([blob], 'images/default-image.png', { type: 'image/png' });
                const list = new DataTransfer();

                list.items.add(file);
                const myFileList = list.files;

                el[0].files = myFileList;
                el[0].dispatchEvent(new Event('change', { bubbles: true }));
            }).then(() => {
                cy.get('[data-cy=category-action-btn]').click({force: true});

                cy.visit(`${Cypress.env('ui_url')}`);

                categoryData.forEach(el => {
                    cy.contains(el)
                })
            })
        });
    });

    after(() => {
        cy.delete_categories(categoryData);
    })
});
