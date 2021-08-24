//Funcion para mensajes de error

function errorMsg(num) {
  const res =
    ":nth-child(" +
    num +
    ") > .ant-col-20 > .ant-form-item-control > .ant-form-explain";
  return res;
}

function errorMsg2(num) {
  const res =
    ":nth-child(" +
    num +
    ") > .ant-col > .ant-form-item-control > .ant-form-explain";
  return res;
}

function ABbatchType(num) {
  const res = "#type > :nth-child(" + num + ")";
  return res;
}

function errorMsg3() {
  return ".ant-form-explain";
}

// LOGIN - FORGOT PASSWORD - REGISTER
const loginer = ".ant-message-notice-content";
const forgotpw =
  ":nth-child(3) > .ant-col > .ant-form-item-control > .ant-form-item-children > :nth-child(1)";
const fp_ermsg = ".login-text";
const reg = ".ant-form-item-children > :nth-child(3)";
const confirmar_acc = ".ant-form-item-children > :nth-child(4)";
const reg_name = "#name";
const reg_email = "#email";
const reg_pass = "#password";
const fp_ermsg2 = ".ant-message-notice-content";
//
const menuAppsManagement =
  ".ant-layout-sider-children > .ant-menu > :nth-child(2) > .ant-menu-submenu-title";
const menuTileAdd = "[id='menu1$Menu'] :nth-child(1) > a";
const input = ".ant-input";
const name = "#name";
const sort_id =
  ":nth-child(1) > .ant-table-header-column > .ant-table-column-sorters";
const sort_name =
  ".ant-table-column-sort > .ant-table-header-column > .ant-table-column-sorters";
const sort_url =
  ":nth-child(3) > .ant-table-header-column > .ant-table-column-sorters";
const sort_prev =
  ":nth-child(4) > .ant-table-header-column > .ant-table-column-sorters";
const view =
  "[data-row-key='0'] > :nth-child(5) > :nth-child(1) > :nth-child(1)";
const copy_link =
  "[data-row-key='0'] > :nth-child(5) > :nth-child(1) > :nth-child(5)";
const edit =
  "[data-row-key='0'] > :nth-child(5) > :nth-child(1) > :nth-child(3)";
const delete_btn =
  "[data-row-key='0'] > :nth-child(5) > :nth-child(1) > :nth-child(7)";
const athlete_btn =
  ".ant-layout-sider-children > .ant-menu > :nth-child(3) > .ant-menu-submenu-title";
// ATHLETE ADD
const menuAthleteAdd = "[id='menu2$Menu'] :nth-child(1) > a";
const AAbody = ".ant-card-body";
const AAuser = ".ant-input";
const AAemail = ".ant-input";
const AAcreditGroup =
  ":nth-child(4) > .ant-col-20 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const AArulesToApply =
  ":nth-child(5) > .ant-col-20 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const AAaddByUser = "#addBy > :nth-child(1)";
const AAaddByEmail = "#addBy > :nth-child(2)";
const AAcampus = ".ant-select-selection";
const AAcampusSelect = ".ant-select-dropdown-menu > :nth-child(5)"; // Cambiar valor de ntchild dependiendo de la opcion
const AAcancelButton = "[type='button']";
const AAaddButton = ".ant-btn-primary";
const AArestrictedUntil = "#restrictedUntil > div > .ant-calendar-picker-input";
const AAdateInput = ".ant-calendar-input";
const AArestrictedAfter = "#restrictedAfter > div > .ant-calendar-picker-input";
const AAcalendarYes = ".ant-popover-buttons > .ant-btn-primary";
const AAisRestricted = ".ant-checkbox-inner";
const AAaddBySelected = ".ant-radio-button-wrapper-checked";
// ATHLETE BATCH
const menuAthleteBatch = ":nth-child(2) > a";
const ABpath = "/Users/userlab/Downloads";
const ABbody = ".ant-card-body";
const ABDownload =
  ".ant-col-20 > .ant-form-item-control > .ant-form-item-children > .ant-btn";
const ABCampus =
  ":nth-child(2) > .ant-col-20 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const ABTeam =
  ":nth-child(3) > .ant-col-20 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const ABisRestricted = ".ant-checkbox-inner";
