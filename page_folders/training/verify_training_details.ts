import {SavedTrainingVerificationLocators} from "../../common/erp_locators";
import { TrainingDrawer } from "./training_drawer";

class TrainingDetailsVerify extends TrainingDrawer{
    constructor(){
        super();
    }

    verify_training_info = new SavedTrainingVerificationLocators();

    // Click on training added
    clickOnTrainingAdded(){
        this.getElementBasedOnText(this.strings.trainingTitle).click();
    }

    // Verify training title
    verifyTrainingTitle(){
        this.verifyValueMatched(this.verify_training_info.savedTrainingtTitleText ,this.strings.trainingTitle);
    }

    // Verify training Detaile
    verifyTrainingDetail(){
        this.verifyTextMatched(this.verify_training_info.savedTrainingDetail , this.strings.trainingDetails);
    }

    // Verify trainer
    verifyTrainingTrainer(){
        this.verifyValueMatched(this.verify_training_info.savedTrainingTrainer ,this.strings.trainer);
    }

    // Verify training type
    verifyTrainingType(){
        this.verifyTextMatched(this.verify_training_info.savedTrainingType ,this.strings.trainingType);
    }

    // Verify training fee
    verifyTrainingFee(){
        this.verifyValueMatched(this.verify_training_info.savedTrainingFee ,this.strings.trainingFee);
    }

   // Verify training start date
    verifyStartDate(){
        this.getElement(this.verify_training_info.savedTrainingStartDate).invoke('val').should('match',this.strings.dateRegex);
    }

   // Verify training end date
    verifyEndDate(){
        this.getElement(this.verify_training_info.savedTrainingEndDate).invoke('val').should('match',this.strings.dateRegex);
    }

    // Verify file uploaded
    verifyUploadedFile(){
        this.getElement(this.verify_training_info.savedTrainingFile).should('be.visible');
    }
}

export { TrainingDetailsVerify };