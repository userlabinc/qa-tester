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

  it("Prueba Name", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAname).should("be.visible");
  });

  it("Prueba Campus", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAcampus).should("be.visible");
  });

  it("Prueba Credit Type", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAcreditType).should("be.visible");
  });

  it("Prueba All Teams", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAcampus).click();
    cy.get(variables.CRAcampusSelect).click();
    cy.get(variables.CRAallTeams).should("be.visible");
  });

  it("Prueba Teams", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAcampus).click();
    cy.get(variables.CRAcampusSelect).click();
    cy.get(variables.CRAteams).should("be.visible");
  });

  it("Prueba Week Starts On", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAweekStartOn).should("be.visible");
  });

  it("Prueba Is Active", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAisActive).should("be.visible");
  });

  it("Prueba Is Template", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAisTemplate).should("be.visible");
  });

  it("Prueba Issue Funds On > Specific Dates", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAissueFundsOnSpecificDates).should("be.visible");
  });

  it("Prueba Issue Funds On > Date Range", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAissueFundsOnSpecificDates).click();
    cy.get(variables.CRAissueFundsOnDateRange).should("be.visible");
  });

  it("Prueba Dates To Issue Funds > Specific", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAdatesToIssueFundsSpecific).should("be.visible");
  });

  it("Prueba Dates To Issue Funds > Range", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAissueFundsOnDateRange).click();
    cy.get(variables.CRAdatesToIssueFundsRange).should("be.visible");
  });

  it("Prueba Week Days To Issue Funds", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAissueFundsOnDateRange).click();
    cy.get(variables.CRAweekDaysToIssueFunds).should("be.visible");
  });

  it("Prueba Group Credit > Disable", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAgroupCreditDisable).should("be.visible");
  });

  it("Prueba Group Credit > Enable", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAgroupCreditEnable).should("be.visible");
  });

  it("Prueba Merchant Group", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAgroupCreditEnable).click();
    cy.get(variables.CRAmerchantGroup).should("be.visible");
  });

  it("Prueba Group Credit Type > Period", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAgroupCreditEnable).click();
    cy.get(variables.CRAgroupCreditTypePeriod).should("be.visible");
  });

  it("Prueba Group Credit Type > Month", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAgroupCreditEnable).click();
    cy.get(variables.CRAgroupCreditTypeMonth).should("be.visible");
  });

  it("Prueba Group Credit Availability > Issue Funds Days", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAgroupCreditEnable).click();
    cy.get(variables.CRAgroupCreditTypePeriod).should("be.visible");
  });

  it("Prueba Group Credit Availability > Rule Duration", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAgroupCreditEnable).click();
    cy.get(variables.CRAgroupCreditTypePeriod).should("be.visible");
  });

  it("Prueba Group Credit Expiration Type > End Of Period", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAgroupCreditEnable).click();
    cy.get(variables.CRAgroupCreditExpirationTypeDate).click();
    cy.get(variables.CRAgroupCreditExpirationTypeEndOfPeriod).should(
      "be.visible"
    );
  });

  it("Prueba Group Credit Expiration Type > Monthly", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAgroupCreditEnable).click();
    cy.get(variables.CRAgroupCreditExpirationTypeMonthly).should("be.visible");
  });

  it("Prueba Group Credit Expiration Type > Date", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAgroupCreditEnable).click();
    cy.get(variables.CRAgroupCreditExpirationTypeDate).should("be.visible");
  });

  it("Prueba Group Credit Expiration Date", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAgroupCreditEnable).click();
    cy.get(variables.CRAgroupCreditExpirationTypeDate).click();
    cy.get(variables.CRAgroupCreditExpirationDate).should("be.visible");
  });

  it("Prueba Group Credit Amount", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAgroupCreditEnable).click();
    cy.get(variables.CRAgroupCreditAmount).should("be.visible");
  });

  it("Prueba Breakfast > Checkbox", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAbreakfast).should("be.visible");
  });

  it("Prueba Breakfast > Amount", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAbreakfastAmount).should("be.visible");
  });

  it("Prueba Breakfast > Time Issued", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAbreakfastTimeIssued).should("be.visible");
  });

  it("Prueba Breakfast > Expiration > Expire", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAbreakfastExpire).should("be.visible");
  });

  it("Prueba Breakfast > Expiration > Expire Time", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAbreakfastExpireTime).should("be.visible");
  });

  it("Prueba Breakfast > Merchant Group", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAbreakfastMerchantGroup).should("be.visible");
  });

  it("Prueba Lunch > Checkbox", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAlunch).should("be.visible");
  });

  it("Prueba Lunch > Amount", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAlunchAmount).should("be.visible");
  });

  it("Prueba Lunch > Time Issued", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAlunchTimeIssued).should("be.visible");
  });

  it("Prueba Lunch > Expiration > Expire", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAlunchExpire).should("be.visible");
  });

  it("Prueba Lunch > Expiration > Expire Time", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAlunchExpireTime).should("be.visible");
  });

  it("Prueba Lunch > Merchant Group", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAlunchMerchantGroup).should("be.visible");
  });

  it("Prueba Dinner > Checkbox", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAdinner).should("be.visible");
  });

  it("Prueba Dinner > Amount", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAdinnerAmount).should("be.visible");
  });

  it("Prueba Dinner > Time Issued", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAdinnerTimeIssued).should("be.visible");
  });

  it("Prueba Dinner > Expiration > Expire", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAdinnerExpire).should("be.visible");
  });

  it("Prueba Dinner > Expiration > Expire Time", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAdinnerExpireTime).should("be.visible");
  });

  it("Prueba Dinner > Merchant Group", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAdinnerMerchantGroup).should("be.visible");
  });

  it("Prueba Per Day > Checkbox", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperDay).should("be.visible");
  });

  it("Prueba Per Day > Type > Either", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperDayTypeEither).should("be.visible");
  });

  it("Prueba Per Day > Type > Amount", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperDayTypeAmount).should("be.visible");
  });

  it("Prueba Per Day > Type > Meal Credit Used", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperDayTypeMealCreditUsed).should("be.visible");
  });

  it("Prueba Per Day > Amount", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperDayAmount).should("be.visible");
  });

  it("Prueba Per Day > Meal Credit Used", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperDayMealCreditUsed).should("be.visible");
  });

  it("Prueba Per Week > Checkbox", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperWeek).should("be.visible");
  });

  it("Prueba Per Week > Type > Either", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperWeekTypeEither).should("be.visible");
  });

  it("Prueba Per Week > Type > Amount", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperWeekTypeAmount).should("be.visible");
  });

  it("Prueba Per Week > Type > Meal Credit Used", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperWeekTypeMealCreditUsed).should("be.visible");
  });

  it("Prueba Per Week > Amount", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperWeekAmount).should("be.visible");
  });

  it("Prueba Per Week > Meal Credit Used", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperWeekMealCreditUsed).should("be.visible");
  });

  it("Prueba Per Month > Checkbox", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperMonth).should("be.visible");
  });

  it("Prueba Per Month > Type > Either", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperMonthTypeEither).should("be.visible");
  });

  it("Prueba Per Month > Type > Amount", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperMonthTypeAmount).should("be.visible");
  });

  it("Prueba Per Month > Type > Meal Credit Used", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperMonthTypeMealCreditUsed).should("be.visible");
  });

  it("Prueba Per Month > Amount", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperMonthAmount).should("be.visible");
  });

  it("Prueba Per Month > Meal Credit Used", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAperMonthMealCreditUsed).should("be.visible");
  });

  it("Prueba For Entire Period > Checkbox", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAforEntirePeriod).should("be.visible");
  });

  it("Prueba For Entire Period > Type > Either", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAforEntirePeriodTypeEither).should("be.visible");
  });

  it("Prueba For Entire Period > Type > Amount", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAforEntirePeriodTypeAmount).should("be.visible");
  });

  it("Prueba For Entire Period > Type > Meal Credit Used", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAforEntirePeriodTypeMealCreditUsed).should("be.visible");
  });

  it("Prueba For Entire Period > Amount", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAforEntirePeriodAmount).should("be.visible");
  });

  it("Prueba For Entire Period > Meal Credit Used", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAforEntirePeriodMealCreditUsed).should("be.visible");
  });

  it("Prueba Boton Cancel", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAcancel).should("be.visible");
  });

  it("Prueba Boton Add Credit Rule", function() {
    cy.get(variables.menuCreditRuleAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CRAaddCreditRule).should("be.visible");
  });
}); // fin describe
