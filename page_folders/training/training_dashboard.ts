import {TrainingDashboardLocators} from "../../common/erp_locators";
import {CommonMethodsPage} from "../common_methods/common_methods";

class TrainingDashboard extends CommonMethodsPage{
    constructor() {
        super();
    }

    trainingDashboard = new TrainingDashboardLocators();

    // Verify training page
    verifyTrainingPage(){
        this.verifyVisibility(this.trainingDashboard.trainingDashboardText);
    }

    // Verify Record training button
    verifyRecordTrainingButton(){
        this.verifyVisibility(this.trainingDashboard.recordTrainingButton)
    }

    // Click on record training button
    clickRecordTrainingButton(){
        this.getElement(this.trainingDashboard.recordTrainingButton).click();
    }
}

export { TrainingDashboard };