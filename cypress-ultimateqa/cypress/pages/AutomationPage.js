
class AutomationPage {
  menuItem = '#menu-item-217945';

  visit() {
    cy.visit('/automation');
    cy.url().should('include', '/automation');
    cy.contains('h1', 'Automation Practice').should('be.visible');
    return this;
  }
  clickMenuItem() {
    cy.get(this.menuItem)
      .should('be.visible')
      .find('a')
      .first()
      .then(($a) => {
        const href = $a.prop('href');
        const origin = new URL(href, Cypress.config('baseUrl')).origin;
        cy.wrap($a).invoke('removeAttr', 'target').click();
        cy.wrap(origin, { log: false }).as('targetOrigin');
      });
    return cy.get('@targetOrigin');
  }
}

module.exports = new AutomationPage();
