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
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLname)
      .type(this.datos.testNumeros)
      .should("have.value", "123456");
  });

  it("Prueba Name > Texto", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLname)
      .type(this.datos.testLetras)
      .should("have.value", "Test");
  });

  it("Prueba Name > Simbolos", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLname)
      .type(this.datos.testSimbolos)
      .should("have.value", "$#@");
  });

  it("Prueba Name > Alfanumerico", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLname)
      .type(this.datos.testAlfanumerico)
      .should("have.value", "A11");
  });

  it("Prueba Campus", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLcampus).should("be.visible");
  });

  it("Prueba Campus > Texto", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLcampus)
      .type(this.datos.testLetras)
      .should("not.be.empty");
  });

  it("Prueba Campus > Numero", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLcampus).type(this.datos.testNumeros);
    cy.get(variables.CRLbody).click();
    cy.get(variables.CRLcampus).should("have.value", "");
  });

  it("Prueba Campus > Simbolos", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLcampus).type(this.datos.testSimbolos);
    cy.get(variables.CRLbody).click();
    cy.get(variables.CRLcampus).should("have.value", "");
  });

  it("Prueba Campus > Alfanumerico", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLcampus).type(this.datos.testAlfanumerico);
    cy.get(variables.CRLbody).click();
    cy.get(variables.CRLcampus).should("have.value", "");
  });

  it("Prueba Table Sorter > ID", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLidTable).should("be.visible");
  });

  it("Prueba Table Sorter > Name", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLnameTable).should("be.visible");
  });

  it("Prueba Table Sorter > Campus", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLcampusTable).should("be.visible");
  });

  it("Prueba Table Sorter > All Teams", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLallTeamsTable).should("be.visible");
  });

  it("Prueba Table Sorter > Is Active", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLisActiveTable).should("be.visible");
  });

  it("Prueba Table Sorter > Credit Type", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLcreditTypeTable).should("be.visible");
  });

  it("Prueba Actions > View", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLview).should("be.visible");
  });

  it("Prueba Actions > Edit", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLedit).should("be.visible");
  });

  it("Prueba Actions > Duplicate", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLduplicate).should("be.visible");
  });

  it("Prueba Actions > Activate / Inactivate", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLactivate).should("be.visible");
  });

  it("Prueba Page Number > Next", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLpageNext).click();
  });

  it("Prueba Page Number > Previous", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLpagePrevious).click();
  });
}); // fin describe
