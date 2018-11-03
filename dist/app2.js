"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concecionaria_1 = __importDefault(require("./Concecionaria"));
// Teste das instancias
var carroA = new Carro_1.default("Fusca", 2);
var carroB = new Carro_1.default("Gol", 4);
var carroC = new Carro_1.default("Celta", 2);
var pessoaA = new Pessoa_1.default("Diogo", "Prisma");
var pessoaB = new Pessoa_1.default("Bárbara", "New Beatle");
var list = [carroA, carroB, carroC];
var listCli = [pessoaA, pessoaB];
var con = new Concecionaria_1.default("Rua a", list);
con.setListaClientes(listCli);
//console.log(con.getListaCarros())
// compra do carro
var cliente = new Pessoa_1.default("Vilma", "Fusca");
//console.log(cliente.getCarroPreferido())
con.getListaCarros().map(function (carro) {
    if (carro.getModelo() == cliente.getCarroPreferido()) {
        cliente.setCarro(carro);
    }
});
console.log("Cliente: " + cliente.getNome() + " \nCarro comprado: " + cliente.getCarro().getModelo());
