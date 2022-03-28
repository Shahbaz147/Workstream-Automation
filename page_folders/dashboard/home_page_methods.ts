import { CommonMethodsPage } from "../common_methods/common_methods";
import {HomePageLocators} from "../../common/erp_locators";

class HomePage extends CommonMethodsPage {
    constructor(){
        super();
    }

    homePage = new HomePageLocators();

    // Verify Home Page
    verifyHomePage(){
        this.verifyVisibility(this.homePage.sideBar)
    }

    // Click on training tab
    clickTrainingTab(){
        this.getElement(this.homePage.sideBar).contains(this.trainingText).click();
    }

    // Click on dashboard under training
    clickDashboard(){
        this.getElement(this.homePage.trainingTabList).contains(this.dashboardText).click();
    }
}

export { HomePage };
