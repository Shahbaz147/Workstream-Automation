import {SigninPageLocators} from "../../common/erp_locators";
import {CommonMethodsPage} from "../common_methods/common_methods";

class Login extends CommonMethodsPage {
    constructor() {
      super();
    }

    loginPage = new SigninPageLocators();

    // Verify correct landing page
    verifyLandingPage(){
        this.verifyPageTitle(this.loginPage.pageTitle);
    }

    // Enter Email
    enterEmailAndPassword(email: string, password: string) {
        cy.get(this.loginPage.emailField).type(email);
        cy.get(this.loginPage.passwordField).type(password);
    }

    // Enter Password
    clickLoginButton() {
        this.clickElement(this.loginPage.loginButton);
    }

    // Login to ERP
    LoginErp(){
        this.visitURL(this.strings.loginUrl);
        this.verifyLandingPage(); 
        this.getElement(this.loginPage.emailField).type(this.strings.loginEmail); 
        this.getElement(this.loginPage.passwordField).type(this.strings.loginPassword); 
        this.clickLoginButton();
    }
}

export { Login };