const automationPage = require('../../pages/AutomationPage');
const strategyFormPage = require('../../pages/StrategyFormPage');

describe('UltimateQA | Automation Practice', () => {
  beforeEach(() => {
    automationPage.visit();
  });

  it('preenche o formulário do menu e valida a mensagem "Thank You"', () => {
    cy.fixture('contactData').then((data) => {
      automationPage.clickMenuItem().then((origin) => {
        strategyFormPage.fillAndSubmit(origin, data);
        strategyFormPage.assertThankYou(origin);
      });
    });
  });
});
