/// <reference types="cypress" />
import Component from './Component';
import * as ReactDom from 'react-dom';

describe('page', () => {
  it('works', () => {
    cy.mount(<Component/>, {ReactDom})
  })
})
