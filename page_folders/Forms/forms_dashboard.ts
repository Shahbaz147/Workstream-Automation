import {CommonMethodsPage} from "../common_methods/common_methods"
import {formdashboardselectors} from "../../common/erp_locators"

export class formsDashboard extends CommonMethodsPage{

    form_dashboard = new formdashboardselectors();

    clickOnFormsTab(){
        this.addWait(2000)
        cy.xpath(this.form_dashboard.formsTab).click()
    }
}