import addingMultipleProductsInCarts from '../../PageObject/AddingMultipleProductsInCart'

const addingProducts = new addingMultipleProductsInCarts()

before(function () {
    cy.fixture('Data').then(function (data) {
        this.data = data
    })
})

describe("Adding multiple products in carts", function () {

    it('Verify that user is able to add multiple products into carts', function () {
        cy.login()
        addingProducts.addingOnAddToCartOnMultipleProduct()
        cy.logout()
    })
})