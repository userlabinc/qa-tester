/// <reference types="Cypress"/>
import * as variables from "../../fixtures/variables";

describe("Pruebas LOGIN", function() {
  beforeEach(function() {
    cy.fixture("data-moocho").then(function(datos) {
      this.datos = datos;
    });
  });

  beforeEach(() => {
    cy.visit("http://admin-qa.moocho.com/");
    cy.reload();
  });

  it("Login con datos correctos", function() {
    cy.get(variables.user).type(this.datos.correo);
    cy.get(variables.pass).type(this.datos.pass);
    cy.get(variables.loginbtn).click();
  });

  it("Login con datos incorrectos", function() {
    cy.get(variables.user).type(this.datos.in_correo);
    cy.get(variables.pass).type(this.datos.in_pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.loginer).should("have.text", "User does not exist.");
  });

  it("Login con datos faltanes", function() {
    cy.get(variables.loginbtn).click();
    cy.get(variables.emp_user).should(
      "have.text",
      "Please input your username!"
    );
    cy.get(variables.emp_pass).should(
      "have.text",
      "Please input your Password!"
    );
  });

  it("Login sin user", function() {
    cy.get(variables.pass).type(this.datos.pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.emp_user).should(
      "have.text",
      "Please input your username!"
    );
  });

  it("Login sin password", function() {
    cy.get(variables.user).type(this.datos.correo);
    cy.get(variables.loginbtn).click();
    cy.get(variables.emp_pass).should(
      "have.text",
      "Please input your Password!"
    );
  });

  it("Forgot password", function() {
    cy.get(variables.forgotpw).click();
    cy.get(variables.fp_ermsg).should(
      "have.text",
      "Please put your email and we will send you a verification code!"
    );
  });

  it("Registrarse", function() {
    cy.get(variables.reg).click();
    cy.get(variables.fp_ermsg).should(
      "have.text",
      "Password must contain:Uppercase lettersLowercase lettersSpecial characterssNumbers"
    );
  });

  it("Confirmar cuenta", function() {
    cy.get(variables.confirmar_acc).click();
    cy.get(variables.fp_ermsg).should(
      "have.text",
      "Please check your email for a confirmation code!"
    );
  });
}); // fin DESCRIBE
