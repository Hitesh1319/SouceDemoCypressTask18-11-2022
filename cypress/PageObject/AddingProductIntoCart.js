class AddingProductIntoCart {

    productName = 'Sauce Labs Backpack';
    addToCartButton = '//button[@class="btn btn_primary btn_small btn_inventory"]';
    clickingCart = '//a[@class="shopping_cart_link"]'

    clickingOnProducts(productName) {
        cy.get('div').contains(this.productName).click()
    }

    clickingOnAddToCartButton() {
        cy.xpath(this.addToCartButton).click()
    }

    clickingOnCart() {
        cy.xpath(this.clickingCart).click()
    }
}

export default AddingProductIntoCart