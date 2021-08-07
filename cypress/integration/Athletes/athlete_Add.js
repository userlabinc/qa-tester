/// <reference types="Cypress"/>
import * as variables from "../../fixtures/constants";

describe("Pruebas para seccion ATHLETE ADD", () => {
  beforeEach(() => {
    cy.fixture("data-moocho").then(function(datos) {
      this.datos = datos;
    });
    cy.login();
  });

  //
  // USER ID
  it("Add athlete by user id", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_user).click();
    cy.get(variables.gl_input).type(this.datos.ath_add_name);
    cy.get(variables.ath_campus).click();
    cy.get(variables.ath_campus_select).click();
    //cy.get(variables.ath_add_btn).click();
  });

  it("Add athlete by user id without campus", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_user).click();
    cy.get(variables.gl_input).type(this.datos.ath_add_name);
    cy.get(variables.ath_add_btn).click();
    cy.get(variables.campus_er).should(
      "have.text",
      "Please select the campus!"
    );
  });

  it("Add athlete by user id without user id", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_user).click();
    cy.get(variables.ath_campus).click();
    cy.get(variables.ath_campus_select).click();
    cy.get(variables.ath_add_btn).click();
    cy.get(variables.user_er).should("have.text", "Please input the user id!");
  });

  it("Add athlete by user id without campus and user id", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_user).click();
    cy.get(variables.ath_add_btn).click();
    cy.get(variables.user_er).should("have.text", "Please input the user id!");
    cy.get(variables.campus_er).should(
      "have.text",
      "Please select the campus!"
    );
  });

  it("CANCEL add athlete by user id", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_user).click();
    cy.get(variables.gl_input).type(this.datos.ath_add_name);
    cy.get(variables.ath_campus).click();
    cy.get(variables.ath_campus_select).click();
    cy.get(variables.ath_cancel_btn).click();
    cy.get(variables.popup_yes).click();
    cy.get(variables.gl_input).should("have.value", "");
    cy.get(variables.ath_campus).should("have.value", "");
  });

  it("Add restricted UNTIL athlete by user id", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_user).click();
    cy.get(variables.gl_input).type(this.datos.ath_add_name);
    cy.get(variables.ath_campus).click();
    cy.get(variables.ath_campus_select).click();
    cy.get(variables.ath_restricted).click();
    cy.get(variables.until_date).click();
    cy.get(variables.date_in).type(this.datos.until_date, { force: true });
    //cy.get(variables.ath_add_btn).click();
  });

  it("CANCEL add restricted UNTIL athlete by user id", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_user).click();
    cy.get(variables.gl_input).type(this.datos.ath_add_name);
    cy.get(variables.ath_campus).click();
    cy.get(variables.ath_campus_select).click();
    cy.get(variables.ath_restricted).click();
    cy.get(variables.until_date).click();
    cy.get(variables.date_in).type(this.datos.until_date, { force: true });
    cy.get(variables.ath_add_bd).click();
    cy.get(variables.ath_cancel_btn).click();
    cy.get(variables.popup_yes).click();
    cy.get(variables.gl_input).should("have.value", "");
    cy.get(variables.ath_campus).should("have.value", "");
  });

  it("Add restricted AFTER athlete by user id", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_user).click();
    cy.get(variables.gl_input).type(this.datos.ath_add_name);
    cy.get(variables.ath_campus).click();
    cy.get(variables.ath_campus_select).click();
    cy.get(variables.ath_restricted).click();
    cy.get(variables.after_date).click();
    cy.get(variables.date_in).type(this.datos.after_date, { force: true });
    //cy.get(variables.ath_add_btn).click();
  });

  it("CANCEL add restricted AFTER athlete by user id", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_user).click();
    cy.get(variables.gl_input).type(this.datos.ath_add_name);
    cy.get(variables.ath_campus).click();
    cy.get(variables.ath_campus_select).click();
    cy.get(variables.ath_restricted).click();
    cy.get(variables.after_date).click();
    cy.get(variables.date_in).type(this.datos.after_date, { force: true });
    cy.get(variables.ath_add_bd).click();
    cy.get(variables.ath_cancel_btn).click();
    cy.get(variables.popup_yes).click();
    cy.get(variables.gl_input).should("have.value", "");
    cy.get(variables.ath_campus).should("have.value", "");
  });
  //
  // EMAIL
  it("Add athlete by email", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_email).click();
    cy.get(variables.gl_input).type(this.datos.ath_add_name);
    cy.get(variables.ath_campus).click();
    cy.get(variables.ath_campus_select).click();
    //cy.get(variables.ath_add_btn).click();
  });

  it("Add athlete by email without campus", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_email).click();
    cy.get(variables.gl_input).type(this.datos.email);
    cy.get(variables.ath_add_btn).click();
    cy.get(variables.campus_er).should(
      "have.text",
      "Please select the campus!"
    );
  });

  it("Add athlete by email without email", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_email).click();
    cy.get(variables.ath_campus).click();
    cy.get(variables.ath_campus_select).click();
    cy.get(variables.ath_add_btn).click();
    cy.get(variables.user_er).should(
      "have.text",
      "Please input the athlete email!"
    );
  });

  it("Add athlete by email without campus and email", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_email).click();
    cy.get(variables.ath_add_btn).click();
    cy.get(variables.user_er).should(
      "have.text",
      "Please input the athlete email!"
    );
    cy.get(variables.campus_er).should(
      "have.text",
      "Please select the campus!"
    );
  });

  it("CANCEL add athlete by email", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_email).click();
    cy.get(variables.gl_input).type(this.datos.ath_add_name);
    cy.get(variables.ath_campus).click();
    cy.get(variables.ath_campus_select).click();
    cy.get(variables.ath_cancel_btn).click();
  });

  it("Add restricted UNTIL athlete by email", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_email).click();
    cy.get(variables.gl_input).type(this.datos.ath_add_name);
    cy.get(variables.ath_campus).click();
    cy.get(variables.ath_campus_select).click();
    cy.get(variables.ath_restricted).click();
    cy.get(variables.until_date).click();
    cy.get(variables.date_in).type(this.datos.until_date, { force: true });
    //cy.get(variables.ath_add_btn).click();
  });

  it("CANCEL add restricted UNTIL athlete by email", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_email).click();
    cy.get(variables.gl_input).type(this.datos.ath_add_name);
    cy.get(variables.ath_campus).click();
    cy.get(variables.ath_campus_select).click();
    cy.get(variables.ath_restricted).click();
    cy.get(variables.until_date).click();
    cy.get(variables.date_in).type(this.datos.until_date, { force: true });
    cy.get(variables.ath_add_bd).click();
    cy.get(variables.ath_cancel_btn).click();
    cy.get(variables.popup_yes).click();
    cy.get(variables.gl_input).should("have.value", "");
    cy.get(variables.ath_campus).should("have.value", "");
  });

  it("Add restricted AFTER athlete by email", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_email).click();
    cy.get(variables.gl_input).type(this.datos.ath_add_name);
    cy.get(variables.ath_campus).click();
    cy.get(variables.ath_campus_select).click();
    cy.get(variables.ath_restricted).click();
    cy.get(variables.after_date).click();
    cy.get(variables.date_in).type(this.datos.after_date, { force: true });
    //cy.get(variables.ath_add_btn).click();
  });

  it("CANCEL add restricted AFTER athlete by email", function() {
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.athlete_btn).click();
    cy.get(variables.ath_add)
      .should("be.visible")
      .click();
    cy.get(variables.by_email).click();
    cy.get(variables.gl_input).type(this.datos.ath_add_name);
    cy.get(variables.ath_campus).click();
    cy.get(variables.ath_campus_select).click();
    cy.get(variables.ath_restricted).click();
    cy.get(variables.after_date).click();
    cy.get(variables.date_in).type(this.datos.after_date, { force: true });
    cy.get(variables.ath_add_bd).click();
    cy.get(variables.ath_cancel_btn).click();
    cy.get(variables.popup_yes).click();
    cy.get(variables.gl_input).should("have.value", "");
    cy.get(variables.ath_campus).should("have.value", "");
  });
}); // fin describe
