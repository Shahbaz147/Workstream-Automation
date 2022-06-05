import { strings } from "../../common/strings";

export class CommonMethodsPage extends strings {
  // constructor() {
  //     super();
  // }

  /**
   * Visits url
   * @param identifier
   */
  visitURL(identifier: string) {
    cy.visit(identifier);
  }

  /**
   * Verifys page title
   * @param text
   */
  verifyPageTitle(text: string) {
    cy.title().should("eq", text);
  }

  /**
   * Gets element
   * @param - identifier
   * @returns - returns element
   */
  getElement(identifier: any) {
    return cy.get(identifier);
  }

  /**
   * Verifys visibility
   * @param identifier
   */
  verifyVisibility(identifier: any) {
    this.getElement(identifier).should("be.visible");
  }

  /**
   * Clicks element
   * @param identifier
   */
  clickElement(identifier: any) {
    this.getElement(identifier).click();
  }

  /**
   * Gets element based on text
   * @param text
   * @returns
   */
  getElementBasedOnText(text: any) {
    return cy.contains(text);
  }

  /**
   * Verifys text matched
   * @param identifier
   * @param text
   */
  verifyTextMatched(identifier: any, text: any): void {
    this.getElement(identifier).should("have.text", text);
  }

  /**
   * Verifys value matched
   * @param identifier
   * @param text
   */
  verifyValueMatched(identifier: any, text: any): void {
    this.getElement(identifier).should("have.value", text);
  }

  /**
   * Adds wait
   * @param number
   */
  addWait(number: any) {
    cy.wait(number);
  }

  /**
   * Gets current day
   * @returns
   */
  getCurrentDay() {
    let currentDate = new Date();
    return currentDate.getDate();
  }

  /**
   * Uploads file
   * @param identifier
   * @param filePath
   */
  uploadFile(identifier: any, filePath: string) {
    cy.get(identifier).attachFile(filePath, { subjectType: "drag-n-drop" });
  }
}
