import AddingProductIntoCart from '../../PageObject/AddingProductIntoCart'

const addingProduct = new AddingProductIntoCart()

before(function(){
    cy.fixture('Data').then(function(data){
    this.data=data
    })
})

describe("Add To Cart",function(){

    it('Verify that user is able to add product into cart', function(){
        cy.login()
        addingProduct.clickingOnProducts()      
        addingProduct.clickingOnAddToCartButton()
        addingProduct.clickingOnCart()
        cy.logout()
    })
})