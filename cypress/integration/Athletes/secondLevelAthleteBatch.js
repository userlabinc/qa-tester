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

  it("Prueba Campus > Texto", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABCampus)
      .type(this.datos.testLetras)
      .should("not.be.empty");
  });

  it("Prueba Campus > Numero", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABCampus).type(this.datos.testNumeros);
    //cy.get(variables.ABbody).click();
    cy.get(variables.ABCampus).should("have.value", "");
  });

  it("Prueba Campus > Simbolos", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABCampus).type(this.datos.testSimbolos);
    //cy.get(variables.ABbody).click();
    cy.get(variables.ABCampus).should("have.value", "");
  });

  it("Prueba Campus > Alfanumerico", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABCampus).type(this.datos.testAlfanumerico);
    //cy.get(variables.ABbody).click();
    cy.get(variables.ABCampus).should("have.value", "");
  });

  it("Prueba Campus > Mensaje de error", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABCampus).should("have.value", "");
    cy.get(variables.ABaddAthlete).click();
    cy.get(variables.ABCampusErrorMsg).should(
      "have.text",
      "Please select the campus!"
    );
  });

  it("Prueba Team > Texto", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABTeam)
      .type(this.datos.testLetras)
      .should("not.be.empty");
  });

  it("Prueba Team > Numero", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABTeam).type(this.datos.testNumeros);
    cy.get(variables.ABbody).click();
    cy.get(variables.ABTeam).should("have.value", "");
  });

  it("Prueba Team > Simbolos", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABTeam).type(this.datos.testSimbolos);
    cy.get(variables.ABbody).click();
    cy.get(variables.ABTeam).should("have.value", "");
  });

  it("Prueba Team > Alfanumerico", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABTeam).type(this.datos.testAlfanumerico);
    cy.get(variables.ABbody).click();
    cy.get(variables.ABTeam).should("have.value", "");
  });

  it("Prueba Team > Mensaje de error", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABTeam).should("have.value", "");
    cy.get(variables.ABaddAthlete).click();
    cy.get(variables.ABTeamErrorMsg).should(
      "have.text",
      "Please select the campus!"
    );
  });

  it("Prueba Is Restricted", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABisRestricted).should("be.visible");
  });

  it("Prueba Is Restricted > Doble click", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABisRestricted).should("be.visible");
  });

  it("Prueba Restricted Until > Fecha correcta m/d/y", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABrestrictedUntil).should("be.visible");
    cy.get(variables.ABrestrictedUntil).click();
    cy.get(variables.ABdateInput).type(this.datos.untilDate, { force: true });
  });

  it("Prueba Restricted Until > Fecha con formato d/m/y", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABrestrictedUntil).should("be.visible");
    cy.get(variables.ABrestrictedUntil).click();
    cy.get(variables.ABdateInput).type(this.datos.testDate, { force: true });
  });

  it("Prueba Restricted Until > Text", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABrestrictedUntil).should("be.visible");
    cy.get(variables.ABrestrictedUntil).click();
    cy.get(variables.ABdateInput).type(this.datos.testLetras, { force: true });
  });

  it("Prueba Restricted Until > Numeros", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABrestrictedUntil).should("be.visible");
    cy.get(variables.ABrestrictedUntil).click();
    cy.get(variables.ABdateInput).type(this.datos.testNumeros, { force: true });
  });

  it("Prueba Restricted Until > Simbolos", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABrestrictedUntil).should("be.visible");
    cy.get(variables.ABrestrictedUntil).click();
    cy.get(variables.ABdateInput).type(this.datos.testSimbolos, {
      force: true,
    });
  });

  it("Prueba Restricted Until > Alfanumerico", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABrestrictedUntil).should("be.visible");
    cy.get(variables.ABrestrictedUntil).click();
    cy.get(variables.ABdateInput).type(this.datos.testAlfanumerico, {
      force: true,
    });
  });

  it("Prueba Restricted Until > Mensaje de Error", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABrestrictedUntil).should("be.visible");
    cy.get(variables.ABaddAthlete).click();
  });

  it("Prueba Restricted After > Fecha correcta m/d/y", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABrestrictedAfter).should("be.visible");
    cy.get(variables.ABrestrictedAfter).click();
    cy.get(variables.ABdateInput).type(this.datos.untilDate, { force: true });
  });

  it("Prueba Restricted After > Fecha con formato d/m/y", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABrestrictedAfter).should("be.visible");
    cy.get(variables.ABrestrictedAfter).click();
    cy.get(variables.ABdateInput).type(this.datos.testDate, { force: true });
  });

  it("Prueba Restricted After > Text", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABrestrictedAfter).should("be.visible");
    cy.get(variables.ABrestrictedAfter).click();
    cy.get(variables.ABdateInput).type(this.datos.testLetras, { force: true });
  });

  it("Prueba Restricted After > Numeros", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABrestrictedAfter).should("be.visible");
    cy.get(variables.ABrestrictedAfter).click();
    cy.get(variables.ABdateInput).type(this.datos.testNumeros, { force: true });
  });

  it("Prueba Restricted After > Simbolos", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABrestrictedAfter).should("be.visible");
    cy.get(variables.ABrestrictedAfter).click();
    cy.get(variables.ABdateInput).type(this.datos.testSimbolos, {
      force: true,
    });
  });

  it("Prueba Restricted After > Alfanumerico", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABrestrictedAfter).should("be.visible");
    cy.get(variables.ABrestrictedAfter).click();
    cy.get(variables.ABdateInput).type(this.datos.testAlfanumerico, {
      force: true,
    });
  });

  it("Prueba Restricted After > Mensaje de Error", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABisRestricted).click({ force: true });
    cy.get(variables.ABrestrictedAfter).should("be.visible");
    cy.get(variables.ABaddAthlete).click();
  });

  it("Prueba boton Add Athlete > Muestra mensajes de error", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABaddAthlete).click();
    cy.get(variables.ABuserErrorMsg).should(
      "have.text",
      "Please input the user id!"
    );
  });

  it("Prueba boton Add Athlete > Muestra mensajes de confirmacion", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABTeam).type(this.datos.testLetras);
    cy.get(variables.ABCampus).type(this.datos.testLetras);
    //cy.get(variables.ABaddAthlete).click();
  });

  it("Prueba boton Cancel > Limpia o deja la informacion", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABTeam).type(this.datos.testLetras);
    cy.get(variables.ABCampus).type(this.datos.testLetras);
    cy.get(variables.ABCancel).click();
  });
}); // fin describe