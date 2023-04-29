/// <reference types="cypress" />
import { RoutePath } from '../../../src/shared/config/constants';

describe('Main', () => {
  it('displays error message when no search results are found', () => {
    cy.visit(RoutePath.main);
    cy.get('[data-testid="search"]').type("You won't find anything for sure.");
    cy.get('[data-testid="submit"]').click();
    cy.contains('Nothing was found. Enter another search term.');
  });
});
