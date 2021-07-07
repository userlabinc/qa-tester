// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// support/commands.js
const COMMAND_DELAY = 500;

for (const command of [
  "visit",
  "click",
  "trigger",
  "type",
  "clear",
  "reload",
  "contains",
]) {
  Cypress.Commands.overwrite(command, (originalFn, ...args) => {
    const origVal = originalFn(...args);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(origVal);
      }, COMMAND_DELAY);
    });
  });
}

// Script para ejecutar mochawesome y cypress al mismo tiempo
/*const cypress = require("cypress");
const marge = require("mochawesome-report-generator");
const { merge } = require("mochawesome-merge");

cypress.run().then(
  () => {
    generateReport();
  },
  (error) => {
    generateReport();
    console.error(error);
    process.exit(1);
  }
);

function generateReport(options) {
  return merge(options).then((report) => marge.create(report, options));
}*/