const ABrestrictedUntil = "#restrictedUntil > div > .ant-calendar-picker-input";
const ABdateInput = ".ant-calendar-input";
const ABrestrictedAfter = "#restrictedAfter > div > .ant-calendar-picker-input";
const ABbatchTypeMsg =
  ":nth-child(6) > .ant-col-20 > .ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col > div";
const ABbatchTypeSelect = ".ant-radio-button-wrapper-checked";
const ABUpload = ".ant-upload > .ant-btn";
const ABUploadMsg =
  ":nth-child(7) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain";
const ABCancel =
  ".ant-col-24 > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > [type='button']";
const ABcancelYes = ".ant-popover-buttons > .ant-btn-primary";
const ABaddAthlete = ".ant-btn-primary";
const ABwarningMsg =
  ":nth-child(6) > .ant-col-20 > .ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col > div";
// ATHLETE LIST
const menuAthleteList = ":nth-child(3) > a";
const ALuser = ".ant-form-item-children > .ant-input";
const ALcampus =
  ":nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const ALteam =
  ":nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const ALotherOptions = ".ant-input-wrapper > .ant-input";
const ALbody = ".ant-card-body";
const ALview = "[data-row-key='0'] > :nth-child(8) > div > :nth-child(1)";
const ALedit = "[data-row-key='0'] > :nth-child(8) > div > :nth-child(2)";
const ALeditDrawer = ".ant-drawer-body";
const ALeditDrawerBtn = ".ant-btn-primary";
const ALeditDrawerMsg = ".ant-message-notice-content";
const ALdelete = "[data-row-key='0'] > :nth-child(8) > div > :nth-child(3)";
const ALpageNumberGroup = ".ant-pagination";
const ALpageNext = ".ant-pagination-next > .ant-pagination-item-link";
const ALpagePrevious = ".ant-pagination-prev > .ant-pagination-item-link";
// TEAM ADD
const menuTeamAdd = ":nth-child(6) > a";
const TAname = "#name";
const TAaddTag = ".ant-btn-primary";
const TAcancel = "[type='button']";
const TAcancelYes = ".ant-popover-buttons > .ant-btn-primary";
const TAcancelNo = ".ant-popover-buttons > :nth-child(1)";
// TEAMS LIST
const menuTeamsList = ":nth-child(7) > a";
const TLname = ".ant-input";
const TLedit =
  "[data-row-key='0'] > :nth-child(4) > :nth-child(1) > :nth-child(1)";
const TLeditDrawer = "";
const TLeditDrawerBtn = "";
const TLeditDrawerMsg = "";
const TLdelete =
  "[data-row-key='0'] > :nth-child(4) > :nth-child(1) > :nth-child(3)";
const TLdeleteYes = ".ant-btn-primary";
const TLdeleteNo = ".ant-popover-buttons > :nth-child(1)";
const TLpageNumberGroup = ".ant-pagination";
const TLpageNext = ".ant-pagination-next > .ant-pagination-item-link";
const TLpagePrevious = ".ant-pagination-prev > .ant-pagination-item-link";
// CREDIT GROUP ADD
const menuCreditGroupAdd = ":nth-child(8) > a";
const CGAbody = ".ant-card-body";
const CGAcampus = ".ant-select-selection";
const CGAname = "#name";
const CGAcancel = "[type='button']";
const CGAcancelYes = ".ant-popover-buttons > .ant-btn-primary";
const CGAcancelNo = ".ant-popover-buttons > :nth-child(1)";
const CGAaddTeam = ".ant-btn-primary";
const CGAconfirmation = ".ant-message-notice-content";
// CREDIT GROUPS LIST
const menuCreditGroupsList = ":nth-child(9) > a";
const CGLname = ".ant-input";
const CGLbody = ".ant-card-body";
const CGLcampus = ".ant-select-selection";
const CGLview =
  "[data-row-key='0'] > :nth-child(3) > :nth-child(1) > :nth-child(1)";
const CGLviewDrawer = ".ant-drawer-wrapper-body";
const CGLedit =
  "[data-row-key='0'] > :nth-child(3) > :nth-child(1) > :nth-child(3)";
const CGLeditDrawer = ".ant-drawer-body";
const CGLeditName = "#name";
const CGLeditCancel = ".ant-form-item-children > [type='button']";
const CGLeditSave = ".ant-btn-primary";
const CGLteamMembership =
  "[data-row-key='0'] > :nth-child(3) > :nth-child(1) > :nth-child(5)";
