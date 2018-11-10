import  Carro  from './Carro'
import  Pessoa  from './Pessoa'
import ConcecionariaInterface from './ConcecionariaInterface'

class Concecionaria implements ConcecionariaInterface{
    
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

    public getHorariosFuncionamento(): string{
        return 'De segunda á sexta das 08:00 às 18:00 e sábado das 08:00 às 12:00'
    }
}
export default Concecionaria