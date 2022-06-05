import { Login } from "../../../page_folders/signin/signin";
import { formsDashboard } from "../../../page_folders/Forms/forms_dashboard";

describe('Forms Dashbboard', () => {
    let formDashboard = new formsDashboard();
    let loginPage = new Login();

    it('verify user should be navigated to forms dashboard', () => {
        loginPage.LoginErp();
        formDashboard.clickOnFormsTab();

    })
})