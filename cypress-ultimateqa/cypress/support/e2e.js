import './commands';

Cypress.on('uncaught:exception', (err) => {
  const ignorable = [/ResizeObserver/i, /Script error/i, /hs-/i, /jQuery/i];
  return !ignorable.some((rule) => rule.test(err.message));
});
