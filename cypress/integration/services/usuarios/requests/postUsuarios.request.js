/// <reference types="cypress" />

function criarUsuario(auth) {
    return cy.request({
        method: "Post",
        url: "usuarios",
        headers: {
            accept: "application/json",
        Authorization: auth 
        },
        failOnStatusCode: false
    })
}

export {criarUsuario}