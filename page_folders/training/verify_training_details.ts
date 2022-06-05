import { SavedTrainingVerificationLocators } from "../../common/erp_locators";
import { TrainingDrawer } from "./training_drawer";

export class TrainingDetailsVerify extends TrainingDrawer {
  // constructor(){
  //     super();
  // }

  verify_training_info = new SavedTrainingVerificationLocators();

  /**
   * Clicks on training added
   */
  clickOnTrainingAdded() {
    this.addWait(2000);
    this.getElementBasedOnText(this.trainingTitle).click();
  }

  /**
   * Verifys training title
   */
  verifyTrainingTitle() {
    this.verifyValueMatched(
      this.verify_training_info.savedTrainingtTitleText,
      this.trainingTitle
    );
  }

  /**
   * Verifys training detail
   */
  verifyTrainingDetail() {
    this.verifyTextMatched(
      this.verify_training_info.savedTrainingDetail,
      this.trainingDetails
    );
  }

  /**
   * Verifys training trainer
   */
  verifyTrainingTrainer() {
    this.verifyValueMatched(
      this.verify_training_info.savedTrainingTrainer,
      this.trainer
    );
  }

  /**
   * Verifys training type
   */
  verifyTrainingType() {
    this.verifyTextMatched(
      this.verify_training_info.savedTrainingType,
      this.trainingType
    );
  }

  /**
   * Verifys training fee
   */
  verifyTrainingFee() {
    this.verifyValueMatched(
      this.verify_training_info.savedTrainingFee,
      this.trainingFee
    );
  }

  /**
   * Verifys start date
   */
  verifyStartDate() {
    this.getElement(this.verify_training_info.savedTrainingStartDate)
      .invoke("val")
      .should("match", this.dateRegex);
  }

  /**
   * Verifys end date
   */
  verifyEndDate() {
    this.getElement(this.verify_training_info.savedTrainingEndDate)
      .invoke("val")
      .should("match", this.dateRegex);
  }

  /**
   * Verifys uploaded file
   */
  verifyUploadedFile() {
    this.getElement(this.verify_training_info.savedTrainingFile).should(
      "be.visible"
    );
  }
}
