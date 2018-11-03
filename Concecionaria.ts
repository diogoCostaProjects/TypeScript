import  Carro  from './Carro'
import  Pessoa  from './Pessoa'

export default class Concecionaria{
    
    private endereco: string = ""
    private listaCarros: Array<Carro> = []
    private listaClientes: Array<Pessoa> = []
   
    constructor(endereco: string, listaCarros: Array<Carro> ){
        this.endereco = endereco
        this.listaCarros = listaCarros
    }

    public getEndereco(): string{
        return this.endereco
    }
    public getListaCarros(): Array<Carro>{
        return this.listaCarros
    }
    public setListaCarros(listaCarros: Array<Carro>):void{
        this.listaCarros = listaCarros
    }
    public setListaClientes(listaClientes: Array<Pessoa>):void{
        this.listaClientes = listaClientes
    }
}