import { mount } from 'cypress-react-unit-test' // or cypress-react-unit-test
import CategoryContent from '../../../src/modules/categories/components/Content/CategoryContent'

describe('Category Content', () => {
    it('Render without crashing', () => {
        mount(CategoryContent);
        cy.get('#category-name-input').should('exist')
    })

    // it('contains the correct number of todos', () => {
    //     const todos = [
    //         { text: 'Buy milk', id: 1 },
    //         { text: 'Learn Component Testing', id: 2 }
    //     ]
    //
    //     mount(TodoList, {
    //         propsData: { todos }
    //     })
    //
    //     cy.get('[data-testid=todos]').should('have.length', todos.length)
    // })
})
