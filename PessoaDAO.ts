import InterfaceDAO from "./InterfaceDAO";
import Pessoa from './Pessoa'

class PessoaDAO implements InterfaceDAO{

    nomeTabela: string = 'tb_Pessoa'
    
    insert(obj: Pessoa): boolean{
        console.log(obj.getNome()+ " Inserido")
        return true
    }
    update(obj: Pessoa): boolean{
        console.log("Atualizado")
        return true
    }
    delete(id: number): any{
        console.log("Deletado")
        return true
    }
    findAll(): Array<Pessoa>{
        console.log("Busca de todos")
        return new Array<Pessoa>()
    }
    find(id: number):any{
        console.log("Busca de um")
        return true
    }
}
export default PessoaDAO



