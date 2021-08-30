import usuariosSchema from '../contracts/usuarios.contract';
import * as GetUsuarios from '../requests/getUsuarios.request'

describe('Get usuarios', () => {
    it('Listar os usuarios com sucesso', () => {
        GetUsuarios.listar().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null;
        })
    });
    it('Validar o contrato da lista de usuarios', () => {
        GetUsuarios.listar().should((response) => {
            return usuariosSchema.validateAsync(response.body)

        })
    });
});