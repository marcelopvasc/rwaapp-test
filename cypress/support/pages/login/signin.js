/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

Cypress.Commands.add('fillMandatoryLoginFields', (username, password) => {
  cy.get(Cypress.env('login_page_identifiers').username_field)
    .type(username, { log: false })
  cy.get(Cypress.env('login_page_identifiers').userpwd_field)
    .type(password, { log: false })
})

Cypress.Commands.add('fillSignupForm', (firstname, lastname, username, password, confpassword) => {
  cy.get(Cypress.env('login_page_identifiers').signup_link).click()
  cy.get(Cypress.env('signup_page_identifiers').firstname)
    .type(firstname, { log: false })
  cy.get(Cypress.env('signup_page_identifiers').lastname)
    .type(lastname, { log: false })
  cy.get(Cypress.env('signup_page_identifiers').username)
    .type(username, { log: false })
  cy.get(Cypress.env('signup_page_identifiers').password)
    .type(password, { log: false })
  cy.get(Cypress.env('signup_page_identifiers').conf_password)
    .type(confpassword, { log: false })
 
})
