import AddingProductIntoCart from '../../PageObject/AddingProductIntoCart'
import Checkout from '../../PageObject/Checkout'

const addingProduct = new AddingProductIntoCart()
const checkout = new Checkout()

before(function(){
    cy.fixture('Data').then(function(data){
    this.data=data
    })
})

describe("Adding product and checkout",function(){

    it('Verify that user is able to add product into cart', function(){
        cy.login()
        addingProduct.clickingOnProducts()      
        addingProduct.clickingOnAddToCartButton()
        addingProduct.clickingOnCart()
        checkout.clickingOnCheckOut()
        checkout.addingAddressFirstName(this.data.firstName)
        checkout.addingAddressLastName(this.data.lastName)
        checkout.addingAddressZipCode(this.data.zipCode)
        checkout.clickingOnSubmitButton()
        checkout.clickingOnFinishButton()
        cy.logout()
    })
})