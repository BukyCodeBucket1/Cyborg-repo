class HomePage {

    goToAccount(){
      cy.get("a[href*='customer/account']").eq(4).click();  
    }

}

export default new HomePage();