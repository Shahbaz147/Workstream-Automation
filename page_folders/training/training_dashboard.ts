import { TrainingDashboardLocators } from "../../common/erp_locators";
import { CommonMethodsPage } from "../common_methods/common_methods";

export class TrainingDashboard extends CommonMethodsPage {
  // constructor() {
  //     super();
  // }

  trainingDashboard = new TrainingDashboardLocators();

  /**
   * Verifys training page
   */
  verifyTrainingPage() {
    this.verifyVisibility(this.trainingDashboard.trainingDashboardText);
  }

  /**
   * Verifys record training button
   */
  verifyRecordTrainingButton() {
    this.verifyVisibility(this.trainingDashboard.recordTrainingButton);
  }

  /**
   * Clicks record training button
   */
  clickRecordTrainingButton() {
    this.getElement(this.trainingDashboard.recordTrainingButton).click();
  }
}
