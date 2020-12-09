// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
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
        body: { email }
    })
        .then((response) => {
            expect(response.status).to.eq(200);
        })
});

Cypress.Commands.add("add_category", (name) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('api_url')}categories/add`,
        body: { name }
    })
        .then((response) => {
            expect(response.status).to.eq(200);
        })
});

Cypress.Commands.add("delete_categories", (categoryList) => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('api_url')}categories/`,
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
                    })
                        .then((response) => {
                            expect(response.status).to.eq(200);
                        })
                })

            }
        });

});

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
//Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
