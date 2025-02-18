import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from "./usuario.repository";
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsuarioService {

    constructor(private usuarioRepository: UsuarioRepository) {}

    async salvar(usuario: UsuarioEntity): Promise<UsuarioEntity> {
        usuario.id = uuid();
    
        this.usuarioRepository.salvar(usuario);

        return usuario;
    }

    async listar(): Promise<UsuarioEntity[]> {
        const usuariosSalvos = await this.usuarioRepository.listar();

        return usuariosSalvos;
    }

    async atualizar(id: string, novosDados: Partial<UsuarioEntity>): Promise<UsuarioEntity> {
        
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);

        return usuarioAtualizado;
    }

    async remover(id: string): Promise<UsuarioEntity> {
        const usuarioRemovido = await this.usuarioRepository.remove(id);

        return usuarioRemovido;
    }
}