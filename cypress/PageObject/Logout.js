class Logout {

    menuButton = '//button[@id="react-burger-menu-btn"]';
    logoutLink = '//a[contains(text(),"Logout")]';

    clickingOnMenuExpandButton() {
        cy.xpath(this.menuButton).click()
    }

    clickingOnLogout() {
        cy.xpath(this.logoutLink).click()
    }
}

export default Logout