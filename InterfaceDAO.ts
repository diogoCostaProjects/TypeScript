interface InterfaceDAO<T>{ //  Uso de Generics 

    nomeTabela: string

    insert(obj: T): boolean;
    update(obj: T): boolean;
    delete(id: number): T;
    findAll(): Array<T>;
    find(id: number): T;

}
export default InterfaceDAO