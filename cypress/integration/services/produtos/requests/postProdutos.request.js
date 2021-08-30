/// <reference types="cypress" />
let payloadAddProduto = require('../payloads/add-produto.payload.json');
let faker = require('faker'); 

function adicionar(auth) {
    payloadAddProduto.nome = faker.commerce.productName()
    payloadAddProduto.descricao = faker.lorem.words(4)
    return cy.request({
        method: "POST",
        url: "produtos",
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false,
        body: payloadAddProduto
    })
}

export {adicionar}