class addingMultipleProductsInCarts {

    products = '//button[@class="btn btn_primary btn_small btn_inventory"]';
    
    addingOnAddToCartOnMultipleProduct() {
        let countOfElements = 0;
        let subtract = 1;
        cy.xpath(this.products).then(elements => {
            countOfElements = elements.length;
            for (let a = 1; a <= countOfElements; a++) {
                cy.xpath(this.products).eq(a - subtract).click()
                subtract++;
            }
        });
    }
}

export default addingMultipleProductsInCarts