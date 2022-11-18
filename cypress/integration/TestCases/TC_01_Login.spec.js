import LoginPage from '../../PageObject/LoginPage'

const loginpage = new LoginPage()


describe("Login Test",function(){

    it('Verify user is able to login with valid credentials', function(){
        cy.login()
        cy.logout()
    })
})