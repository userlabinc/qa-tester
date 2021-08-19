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
    cy.get(variables.menuTeamsList)
      .should("be.visible")
      .click();
    cy.get(variables.TLname)
      .type(this.datos.testNumeros)
      .should("have.value", "123456");
  });

  it("Prueba Name > Texto", function() {
    cy.get(variables.menuTeamsList)
      .should("be.visible")
      .click();
    cy.get(variables.TLname)
      .type(this.datos.testLetras)
      .should("have.value", "Test");
  });

  it("Prueba Name > Simbolos", function() {
    cy.get(variables.menuTeamsList)
      .should("be.visible")
      .click();
    cy.get(variables.TLname)
      .type(this.datos.testSimbolos)
      .should("have.value", "$#@");
  });

  it("Prueba Name > Alfanumerico", function() {
    cy.get(variables.menuTeamsList)
      .should("be.visible")
      .click();
    cy.get(variables.TLname)
      .type(this.datos.testAlfanumerico)
      .should("have.value", "A11");
  });

  it("Prueba Actions > Edit", function() {
    cy.get(variables.menuTeamsList)
      .should("be.visible")
      .click();
    cy.get(variables.TLedit).should("be.visible");
  });

  it("Prueba Actions > Edit > Hover", function() {
    cy.get(variables.menuTeamsList)
      .should("be.visible")
      .click();
    cy.get(variables.TLedit).realHover();
  });

  it("Prueba Actions > Edit > Muestra informacion", function() {
    cy.get(variables.menuTeamsList)
      .should("be.visible")
      .click();
    cy.get(variables.TLedit).click();
    cy.get(variables.TLeditDrawer).should("be.visible");
  });

  it("Prueba Actions > Edit > Guarda cambios", function() {
    cy.get(variables.menuTeamsList)
      .should("be.visible")
      .click();
    cy.get(variables.TLedit).click();
    cy.get(variables.TLeditDrawerBtn).click();
    cy.get(variables.TLeditDrawerMsg).should("be.visible");
  });

  it("Prueba Actions > Delete", function() {
    cy.get(variables.menuTeamsList)
      .should("be.visible")
      .click();
    cy.get(variables.TLdelete).should("be.visible");
  });

  it("Prueba Page #", function() {
    cy.get(variables.menuTeamsList)
      .should("be.visible")
      .click();
    cy.get(variables.TLpageNumberGroup).should("be.visible");
  });
}); // fin describe
