import * as PostLogin from '../../login/requests/postLogin.request';
import * as GetProdutos from '../../produtos/requests/getProdutos.request';
import * as PostCarrinho from '../requests/postCarrinho.request';
import * as DeleteCarrinho from '../requests/deleteCarrinho.request';

describe('Post Carrinho', () => {
    it('Criar um carrinho com sucesso', () => {
       
        PostLogin.entrar().should((resEntrar) => {
            expect(resEntrar.status).to.eq(200)
          
            GetProdutos.listar().should((resProdutos) => {
                expect(resProdutos.status).to.be.eq(200),
                
                PostCarrinho.adicionar(resEntrar.body.authorization,resProdutos.body._id).then((resAdicionar) => {
                    expect(resAdicionar.status).be.eq(400)
                    
                    DeleteCarrinho.excluir(resEntrar.body.authorization).should((resDelete) => {
                        expect(resDelete.status).to.eq(200)
                    })
                })
            })
        })
    })
});
