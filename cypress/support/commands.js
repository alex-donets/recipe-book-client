import { isEmpty } from 'lodash';

const AUTH_TOKEN_KEY = 'recipe-book:user-auth-token';

Cypress.Commands.add("login", (email, password) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('api_url')}users/login`,
        body: { email, password }
    })
        .then((response) => {
            expect(response.status).to.eq(200);
            window.localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(response.body))
        })
});

Cypress.Commands.add("logout", () => {
    window.localStorage.removeItem(AUTH_TOKEN_KEY);
});

Cypress.Commands.add("delete_user", (email) => {
    cy.request({
        method: 'DELETE',
        url: `${Cypress.env('api_url')}users/delete`,
        body: { email },
    })
        .then((response) => {
            expect(response.status).to.eq(200);
        })
});

Cypress.Commands.add("add_category", (name) => {
    const { token } = JSON.parse(window.localStorage.getItem(AUTH_TOKEN_KEY));

    cy.request({
        method: 'POST',
        url: `${Cypress.env('api_url')}categories/add`,
        body: { name },
        headers: { jwt: token }
    })
        .then((response) => {
            expect(response.status).to.eq(200);
        })
});

Cypress.Commands.add("delete_categories", (categoryList) => {
    const { token } = JSON.parse(window.localStorage.getItem(AUTH_TOKEN_KEY));

    cy.request({
        method: 'GET',
        url: `${Cypress.env('api_url')}categories/`,
        headers: { jwt: token }
    })
        .then((response) => {
            expect(response.status).to.eq(200);

            const testedCategories = response
                && response.body
                && response.body.filter(item => categoryList.includes(item.name));

            if (!isEmpty(testedCategories)) {
                testedCategories.forEach(item => {
                    cy.request({
                        method: 'DELETE',
                        url: `${Cypress.env('api_url')}categories/${item._id}`,
                        headers: { jwt: token }
                    })
                        .then((response) => {
                            expect(response.status).to.eq(200);
                        })
                })

            }
        });

});
