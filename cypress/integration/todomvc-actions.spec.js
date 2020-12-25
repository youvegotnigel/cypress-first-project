/// <reference types="Cypress" />


describe('todo actions', () => {

  beforeEach('This is the beforeEach', () => {

    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo', { timeout: 6000 }).type("Clean Room{enter}")

  })

  it('should add a new todo to the list', () => {

    cy.get('label').should('have.text', 'Clean Room')
    cy.get('.toggle').should('not.be.checked')

  })

  it('should mark a todo as completed', () => {

    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through') //validate on the CSS elements


  })

  it('should clear completed todos', () => {

    cy.get('.toggle').click()
    cy.contains('Clear completed').click()
    cy.get('.new-todo').should('not.have.descendants', 'li')  //validate on the DOM elements

  })

})


