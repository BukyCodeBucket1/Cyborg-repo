class DashboardPage{
    confirmLogin(){
        cy.get("strong").eq(2).should("include.text", "Hello, Ebuka Frank")
    }


}

export default new DashboardPage();