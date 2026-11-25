# cypress-ultimateqa

Exemplo de projeto Cypress (JavaScript + Page Object + fixtures) para
https://ultimateqa.com/automation

## Fluxo automatizado
1. Acessa `/automation`
2. Clica no item de menu `#menu-item-217945`
3. Preenche o formulário (dados em `cypress/fixtures/contactData.json`)
4. Valida a mensagem **"Thank You"**

## Como rodar
```bash
npm install
npm run cy:open   # modo interativo
npm run cy:run    # headless
```

## Estrutura
```
cypress/
  e2e/ultimateqa/strategyForm.cy.js   # cenário de teste
  fixtures/contactData.json           # massa de dados
  pages/AutomationPage.js             # página /automation + clique no menu
  pages/StrategyFormPage.js           # formulário (seletores centralizados)
  support/commands.js                 # cy.fillField (input/textarea/select)
  support/e2e.js
cypress.config.js
```

## Pontos de atenção
- O link do menu pode abrir em nova aba e/ou em outro domínio. O page object
  remove o `target` e o teste usa `cy.origin()` para operar no domínio do form.
- Os seletores dos campos ficam no objeto `selectors` em `StrategyFormPage.js`;
  se o DOM mudar, é o único lugar a ajustar.
- Campo **Role**: o helper `fillField` aceita `<input>` (digita) ou `<select>` (seleciona).
