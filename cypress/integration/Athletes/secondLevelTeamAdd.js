/// <reference types="Cypress"/>
import * as variables from "../../fixtures/constants";

describe("Pruebas de primer nivel para seccion ATHLETES", function() {
  beforeEach(function() {
    cy.fixture("data-moocho").then(function(datos) {
      this.datos = datos;
    });
  });

  beforeEach(() => {
    cy.login();
    cy.AthleteFirstLevel();
  });

  it("Prueba Name > Numeros", function() {
    cy.get(variables.menuTeamAdd)
      .should("be.visible")
      .click();
    cy.get(variables.TAname)
      .type(this.datos.testNumeros)
      .should("have.value", "123456");
  });

  it("Prueba Name > Texto", function() {
    cy.get(variables.menuTeamAdd)
      .should("be.visible")
      .click();
    cy.get(variables.TAname)
      .type(this.datos.testLetras)
      .should("have.value", "Test");
  });

  it("Prueba Name > Simbolos", function() {
    cy.get(variables.menuTeamAdd)
      .should("be.visible")
      .click();
    cy.get(variables.TAname)
      .type(this.datos.testSimbolos)
      .should("have.value", "$#@");
  });

  it("Prueba Name > Alfanumerico", function() {
    cy.get(variables.menuTeamAdd)
      .should("be.visible")
      .click();
    cy.get(variables.TAname)
      .type(this.datos.testAlfanumerico)
      .should("have.value", "A11");
  });

  it("Prueba Name > Mensaje de Error", function() {
    cy.get(variables.menuTeamAdd)
      .should("be.visible")
      .click();
    cy.get(variables.TAname).should("have.text", "");
    cy.get(variables.TAaddTag).click();
    cy.get(variables.errorMsg3).should("be.visible");
  });

  it("Prueba Boton Team Add", function() {
    cy.get(variables.menuTeamAdd)
      .should("be.visible")
      .click();
    //cy.get(variables.TAname).type(this.datos.testLetras);
    cy.get(variables.TAaddTag).click();
  });

  it("Prueba Cancel > Limpia la informacion", function() {
    cy.get(variables.menuTeamAdd)
      .should("be.visible")
      .click();
    cy.get(variables.TAcancel).click();
    cy.get(variables.TAcancelYes).click();
  });

  it("Prueba Cancel > Deja la informacion", function() {
    cy.get(variables.menuTeamAdd)
      .should("be.visible")
      .click();
    cy.get(variables.TAcancel).click();
    cy.get(variables.TAcancelNo).click();
  });
}); // fin describe