const CGLteamMembershipSave =
  ".ant-col-24 > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn-primary";
const CGLteamMembershipCancel =
  ".ant-col-24 > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > [type='button']";
const CGLteamMembershipDrawer =
  ":nth-child(8) > .ant-drawer > .ant-drawer-content-wrapper > .ant-drawer-content > .ant-drawer-wrapper-body";
const CGLdownload =
  "[data-row-key='0'] > :nth-child(3) > :nth-child(1) > :nth-child(7)";
const CGLpageNumberGroup = ".ant-pagination";
const CGLpageNext = ".ant-pagination-next > .ant-pagination-item-link";
const CGLpagePrevious = ".ant-pagination-prev > .ant-pagination-item-link";
// CREDIT RULE ADD
const menuCreditRuleAdd = ":nth-child(10) > a";
const CRAname = "#name";
const CRAcampus =
  ":nth-child(3) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAcampusSelect = ".ant-select-dropdown-menu > :nth-child(1)"; //cambiar valor de child dependiendo de la opcion que se desee
const CRAcreditType =
  ":nth-child(4) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAallTeams =
  ":nth-child(5) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner";
const CRAteams =
  ":nth-child(6) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAweekStartOn =
  ":nth-child(5) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
// si se utiliza la opcion de all team hay que cambiar a 7 el valor de child()
const CRAisActive =
  ":nth-child(6) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner";
const CRAisTemplate =
  ":nth-child(7) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner";
const CRAissueFundsOnDateRange = "#issueFundsOn > :nth-child(1)";
const CRAissueFundsOnSpecificDates = "#issueFundsOn > :nth-child(2)";
const CRAdatesToIssueFundsRange = ".ant-calendar-picker-input";
const CRAdatesToIssueFundsSpecific =
  ".ant-form-item-children > :nth-child(1) > .ant-btn";
const CRAweekDaysToIssueFunds =
  ":nth-child(2) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAgroupCreditEnable = "#groupCredit > :nth-child(1)";
const CRAgroupCreditDisable = "#groupCredit > :nth-child(2)";
const CRAmerchantGroup =
  ":nth-child(1) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAgroupCreditTypeMonth = "#groupCreditType > :nth-child(1)";
const CRAgroupCreditTypePeriod = "#groupCreditType > :nth-child(2)";
const CRAgroupCreditAvailabilityRuleDuration =
  "#groupCreditAvailability > :nth-child(1)";
const CRAgroupCreditAvailabilityIssueFundsDays =
  "#groupCreditAvailability > :nth-child(2)";
const CRAgroupCreditExpirationTypeDate =
  "#groupCreditExpirationType > :nth-child(1)";
const CRAgroupCreditExpirationTypeMonthly =
  "#groupCreditExpirationType > :nth-child(2)";
const CRAgroupCreditExpirationTypeEndOfPeriod =
  "#groupCreditExpirationType > :nth-child(2)"; // si se tiene la opcion de Month activa en Group Credit Type se tiene que cambiar a 3 el valor de child()
const CRAgroupCreditExpirationDate =
  "#groupCreditExpirationDate > div > .ant-calendar-picker-input";
const CRAgroupCreditAmount = "#groupCreditAmount";
const CRAbreakfast =
  ":nth-child(3) > .ant-card-body > :nth-child(3) > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner";
const CRAbreakfastAmount = "#BREAKFAST-Amount";
const CRAbreakfastTimeIssued =
  ":nth-child(3) > :nth-child(3) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAbreakfastExpire =
  ":nth-child(3) > :nth-child(4) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAbreakfastExpireTime =
  ":nth-child(3) > :nth-child(5) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAbreakfastMerchantGroup =
  ":nth-child(3) > .ant-col-6 > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAlunch =
  ":nth-child(3) > .ant-card-body > :nth-child(4) > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner";
const CRAlunchAmount = "#LUNCH-Amount";
const CRAlunchTimeIssued =
  ":nth-child(4) > :nth-child(3) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAlunchExpire =
  ":nth-child(4) > :nth-child(4) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAlunchExpireTime =
  ":nth-child(4) > :nth-child(5) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAlunchMerchantGroup =
  ":nth-child(4) > .ant-col-6 > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAdinner =
  ":nth-child(3) > .ant-card-body > :nth-child(5) > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner";
