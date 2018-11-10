import InterfaceDAO from "./InterfaceDAO";

class Dao<T> implements InterfaceDAO<T>{

    nomeTabela: string = 'tb_T'
    
    insert(obj: T): boolean{
        console.log(obj)
        return true
    }
    update(obj: T): boolean{
        console.log("Atualizado")
        return true
    }
    delete(id: number): any{
        console.log("Deletado")
        return true
    }
    findAll(): Array<T>{
        console.log("Busca de todos")
        return new Array<T>()
    }
    find(id: number):any{
        console.log("Busca de um")
        return true     
    }
}
export default Dao