import InterfaceDAO from "./InterfaceDAO";
import Concecionaria from './Concecionaria';

class ConcecionariaDAO implements InterfaceDAO{
   
    nomeTabela: string = 'tb_concecionaria'
    
    insert(obj: Concecionaria): boolean{
        console.log(obj.getEndereco()+ " Inserido")
        return true
    }
    update(obj: Concecionaria): boolean{
        console.log("Atualizado")
        return true
    }
    delete(id: number): any{
        console.log("Deletado")
        return true
    }
    findAll(): Array<Concecionaria>{
        console.log("Busca de todos")
        return new Array<Concecionaria>()
    }
    find(id: number):any{
        console.log("Busca de um")
        return true
    }
}
export default ConcecionariaDAO