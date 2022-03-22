import { HomePage } from "../../../page_folders/dashboard/home_page_methods";
import { TrainingDashboard } from "../../../page_folders/training/training_dashboard";
import { TrainingDrawer } from "../../../page_folders/training/training_drawer";
import { TrainingDetailsVerify } from "../../../page_folders/training/verify_training_details";
import {Login} from "../../../page_folders/signin/signin";

describe('User should be able to Record Training at ERP', () =>{
    let loginPage = new Login();
    let homePage = new HomePage();
    let trainingDashboard = new TrainingDashboard();
    let trainingDrawer = new TrainingDrawer();
    let trainingDetailVerify = new TrainingDetailsVerify();


    it('verify_that_user_should_be_able_to_record_a_training_successfully', () => {
        loginPage.LoginErp();
        homePage.clickTrainingTab();
        homePage.clickDashboard();
        trainingDashboard.verifyTrainingPage();
        cy.log("Verified that 'Training Dashboard' heading is visible.")
        trainingDashboard.verifyRecordTrainingButton();
        cy.log("Record Training Button is visible.")
        trainingDashboard.clickRecordTrainingButton();
        cy.log("User Clicked on record training button.")
        trainingDrawer.verifyTrainingDrawer();
        cy.log("Training drawer opened is verifed.")
        trainingDrawer.enterTrainingTitle();
        trainingDrawer.enterTrainingDetails();
        trainingDrawer.enterTrainingFees();
        trainingDrawer.enterTrainerName();
        trainingDrawer.SelectTrainingType();
        trainingDrawer.SelectStartDate();
        trainingDrawer.SelectEndDate();
        cy.log("User Entered Required information in drawer.")
        trainingDrawer.uploadFileOnPage();
        cy.log("User uploaded a file in training form.")
        trainingDrawer.submitTraining();
        cy.log("User clicked on submit button")

        // Verification of details added in training
        
        trainingDetailVerify.clickOnTrainingAdded();
        trainingDetailVerify.verifyTrainingTitle();
        trainingDetailVerify.verifyTrainingDetail();
        trainingDetailVerify.verifyTrainingTrainer();
        trainingDetailVerify.verifyTrainingType();
        trainingDetailVerify.verifyTrainingFee();
        trainingDetailVerify.verifyStartDate();
        trainingDetailVerify.verifyEndDate();
        trainingDetailVerify.verifyUploadedFile();

        cy.log("User Verified that training saved with exact information.")


    })
})