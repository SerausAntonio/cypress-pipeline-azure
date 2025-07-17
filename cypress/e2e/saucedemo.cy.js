describe('saucedemo testsuitetemplate spec', () => {
  it('login with right credentials', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').should('be.visible');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click();
    cy.url().should('include','inventory.html');
  })
})