export default class Carro{
    
    private modelo: String = ""
    private np: number =  0
    private velocidade: number = 0

    constructor(modelo: String, np: number){
        this.modelo = modelo
        this.np = np
    }

    public getModelo():String{
        return this.modelo
    }
    public getNp():number{
        return this.np
    }
    public acelerar(): void{
        this.velocidade = this.velocidade + 10
    }
    public getVelocidade():number{
        return this.velocidade
    }    
    public parar(): void{
        this.velocidade = 0
    }    

}