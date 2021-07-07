/// <reference types="Cypress"/>
import * as variables from "../../fixtures/constants";

describe("Pruebas para seccion gift card", function() {
  beforeEach(() => {
    cy.fixture("data-moocho").then(function(datos) {
      this.datos = datos;
    });
    cy.visit("http://admin-qa.moocho.com/");
  });

  it("Anadir un Tile", () => {
    cy.get(variables.user).type(this.datos.correo);
    cy.get(variables.pass).type(this.datos.pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.app_mgm).click();
    cy.get(variables.ta_menubtn)
      .should("be.visible")
      .click();
    cy.get(variables.name).type(this.datos.ta_name);
  });
}); // fin describe
