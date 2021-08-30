/// <reference types="cypress" />
let payloadAddCarrinho = require('../payloads/add-carrinho.payload.json');
var faker = require('faker');

function adicionar(auth) {
    payloadAddCarrinho.nome = faker.commerce.productName()
    payloadAddCarrinho.descricao = faker.lorem.words(4)
    return cy.request({
        method: "POST",
        url: "carrinhos",
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false,
        body: payloadAddCarrinho
    })
}

export {adicionar}