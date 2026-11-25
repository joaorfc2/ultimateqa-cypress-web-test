Cypress.Commands.add('fillField', { prevSubject: 'element' }, (subject, value) => {
  const $el = subject.first();
  if ($el.is('select')) {
    return cy.wrap($el).select(value);
  }
  return cy.wrap($el).clear().type(value, { delay: 10 });
});
