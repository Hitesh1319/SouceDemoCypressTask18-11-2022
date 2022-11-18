class checkout {

    checkoutButton = '//button[@name="checkout"]';
    addressFirstNameInput = '//input[@name="firstName"]';
    addressLastNameInput = '//input[@name="lastName"]'
    addressPostalCodeInput = '//input[@name="postalCode"]';
    submitButton = '//input[@name="continue"]';
    finishButton = '//button[@name="finish"]';

    clickingOnCheckOut() {
        cy.xpath(this.checkoutButton).click()
    }

    addingAddressFirstName(firstName) {
        cy.xpath(this.addressFirstNameInput)
            .type(firstName);
        return this
    }

    addingAddressLastName(lastName) {
        cy.xpath(this.addressLastNameInput)
            .type(lastName);
        return this
    }

    addingAddressZipCode(zipCode) {
        cy.xpath(this.addressPostalCodeInput)
            .type(zipCode);
        return this
    }

    clickingOnSubmitButton() {
        cy.xpath(this.submitButton).click()
    }

    clickingOnFinishButton() {
        cy.xpath(this.finishButton).click()
    }
}

export default checkout