const CRAdinnerAmount = "#DINNER-Amount";
const CRAdinnerTimeIssued =
  ":nth-child(5) > :nth-child(3) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAdinnerExpire =
  ":nth-child(5) > :nth-child(4) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAdinnerExpireTime =
  ":nth-child(5) > :nth-child(5) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAdinnerMerchantGroup =
  ":nth-child(5) > .ant-col-6 > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const CRAperDay =
  ":nth-child(5) > .ant-card-body > :nth-child(3) > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner";
const CRAperDayTypeEither = "#PER_DAY-MaximumLimitType > :nth-child(1)";
const CRAperDayTypeAmount = "#PER_DAY-MaximumLimitType > :nth-child(2)";
const CRAperDayTypeMealCreditUsed = "#PER_DAY-MaximumLimitType > :nth-child(3)";
const CRAperDayAmount = "#PER_DAY-MaximumLimitAmount";
const CRAperDayMealCreditUsed =
  ":nth-child(3) > :nth-child(4) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input";
const CRAperWeek =
  ":nth-child(5) > .ant-card-body > :nth-child(4) > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner";
const CRAperWeekTypeEither = "#PER_WEEK-MaximumLimitType > :nth-child(1)";
const CRAperWeekTypeAmount = "#PER_WEEK-MaximumLimitType > :nth-child(2)";
const CRAperWeekTypeMealCreditUsed =
  "#PER_WEEK-MaximumLimitType > :nth-child(3)";
const CRAperWeekAmount = "#PER_WEEK-MaximumLimitAmount";
const CRAperWeekMealCreditUsed =
  ":nth-child(4) > :nth-child(4) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input";
const CRAperMonth =
  ":nth-child(5) > .ant-card-body > :nth-child(5) > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner";
const CRAperMonthTypeEither = "#PER_MONTH-MaximumLimitType > :nth-child(1)";
const CRAperMonthTypeAmount = "#PER_MONTH-MaximumLimitType > :nth-child(2)";
const CRAperMonthTypeMealCreditUsed =
  "#PER_MONTH-MaximumLimitType > :nth-child(3)";
const CRAperMonthAmount = "#PER_MONTH-MaximumLimitAmount";
const CRAperMonthMealCreditUsed =
  ":nth-child(5) > :nth-child(4) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input";
const CRAforEntirePeriod =
  ":nth-child(6) > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner";
const CRAforEntirePeriodTypeEither =
  "#FOR_ENTIRE_PERIOD-MaximumLimitType > :nth-child(1)";
const CRAforEntirePeriodTypeAmount =
  "#FOR_ENTIRE_PERIOD-MaximumLimitType > :nth-child(2)";
const CRAforEntirePeriodTypeMealCreditUsed =
  "#FOR_ENTIRE_PERIOD-MaximumLimitType > :nth-child(3)";
const CRAforEntirePeriodAmount = "#FOR_ENTIRE_PERIOD-MaximumLimitAmount";
const CRAforEntirePeriodMealCreditUsed =
  ":nth-child(6) > :nth-child(4) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input";
const CRAcancel = ".ant-form-item-children > [type='button']";
const CRAaddCreditRule = ".ant-btn-primary";
// CREDIT RULES LIST
const menuCreditRulesList = ":nth-child(11) > a";
const CRLname = ".ant-input";
const CRLcampus = ".ant-select-selection";
const CRLbody = ".ant-card-body";
const CRLidTable =
  ":nth-child(1) > .ant-table-header-column > .ant-table-column-sorters";
const CRLnameTable =
  ":nth-child(2) > .ant-table-header-column > .ant-table-column-sorters";
const CRLcampusTable =
  ":nth-child(3) > .ant-table-header-column > .ant-table-column-sorters";
const CRLallTeamsTable =
  ":nth-child(4) > .ant-table-header-column > .ant-table-column-sorters";
const CRLisActiveTable =
  ":nth-child(5) > .ant-table-header-column > .ant-table-column-sorters";
const CRLcreditTypeTable =
  ":nth-child(6) > .ant-table-header-column > .ant-table-column-sorters";
const CRLview =
  "[data-row-key='0'] > :nth-child(7) > :nth-child(1) > :nth-child(1)"; //dependiendo de la fila se cambia el valor de data-row-key
const CRLedit =
  "[data-row-key='0'] > :nth-child(7) > :nth-child(1) > :nth-child(3)";
