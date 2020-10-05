describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("load page", () => {
    cy.visit('/');
    cy.contains("angular-jest-test app is running!");
  });

  it('has app title, shows proper command by default and reacts on command changes', () => {
    cy.contains('angular-jest-tes');

    cy.contains('.terminal', 'ng generate component xyz');

    cy.contains('Angular Material').click();
    cy.contains('.terminal', 'ng add @angular/material');
  });
});