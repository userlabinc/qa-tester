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

  it("Prueba Add By > Select User ID ", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAaddBySelected).should("be.visible");
  });

  it("Prueba Add By > Select Email", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAaddByEmail).click();
    cy.get(variables.AAaddBySelected).should("be.visible");
  });

  it("Prueba User ID > Numeros", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAuser)
      .type(this.datos.testNumeros)
      .should("have.value", 123456);
  });

  it("Prueba User ID > Texto", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAuser)
      .type(this.datos.testLetras)
      .should("have.text", "");
  });

  it("Prueba User ID > Simbolos", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAuser)
      .type(this.datos.testSimbolos)
      .should("have.text", "");
  });

  it("Prueba User ID > Alfanumerico", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAuser)
      .type(this.datos.testAlfanumerico)
      .should("have.text", "");
  });

  it("Prueba User ID > Mensaje de error", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAuser).should("be.empty");
    cy.get(variables.AAaddButton).click();
    cy.get(variables.AAuserErrorMsg).should(
      "have.text",
      "Please input the user id!"
    );
  });

  it("Prueba Email > Numeros", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAaddByEmail).click();
    cy.get(variables.AAemail)
      .type(this.datos.testNumeros)
      .should("have.value", "123456");
  });

  it("Prueba Email > Texto", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAaddByEmail).click();
    cy.get(variables.AAemail)
      .type(this.datos.testLetras)
      .should("have.value", "Test");
  });

  it("Prueba Email > Simbolos", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAaddByEmail).click();
    cy.get(variables.AAemail)
      .type(this.datos.testSimbolos)
      .should("have.value", "$#@");
  });

  it("Prueba Email > Alfanumerico", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAaddByEmail).click();
    cy.get(variables.AAemail)
      .type(this.datos.testAlfanumerico)
      .should("have.value", "A11");
  });

  it("Prueba Email > Mensaje de error", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAaddByEmail).click();
    cy.get(variables.AAemail).should("be.empty");
    cy.get(variables.AAaddButton).click();
  });

  it("Prueba Campus", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAcampus).should("be.visible");
  });

  it("Prueba Campus > Texto", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAcampus)
      .type(this.datos.testLetras)
      .should("not.be.empty");
  });

  it("Prueba Campus > Numero", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAcampus).type(this.datos.testNumeros);
    cy.get(variables.AAbody).click();
    cy.get(variables.AAcampus).should("have.value", "");
  });

  it("Prueba Campus > Simbolos", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAcampus).type(this.datos.testSimbolos);
    cy.get(variables.AAbody).click();
    cy.get(variables.AAcampus).should("have.value", "");
  });

  it("Prueba Campus > Alfanumerico", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAcampus).type(this.datos.testAlfanumerico);
    cy.get(variables.AAbody).click();
    cy.get(variables.AAcampus).should("have.value", "");
  });

  it("Prueba Campus > Mensaje de error", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAcampus).should("have.value", "");
    cy.get(variables.AAaddButton).click();
    cy.get(variables.AAcampusErrorMsg).should(
      "have.text",
      "Please select the campus!"
    );
  });

  it("Prueba Credit Group", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAcampus).type(this.datos.testLetras);
    cy.get(variables.AAcreditGroup).should("have.value", "");
  });

  it("Prueba Rules To Apply", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAcampus).type(this.datos.testLetras);
    cy.get(variables.AArulesToApply).should("have.value", "");
  });

  it("Prueba Is Restricted", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAisRestricted).click({ force: true });
    cy.get(variables.AAisRestricted).should("be.visible");
  });

  it("Prueba Is Restricted > Doble click", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAisRestricted).click({ force: true });
    cy.get(variables.AAisRestricted).click({ force: true });
    cy.get(variables.AAisRestricted).should("be.visible");
  });

  it("Prueba Restricted Until", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAisRestricted).click({ force: true });
    cy.get(variables.AArestrictedUntil).should("be.visible");
  });

  it("Prueba Restricted After", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAisRestricted).click({ force: true });
    cy.get(variables.AArestrictedAfter).should("be.visible");
  });

  it("Prueba boton Add Athlete", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAaddButton).should("be.visible");
  });

  it("Prueba boton Cancel", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAcancelButton).should("be.visible");
  });
}); // fin describe