const CRLduplicate =
  "[data-row-key='3'] > :nth-child(7) > :nth-child(1) > :nth-child(5)";
const CRLactivate =
  "[data-row-key='0'] > :nth-child(7) > :nth-child(1) > :nth-child(7)";
const CRLpageNumberGroup = ".ant-pagination";
const CRLviewBody = ".ant-drawer-header";
const CRLeditSave = ".ant-btn-primary";
const CRLeditCancel =
  ".ant-col-24 > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > [type='button']";
const CRLduplicateSave = ".ant-btn-primary";
const CRLduplicateCancel =
  ".ant-col-24 > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > [type='button']";
const CRLpageNext = ".ant-pagination-next > .ant-pagination-item-link";
const CRLpagePrevious = ".ant-pagination-prev > .ant-pagination-item-link";
// RECEIPTS
const menuReceipts = "[id='menu2$Menu'] > :nth-child(12) > a";
const RsearchByUser = "#searchBy > :nth-child(1)";
const RsearchByEmail = "#searchBy > :nth-child(2)";
const RuserID =
  ":nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input";
const Remail =
  ":nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const RuseremailMsg =
  ":nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain";
const RcampusMsg =
  ":nth-child(7) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain";
const RdateMsg =
  ".ant-col-24 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain";
const RfirstName = "#firstName";
const Rcampuses =
  ":nth-child(7) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const Rcreated =
  ".ant-form-item-children > :nth-child(1) > .ant-select > .ant-select-selection";
const RuploadedEither = "#upload > :nth-child(1)";
const RuploadedYes = "#upload > :nth-child(2)";
const RuploadedNo = "#upload > :nth-child(3)";
const Rinvoice =
  ":nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input";
const RlastName = "#lastName";
const Rteams =
  ":nth-child(8) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection";
const RbtnSearch = ".ant-btn";
const Rbody = ".ant-card-body";

