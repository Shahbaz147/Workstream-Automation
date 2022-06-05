import { TrainingDrawerLocators } from "../../common/erp_locators";
import { TrainingDashboard } from "./training_dashboard";

export class TrainingDrawer extends TrainingDashboard {
  // constructor(){
  //     super();
  // }

  trainingDrawer = new TrainingDrawerLocators();

  /**
   * Check Page Drawer Heading visibility
   */
  verifyTrainingDrawer() {
    this.verifyVisibility(this.trainingDrawer.trainingDrawerText);
  }

  /**
   * Enters training title
   */
  enterTrainingTitle() {
    this.getElement(this.trainingDrawer.trainingTitle).type(this.trainingTitle);
  }

  /**
   * Enters training details
   */
  enterTrainingDetails() {
    this.getElement(this.trainingDrawer.trainingDetails).type(
      this.trainingDetails
    );
  }

  /**
   * Enters training fees
   */
  enterTrainingFees() {
    this.getElement(this.trainingDrawer.trainingFee)
      .clear()
      .type(this.trainingFee);
  }

  /**
   * Enters trainer name
   */
  enterTrainerName() {
    this.getElement(this.trainingDrawer.trainer).type(this.trainer);
  }

  /**
   * Clicks training type
   */
  clickTrainingType() {
    this.getElement(this.trainingDrawer.trainingTypeField).click();
  }

  /**
   * Selects training type from list
   */
  SelectTrainingTypeFromList() {
    this.getElement(this.trainingDrawer.trainingTypeList)
      .contains(this.trainingType)
      .click();
  }

  /**
   * Selects training type
   */
  SelectTrainingType() {
    this.clickTrainingType();
    this.SelectTrainingTypeFromList();
  }

  /**
   * Clicks start date
   */
  clickStartDate() {
    this.getElement(this.trainingDrawer.dateField).eq(0).click();
  }

  /**
   * Selects start date in calender
   */
  selectStartDateInCalender() {
    this.getElement(this.trainingDrawer.dateDiv)
      .contains(this.getCurrentDay())
      .click();
  }

  /**
   * Selects start date
   */
  SelectStartDate() {
    this.clickStartDate();
    this.selectStartDateInCalender();
  }

  /**
   * Clicks end date
   */
  clickEndDate() {
    this.getElement(this.trainingDrawer.dateField).eq(1).click();
  }

  /**
   * Clicks month drop down in calender
   */
  clickMonthDropDownInCalender() {
    this.getElement(this.trainingDrawer.monthTabInCalender).eq(0).click();
  }

  /**
   * Selects month from drop down in calender
   */
  selectMonthFromDropDownInCalender() {
    this.getElement(this.trainingDrawer.monthTabInCalender)
      .eq(1)
      .contains(this.Month)
      .click();
  }

  /**
   * Selects end date in calender
   */
  selectEndDateInCalender() {
    this.getElement(this.trainingDrawer.dateDiv)
      .contains(Number(this.getCurrentDay()))
      .click();
  }

  /**
   * Selects end date
   */
  SelectEndDate() {
    this.clickEndDate();
    this.clickMonthDropDownInCalender();
    this.selectMonthFromDropDownInCalender();
    this.selectEndDateInCalender();
  }

  /**
   * Uploads file on page
   */
  uploadFileOnPage() {
    this.uploadFile(this.trainingDrawer.uploadFileButton, this.filePath);
  }

  /**
   * Submits training
   */
  submitTraining() {
    this.addWait(2000);
    cy.contains(this.trainingSubmitButton).click();
  }
}
