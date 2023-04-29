/// <reference types="cypress" />
import { RoutePath } from '../../../src/shared/config/constants';

function fillAndSubmitForm() {
  cy.get('[data-testid="name"]').type('Dmitry');
  cy.get('[data-testid="birthday"]').type('2000-02-22');
  cy.get('[data-testid="country"]').select('Russia');
  cy.get('[data-testid="male"]').click();
  cy.get('[data-testid="avatar"]').selectFile({
    fileName: 'file.jpeg',
    contents: ['no picture here'],
  });
  cy.get('[data-testid="agreement"]').click();
  cy.get('[data-testid="submit"]').click();
}

describe('Card maker', () => {
  beforeEach(() => {
    cy.visit(RoutePath.cardMaker);
  });

  it('should add a new human to the list when the form is submitted once', () => {
    fillAndSubmitForm();
    cy.get('[data-testid="humanList"]').find('>li').should('have.length', 1);
  });
  it('should add two new humans to the list when the form is submitted twice', () => {
    fillAndSubmitForm();
    fillAndSubmitForm();
    cy.get('[data-testid="humanList"]').find('>li').should('have.length', 2);
  });
});
