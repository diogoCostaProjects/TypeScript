class Veiculo{

    protected modelo: String = ""
    protected velocidade: number = 0


    public getModelo():String{  
        return this.modelo
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
export default Veiculo  