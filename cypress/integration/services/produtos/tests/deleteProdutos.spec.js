import * as DeleteProdutos from '../requests/deleteProdutos.request';
import * as PostProdutos from '../requests/postProdutos.request';
import * as PostLogin from '../../login/requests/postLogin.request';
//import * as PostUsuarios from '../../usuarios/requests/postUsuarios.request';
//const faker = require('faker')

describe('Delete produto', () => {
    it('Deletar produto',() => {
        //const email = faker.internet.email();
        //const password = faker.internet.password();
        //PostUsuarios.criarUsuario(email, password).should((resPost) => {
        //cy.log(resPost.body)
        //expect(resPost.status).to.eq(201)
        //expect(resPost.body.message).to.eq("Cadastro realizado com sucesso"),
           PostLogin.entrar().should((resEntrar) => {
                expect(resEntrar.status).to.eq(200)
                
                PostProdutos.adicionar(resEntrar.body.authorization).should((resProdutos) => {
                        expect(resProdutos.status).to.eq(201)
                        expect(resProdutos.body.message).to.eq("Cadastro realizado com sucesso")

                    DeleteProdutos.excluir(resEntrar.body.authorization, resProdutos.body._id).should((resDelete) => {
                            expect(resDelete.status).to.eq(200)
                            expect(resDelete.body.message).to.eq("Nenhum registro excluído")
                    });
                });
            });
        });
    });                