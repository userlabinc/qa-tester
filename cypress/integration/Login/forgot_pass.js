/// <reference types="Cypress"/>
import * as variables from "../../fixtures/variables";

describe("Pruebas FORGOT PASSWORD", function() {
  beforeEach(function() {
    cy.fixture("data-moocho").then(function(datos) {
      this.datos = datos;
    });
  });

  beforeEach(() => {
    cy.visit("http://admin-qa.moocho.com/");
    cy.reload();
  });

  it("Forgot password", function() {
    cy.get(variables.forgotpw).click();
    cy.get(variables.reg_email).type(this.datos.reg_email_er);
    cy.get(variables.errorMsg(1)).should(
      "have.text",
      "Please put your email and we will send you a verification code!"
    );
    cy.get(variables.loginbtn).click();
    cy.get(variables.errorMsg(2)).should("be.visible");
  });
}); // fin DESCRIBE
