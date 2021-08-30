/// <reference types="cypress" />

const payloadAlterarProduto = require('../payloads/alterar-produto.payload.json')
const faker = require('faker')
function alterar(auth) {
    payloadAlterarProduto.nome = faker.commerce.productName()
    return cy.request({
        method: "POST",
        url: "produtos",
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false,
        body: payloadAlterarProduto
    })
}


export {alterar}