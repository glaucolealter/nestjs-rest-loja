export class UsuarioEntity {
  id: string;
  nome: string;
  email: string;
  senha: string;

  constructor(novoNome: string = undefined, novoEmail: string = undefined, novaSenha: string = undefined) {
    this.nome = novoNome;
    this.email = novoEmail;
    this.senha = novaSenha;
  }

}
