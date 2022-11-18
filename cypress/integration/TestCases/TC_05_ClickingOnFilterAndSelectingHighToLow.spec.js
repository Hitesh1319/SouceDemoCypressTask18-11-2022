import Filter from "../../PageObject/ClickingOnFilterAndSelectingFilter" 

const filter = new Filter()

before(function(){
    cy.fixture('Data').then(function(data){
    this.data=data
    })
})

describe("Filter test",function(){

    it('Verify that user is able to click on filter and select high to low', () => {
        cy.login()
        filter.clickingOnFilter()
        cy.logout()
    })
})