/// <reference types="cypress" />
import { RoutePath } from '../../src/shared/config/constants';

describe('Navigation', () => {
  it('should redirect to about us page', () => {
    cy.visit(RoutePath.main);
    cy.get('[data-testid="aboutUsLink"]').click();
    cy.contains(/about us/i);
    cy.url().should('include', RoutePath.aboutUs);
  });
  it('should redirect to main page', () => {
    cy.visit(RoutePath.aboutUs);
    cy.get('[data-testid="mainLink"]').click();
    cy.contains(/main/i);
    cy.url().should('include', RoutePath.main);
  });
  it('should redirect to card maker page', () => {
    cy.visit(RoutePath.main);
    cy.get('[data-testid="cardMaker"]').click();
    cy.contains(/card maker/i);
    cy.url().should('include', '/card-maker');
  });
  it('should redirect to 404 page', () => {
    cy.visit('/test');
    cy.contains(/page not found/i);
  });
});
