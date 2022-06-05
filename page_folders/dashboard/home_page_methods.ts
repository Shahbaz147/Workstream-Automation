import { CommonMethodsPage } from "../common_methods/common_methods";
import { HomePageLocators } from "../../common/erp_locators";

export class HomePage extends CommonMethodsPage {
  // constructor(){
  //     super();
  // }

  homePage = new HomePageLocators();

  /**
   * Verify Home Page
   */
  verifyHomePage() {
    this.verifyVisibility(this.homePage.sideBar);
  }

  /**
   * Clicks training tab
   */
  clickTrainingTab() {
    this.addWait(3000);
    this.getElement(this.homePage.sideBar).contains(this.trainingText).click();
  }

  /**
   * Clicks dashboard
   */
  clickDashboard() {
    this.addWait(2000);
    this.getElement(this.homePage.trainingTabList)
      .contains(this.dashboardText)
      .click();
  }
}
