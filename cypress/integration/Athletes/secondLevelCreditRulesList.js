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

  it("Prueba Table Sorter > ID > Hover", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLidTable).realHover();
  });

  it("Prueba Table Sorter > ID > Click", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLidTable).click();
  });

  it("Prueba Table Sorter > Name > Hover", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLnameTable).realHover();
  });
  it("Prueba Table Sorter > Name > Click", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLnameTable).click();
  });

  it("Prueba Table Sorter > Campus > Hover", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLcampusTable).realHover();
  });

  it("Prueba Table Sorter > Campus > Click", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLcampusTable).click();
  });

  it("Prueba Table Sorter > All Teams > Hover", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLallTeamsTable).realHover();
  });

  it("Prueba Table Sorter > All Teams > Click", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLallTeamsTable).click();
  });

  it("Prueba Table Sorter > Is Active > Hover", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLisActiveTable).realHover();
  });

  it("Prueba Table Sorter > Is Active > Click", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLisActiveTable).click();
  });

  it("Prueba Table Sorter > Credit Type > Hover", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLcreditTypeTable).realHover();
  });

  it("Prueba Table Sorter > Credit Type > Click", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLcreditTypeTable).click();
  });

  it("Prueba Actions > View > Hover", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLview).realHover();
  });

  it("Prueba Actions > View > Abre drawer", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLview).click();
    cy.get(variables.CRLviewBody).should(
      "have.text",
      "Athlete Credit Rule Profile"
    );
  });

  it("Prueba Actions > Edit > Hover", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLedit).realHover();
  });

  it("Prueba Actions > Edit > Click", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLedit).click();
    cy.get(variables.CRLeditSave)
      .scrollIntoView()
      .should("be.visible");
  });

  it("Prueba Actions > Duplicate > Hover", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLduplicate).realHover();
  });

  it("Prueba Actions > Duplicate > Click", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLduplicate).click();
    cy.get(variables.CRLduplicateSave).should("be.visible");
  });

  it("Prueba Actions > Activate / Inactivate > Hover", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLactivate).realHover();
  });

  it("Prueba Actions > Activate / Inactivate > Click", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLactivate).click();
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
