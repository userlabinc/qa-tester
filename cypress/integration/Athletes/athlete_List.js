/// <reference types="Cypress"/>
import * as variables from "../../fixtures/constants";

describe("Pruebas para seccion ATHLETE LIST", function() {
  beforeEach(function() {
    cy.fixture("data-moocho").then(function(datos) {
      this.datos = datos;
    });
  });

  beforeEach(() => {
    cy.visit("http://admin-qa.moocho.com/");
    cy.reload();
  });

  it("Search athlete by user id", function() {
    cy.get(variables.user).type(this.datos.correo);
    cy.get(variables.pass).type(this.datos.pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
  });
}); // fin describe
