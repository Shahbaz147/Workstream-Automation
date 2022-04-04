import {SavedTrainingVerificationLocators} from "../../common/erp_locators";
import { TrainingDrawer } from "./training_drawer";

class TrainingDetailsVerify extends TrainingDrawer{
    constructor(){
        super();
    }

    verify_training_info = new SavedTrainingVerificationLocators();

    // Click on training added
    clickOnTrainingAdded(){
        this.getElementBasedOnText(this.trainingTitle).click();
    }

    // Verify training title
    verifyTrainingTitle(){
        this.verifyValueMatched(this.verify_training_info.savedTrainingtTitleText ,this.trainingTitle);
    }

    // Verify training Detaile
    verifyTrainingDetail(){
        this.verifyTextMatched(this.verify_training_info.savedTrainingDetail , this.trainingDetails);
    }

    // Verify trainer
    verifyTrainingTrainer(){
        this.verifyValueMatched(this.verify_training_info.savedTrainingTrainer ,this.trainer);
    }

    // Verify training type
    verifyTrainingType(){
        this.verifyTextMatched(this.verify_training_info.savedTrainingType ,this.trainingType);
    }

    // Verify training fee
    verifyTrainingFee(){
        this.verifyValueMatched(this.verify_training_info.savedTrainingFee ,this.trainingFee);
    }

   // Verify training start date
    verifyStartDate(){
        this.getElement(this.verify_training_info.savedTrainingStartDate).invoke('val').should('match',this.dateRegex);
    }

   // Verify training end date
    verifyEndDate(){
        this.getElement(this.verify_training_info.savedTrainingEndDate).invoke('val').should('match',this.dateRegex);
    }

    // Verify file uploaded
    verifyUploadedFile(){
        this.getElement(this.verify_training_info.savedTrainingFile).should('be.visible');
    }
}

export { TrainingDetailsVerify };