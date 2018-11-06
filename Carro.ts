import Veiculo from './Veiculo'

export default class Carro extends Veiculo{
       
    private np: number =  0
    
    constructor(modelo: String, np: number ){
        super()
        this.modelo = modelo
        this.np = np
    }
    
    public getNp():number{
        return this.np
    }
    

}