class Filter{

    filter='//span[@class="active_option"]';

    clickingOnFilter(){
        cy.get("select").select(3)
    }
}

export default Filter