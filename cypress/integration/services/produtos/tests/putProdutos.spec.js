/// <reference types="cypress" />

import * as PutProdutos from '../requests/putProdutos.request';
import * as PostLogin from '../../login/requests/postLogin.request';
//import * as DeleteProdutos from '../requests/deleteProdutos.request'

describe('Put Produtos', () => {
    it('Alterar produto', () => {
        PostLogin.entrar().should((resEntrar) => {
            expect(resEntrar.status).to.eq(200)
            PutProdutos.alterar(resEntrar.body.authorization).should((resProdutos) => {
                expect(resProdutos.status).to.eq(201)
                expect(resProdutos.body.message).to.eq('Cadastro realizado com sucesso')
                //DeleteProdutos.apagar(resProduto.body._id, response.body.authorization).should((resDelete) => {
                    //expect(resDelete.status).to.eq(200)
                    //expect(resDelete.body.message).to.eq('Registro excluído com sucesso')
            })
        })
    })
})