/// <reference types="cypress" />
const Component = require('./Component');

describe('page', () => {
  it('works', () => {
    cy.mount(<Component/>)
  })
})
