/// <reference types="cypress" />

let faker = require('faker')
function excluir(auth) {
    return cy.request({
        method: "DELETE",
        url: "produtos/_id",
        headers: {
            accept: "application/json",
            authorization: auth
        },
        failOnStatusCode: false
    })
}

export {excluir};
