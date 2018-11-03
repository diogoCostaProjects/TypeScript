
import  Carro  from './Carro'

export default class Pessoa{

    private nome: string = ""
    private carroPreferido: any = ""
    private carro: any = ""

    constructor(nome:string, carroPreferido: any){
        this.nome = nome
        this.carroPreferido = carroPreferido
     }

     public getNome(): string{
         return this.nome
     }
     public getCarroPreferido(): any{
         return this.carroPreferido
     }
     public getCarro():any{
         return this.carro
     }
     public setCarro(carro: Carro): void{
         this.carro = carro 
     }
}