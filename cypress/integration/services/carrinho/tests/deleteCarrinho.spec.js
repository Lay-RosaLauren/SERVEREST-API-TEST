import * as PostLogin from '../../login/requests/postLogin.request';
import * as DeleteCarrinho from '../requests/deleteCarrinho.request';

describe('Deletar carrinho criado', () => {
    it('Deletar', () => {
        PostLogin.entrar().should((resEntrar) => {
            expect(resEntrar.status).to.eq(200)
            DeleteCarrinho.excluir(resEntrar.body.authorization).should((resDelete) => {
                expect(resDelete.status).to.eq(200)
            })
        })
    })
})