export {
  errorMsg,
  errorMsg2,
  errorMsg3,
  menuAppsManagement,
  menuTileAdd,
  menuReceipts,
  RsearchByUser,
  RsearchByEmail,
  RuserID,
  Remail,
  RuseremailMsg,
  RcampusMsg,
  RdateMsg,
  Rbody,
  RfirstName,
  Rcampuses,
  Rcreated,
  RuploadedEither,
  RuploadedYes,
  RuploadedNo,
  Rinvoice,
  RlastName,
  Rteams,
  RbtnSearch,
  menuCreditRulesList,
  CRLname,
  CRLbody,
  CRLpageNext,
  CRLpagePrevious,
  CRLcampus,
  CRLidTable,
  CRLnameTable,
  CRLcampusTable,
  CRLallTeamsTable,
  CRLisActiveTable,
  CRLcreditTypeTable,
  CRLview,
  CRLedit,
  CRLduplicate,
  CRLactivate,
  CRLpageNumberGroup,
  CRLviewBody,
  CRLeditSave,
  CRLeditCancel,
  CRLduplicateSave,
  CRLduplicateCancel,
  CRLpageNext,
  CRLpagePrevious,
  menuCreditRuleAdd,
  CRAname,
  CRAcampus,
  CRAcampusSelect,
  CRAcreditType,
  CRAallTeams,
  CRAteams,
  CRAweekStartOn,
  CRAisActive,
  CRAisTemplate,
  CRAissueFundsOnDateRange,
  CRAissueFundsOnSpecificDates,
  CRAdatesToIssueFundsRange,
  CRAdatesToIssueFundsSpecific,
  CRAweekDaysToIssueFunds,
  CRAgroupCreditEnable,
  CRAgroupCreditDisable,
  CRAmerchantGroup,
  CRAgroupCreditTypeMonth,
  CRAgroupCreditTypePeriod,
  CRAgroupCreditAvailabilityRuleDuration,
  CRAgroupCreditAvailabilityIssueFundsDays,
  CRAgroupCreditExpirationTypeDate,
  CRAgroupCreditExpirationTypeMonthly,
  CRAgroupCreditExpirationTypeEndOfPeriod,
  CRAgroupCreditExpirationDate,
  CRAgroupCreditAmount,
  CRAbreakfast,
  CRAbreakfastAmount,
  CRAbreakfastTimeIssued,
  CRAbreakfastExpire,
  CRAbreakfastExpireTime,
  CRAbreakfastMerchantGroup,
  CRAlunch,
  CRAlunchAmount,
  CRAlunchTimeIssued,
  CRAlunchExpire,
  CRAlunchExpireTime,
  CRAlunchMerchantGroup,
  CRAdinner,
  CRAdinnerAmount,
  CRAdinnerTimeIssued,
  CRAdinnerExpire,
  CRAdinnerExpireTime,
  CRAdinnerMerchantGroup,
  CRAperDay,
  CRAperDayTypeEither,
  CRAperDayTypeAmount,
  CRAperDayTypeMealCreditUsed,
  CRAperDayAmount,
  CRAperDayMealCreditUsed,
  CRAperWeek,
  CRAperWeekTypeEither,
  CRAperWeekTypeAmount,
  CRAperWeekTypeMealCreditUsed,
  CRAperWeekAmount,
  CRAperWeekMealCreditUsed,
  CRAperMonth,
  CRAperMonthTypeEither,
  CRAperMonthTypeAmount,
  CRAperMonthTypeMealCreditUsed,
  CRAperMonthAmount,
  CRAperMonthMealCreditUsed,
  CRAforEntirePeriod,
  CRAforEntirePeriodTypeEither,
  CRAforEntirePeriodTypeAmount,
  CRAforEntirePeriodTypeMealCreditUsed,
  CRAforEntirePeriodAmount,
  CRAforEntirePeriodMealCreditUsed,
  CRAcancel,
  CRAaddCreditRule,
  menuCreditGroupsList,
  CGLname,
  CGLcampus,
  CGLbody,
  CGLviewDrawer,
  CGLeditDrawer,
  CGLeditName,
  CGLeditCancel,
  CGLeditSave,
  CGLteamMembershipSave,
  CGLteamMembershipCancel,
  CGLteamMembershipDrawer,
  CGLpagePrevious,
  CGLpageNext,
  CGLview,
  CGLedit,
  CGLteamMembership,
  CGLdownload,
  CGLpageNumberGroup,
  menuCreditGroupAdd,
  CGAaddTeam,
  CGAbody,
  CGAcancelYes,
  CGAcancelNo,
  CGAconfirmation,
  CGAname,
  CGAcampus,
  CGAcancel,
  menuTeamsList,
  TLname,
  TLedit,
  TLeditDrawer,
  TLeditDrawerBtn,
  TLeditDrawerMsg,
  TLdelete,
  TLdeleteYes,
  TLdeleteNo,
  TLpageNext,
  TLpagePrevious,
  TLpageNumberGroup,
  menuTeamAdd,
  TAname,
  TAaddTag,
  TAcancel,
  TAcancelYes,
  TAcancelNo,
  ALview,
  ALedit,
  ALdelete,
  ALbody,
  ALpageNumberGroup,
  ALpageNext,
  ALpagePrevious,
  ALeditDrawer,
  ALeditDrawerBtn,
  ALeditDrawerMsg,
  menuAthleteList,
  ALuser,
  ALcampus,
  ALteam,
  ALotherOptions,
  ABwarningMsg,
  ABCancel,
  ABaddAthlete,
  ABUpload,
  ABbatchType,
  ABTeam,
  ABCampus,
  ABDownload,
  loginer,
  forgotpw,
  fp_ermsg,
  fp_ermsg2,
  reg,
  confirmar_acc,
  reg_name,
  reg_email,
  reg_pass,
  name,
  menuAthleteBatch,
  input,
  sort_id,
  sort_name,
  sort_url,
  sort_prev,
  view,
  copy_link,
  edit,
  delete_btn,
  athlete_btn,
  menuAthleteAdd,
  AAbody,
  AAemail,
  AAuser,
  AAaddByUser,
  AAaddBySelected,
  AAaddByEmail,
  AAcampus,
  AAcampusSelect,
  AAcancelButton,
  AAaddButton,
  AArestrictedUntil,
  AAdateInput,
  AArestrictedAfter,
  AAcalendarYes,
  AAisRestricted,
  AAcreditGroup,
  AArulesToApply,
  ABisRestricted,
  ABrestrictedUntil,
  ABrestrictedAfter,
  ABdateInput,
  ABbody,
  ABcancelYes,
  ABpath,
  ABbatchTypeSelect,
  ABbatchTypeMsg,
  ABUploadMsg,
};
