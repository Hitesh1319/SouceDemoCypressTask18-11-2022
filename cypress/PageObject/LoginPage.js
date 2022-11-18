class LoginPage {

    usernameInputXpath = '//input[@name="user-name"]';
    passwordInputXpath = '//input[@name="password"]';
    submitButtonXpath = '//input[@type="submit"]';

    navigate(url) {
        cy.visit(url)
        cy.url().should('include', url)
    }

    username(username) {
        cy.xpath(this.usernameInputXpath)
            .type(username);
        return this
    }
    password(password) {
        cy.xpath(this.passwordInputXpath)
            .type(password);
        return this
    }
    loginButton() {
        cy.xpath(this.submitButtonXpath)
            .click()
    }

}

export default LoginPage