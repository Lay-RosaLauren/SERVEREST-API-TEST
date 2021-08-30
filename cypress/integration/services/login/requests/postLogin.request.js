/// <reference types="cypress" />

let payloadLogin = {
    email: "fulano@qa.com",
    password: "teste"
}

function entrar() {
    return cy.request({
        method: "POST",
        url: "login",
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false,
        body: payloadLogin
    })
}

export {entrar}