import  Carro  from './Carro'
import  Pessoa  from './Pessoa'
import  Concecionaria  from './Concecionaria'
// Teste das instancias

let carroA = new Carro("Fusca", 2)
let carroB = new Carro("Gol", 4)
let carroC = new Carro("Celta", 2)

let pessoaA = new Pessoa("Diogo", "Prisma")
let pessoaB = new Pessoa("Bárbara", "New Beatle")

let list: Array<Carro> = [carroA, carroB, carroC]
let listCli: Array<Pessoa> = [pessoaA, pessoaB]

let con = new Concecionaria("Rua a", list)
con.setListaClientes(listCli)

//console.log(con.getListaCarros())

// compra do carro

let cliente = new Pessoa("Vilma", "Fusca")
//console.log(cliente.getCarroPreferido())

con.getListaCarros().map((carro: Carro) => { 
                                                /* usando o map para mapear e capturar os objetos do tipo Carro, pegando cada 
                                                 carro da lista de carros da concecionária e comparando com o carro preferido pelo cliente
                                                */
    if (carro.getModelo() == cliente.getCarroPreferido()){
        cliente.setCarro(carro)
    }   
})
console.log("Cliente: "+cliente.getNome() + " \nCarro comprado: "+cliente.getCarro().getModelo())