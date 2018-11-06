import Veiculo from './veiculo'

class Moto extends Veiculo{

    private cilindradas: string= ""

    constructor(modelo: string, cilindradas: string){
        super()
        this.modelo = modelo
        this.cilindradas= cilindradas
    }
    
    public getCilindradas(): string{
         return this.cilindradas
    }
    public acelerar(): void{ // Método sobreescrito
        this.velocidade = this.velocidade + 20
    }

}

export default Moto