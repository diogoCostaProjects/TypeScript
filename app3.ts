import Carro from './Carro'
import Moto from './moto'
import Concecionaria from './Concecionaria'


let carro = new Carro("Konbi", 2);
let moto = new Moto("Kawasaki Ninja","1500 Cilindradas");
let conc = new Concecionaria("", [])

moto.acelerar()
carro.acelerar()

console.log(carro)
console.log(moto)   
console.log(conc.getHorariosFuncionamento())    