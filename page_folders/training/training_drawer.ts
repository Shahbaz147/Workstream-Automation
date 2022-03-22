import {TrainingDrawerLocators} from "../../common/erp_locators";
import { TrainingDashboard } from "./training_dashboard";

class TrainingDrawer extends TrainingDashboard{
    constructor(){
        super();
    }

    trainingDrawer = new TrainingDrawerLocators();

    // Check Page Drawer Heading visibility
    verifyTrainingDrawer(){
        this.verifyVisibility(this.trainingDrawer.trainingDrawerText);
    }


   // Enter Training Title
    enterTrainingTitle(){
        this.getElement(this.trainingDrawer.trainingTitle).type(this.strings.trainingTitle);
    }

    // Enter Training Details
    enterTrainingDetails(){
        this.getElement(this.trainingDrawer.trainingDetails).type(this.strings.trainingDetails);
    }

    // Enter Training Fee
    enterTrainingFees(){
        this.getElement(this.trainingDrawer.trainingFee).clear().type(this.strings.trainingFee);
    }

    // Enter Trainer Name
    enterTrainerName(){
        this.getElement(this.trainingDrawer.trainer).type(this.strings.trainer);
    }

    // Click on training type drop down
    clickTrainingType(){
        this.getElement(this.trainingDrawer.trainingTypeField).click();
    }

    // Select Training Type from drop down list
    SelectTrainingTypeFromList(){
        this.getElement(this.trainingDrawer.trainingTypeList).contains(this.strings.trainingType).click();
    }

    // Method to select training type
    SelectTrainingType(){
        this.clickTrainingType();
        this.SelectTrainingTypeFromList();
    }

    // Click on start date field
    clickStartDate(){
        this.getElement(this.trainingDrawer.dateField).eq(0).click();
    }

    // Select start date from calender
    selectStartDateInCalender(){
        this.getElement(this.trainingDrawer.dateDiv).contains(this.getCurrentDay()).click();
    }

    // Method to select start date
    SelectStartDate(){
        this.clickStartDate();
        this.selectStartDateInCalender();
    }

    // Click on end date field
    clickEndDate(){
        this.getElement(this.trainingDrawer.dateField).eq(1).click();
    }

    // click on months drop down in calender
    clickMonthDropDownInCalender(){
        this.getElement(this.trainingDrawer.monthTabInCalender).click();
    }


    // Select Month from month drop down
    selectMonthFromDropDownInCalender(){
        this.getElement(this.trainingDrawer.monthsListInCalender).contains(this.strings.Month).click();
    }

    // select end date from calender
    selectEndDateInCalender(){
        this.getElement(this.trainingDrawer.endDateCalender).contains(Number(this.getCurrentDay())+2).click();
    }

    // Method to select end date
    SelectEndDate(){
        this.clickEndDate();
        this.clickMonthDropDownInCalender();
        this.selectMonthFromDropDownInCalender();
        this.selectEndDateInCalender();
    }

    // Upload file on the page
    uploadFileOnPage(){
        this.uploadFile(this.trainingDrawer.uploadFileButton, this.strings.filePath)
    }

    // Submit training 
    submitTraining(){
        this.addWait(2000);
        cy.contains('Submit').click();
    }
}

export { TrainingDrawer };