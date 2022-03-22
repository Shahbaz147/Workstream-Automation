import { strings } from "../../common/strings";

class CommonMethodsPage extends strings{
    constructor() {
        super();
    }

    strings = new strings();
    
    // Visit URL 
    visitURL(identifier: string){
        cy.visit(identifier)
    }

    // verify page title
    verifyPageTitle(text: string){
        cy.title().should('eq', text)
    }

    // Get Element 
    getElement(identifier: any) {
        return cy.get(identifier);
    }

    // Verify if Element is visible
    verifyVisibility(identifier: any){
        this.getElement(identifier).should("be.visible");
    }

    // Click on Element
    clickElement(identifier: any){
        this.getElement(identifier).click();
    }

    // get any element based on text
    getElementBasedOnText(text: any) {
        return cy.contains(text);
    }

    // Verify if text matched
    verifyTextMatched(identifier: any, text: any): void {
        this.getElement(identifier).should("have.text", text);
    }

    // Verify if value matched
    verifyValueMatched(identifier: any, text: any): void{
        this.getElement(identifier).should("have.value", text);
    }

    // set wait
    addWait(number: any) {
        cy.wait(number);
    }

    // Get today date
    getCurrentDay() {
        let currentDate = new Date();
        return currentDate.getDate();
    }

    // Upload file
    uploadFile(identifier: any, filePath: string) {
        cy.get(identifier).attachFile(filePath, { subjectType: "drag-n-drop" });
    }
}

export { CommonMethodsPage };