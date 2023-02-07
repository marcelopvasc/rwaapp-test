/* eslint-disable no-undef */
/// <reference types="Cypress" />

import users_signup from '../../fixtures/users_signup.json'
import users_login from '../../fixtures/users_login.json'

describe('User login and sign up ', () => {
  
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      pathname: '**/signin'

    }).as('getLoginPage')

    cy.visit(Cypress.env('login_url'))
    cy.wait('@getLoginPage')
  })

  context('Login Scenarios', () => {
    
     
      users_login.forEach(users =>{
              it(users.test_name, function () {
                if(users.test_name !== "login unsuccessful with password less than 4 characters"){
                  cy.fillMandatoryLoginFields(users.name, users.password)
                  cy.get(Cypress.env('login_page_identifiers').login_button).click()
                  cy.get(users.result)
                  cy.should('be.visible')
                } else {
                  cy.fillMandatoryLoginFields(users.name, users.password)
                  cy.get("#username").click()
                  cy.get(users.result)
                  cy.should('be.visible')
                }  
              })
    })
  })
  


    context('Signup scenarios', () => {
      
      users_signup.forEach(users => {
        it(users.test_name, function () {
          if(users.test_name !== "password less than 4 characters"){
            cy.fillSignupForm(users.firstname,users.lastname,users.username,users.password,users.conf_password)
            cy.get(Cypress.env('signup_page_identifiers').signup_button).click()
            cy.get(users.result)
            cy.should('be.visible')
          } else {
            cy.fillSignupForm(users.firstname,users.lastname,users.username,users.password,users.conf_password)
            cy.get(users.result)
            cy.should('be.visible')
          }    
        })
      })
      
    })
  
})
