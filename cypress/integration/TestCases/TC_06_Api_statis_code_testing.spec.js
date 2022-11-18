
describe('Rest assured api test with cypress', function () {
    it('Api test', function () {
        cy.request('Get','https://reqres.in/api/users/2').then((response) =>{
                expect(response).to.have.property('status', 200)
           })
    })
})