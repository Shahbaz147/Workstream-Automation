import { SigninPageLocators } from "../../common/erp_locators";
import { CommonMethodsPage } from "../common_methods/common_methods";

export class Login extends CommonMethodsPage {
  // constructor() {
  //   super();
  // }

  loginPage = new SigninPageLocators();

  /**
   * Verify correct landing page
   */
  verifyLandingPage() {
    this.verifyPageTitle(this.pageTitle);
  }

  /**
   * Enters email and password
   * @param email
   * @param password
   */
  enterEmailAndPassword(email: string, password: string) {
    cy.get(this.loginPage.emailField).type(email);
    cy.get(this.loginPage.passwordField).type(password);
  }

  /**
   * Clicks login button
   */
  clickLoginButton() {
    this.clickElement(this.loginPage.loginButton);
  }

  /**
   * Logins erp
   */
  LoginErp() {
    this.visitURL(this.loginUrl);
    this.verifyLandingPage();
    this.enterEmailAndPassword(this.loginEmail, this.loginPassword);
    this.clickLoginButton();
  }
}
