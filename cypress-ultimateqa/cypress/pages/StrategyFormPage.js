
const selectors = {
  name: 'input[name$="firstname"], input[name="name"], input[name$="/name"]',
  email: 'input[type="email"], input[name$="email"]',
  role: '[name$="jobtitle"], [name$="role"], [name*="role" i]',
  company: 'input[name$="company"], input[name*="company" i]',
  message: 'textarea[name$="message"], textarea, [name$="message"]',
  submit: 'input[type="submit"], button[type="submit"]',
  thankYou: 'thank you',
};

class StrategyFormPage {
  fillAndSubmit(origin, data) {
    cy.origin(origin, { args: { data, selectors } }, ({ data, selectors }) => {
      cy.get(selectors.name, { timeout: 20000 }).first().should('be.visible').fillField(data.name);
      cy.get(selectors.email).first().fillField(data.email);
      cy.get(selectors.role).first().fillField(data.role);
      cy.get(selectors.company).first().fillField(data.company);
      cy.get(selectors.message).first().fillField(data.message);
      cy.get(selectors.submit).first().click();
    });
  }

  assertThankYou(origin) {
    cy.origin(origin, { args: { selectors } }, ({ selectors }) => {
      cy.contains(new RegExp(selectors.thankYou, 'i'), { timeout: 20000 }).should('be.visible');
    });
  }
}

module.exports = new StrategyFormPage();
