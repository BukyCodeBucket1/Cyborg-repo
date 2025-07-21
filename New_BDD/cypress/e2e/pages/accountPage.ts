class Account{
    login(username: string, password: string){
          cy.get("#email").type(username);
  cy.get("#pass").type(password);
  cy.get("#send2").click();


    }

    createAccount(){
        throw new Error("Not implemented");
    }



}

export default new Account();