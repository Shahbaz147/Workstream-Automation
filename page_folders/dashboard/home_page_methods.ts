import { CommonMethodsPage } from "../common_methods/common_methods";
import {HomePageLocators} from "../../common/erp_locators";

class HomePage extends CommonMethodsPage {
    constructor(){
        super();
    }

    homePage = new HomePageLocators();

    // Verify Home Page
    verifyHomePage(){
        this.addWait(2000);
        this.verifyVisibility(this.homePage.sideBar)
    }

    // Click on training tab
    clickTrainingTab(){
        this.addWait(2000);
        this.getElement(this.homePage.sideBar).contains(this.homePage.trainingText).click();
    }

    // Click on dashboard under training
    clickDashboard(){
        this.addWait(2000);
        this.getElement(this.homePage.trainingTabList).contains(this.homePage.dashboardText).click();
    }
}

export { HomePage };
