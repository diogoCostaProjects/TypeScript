"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var moto_1 = __importDefault(require("./moto"));
var Concecionaria_1 = __importDefault(require("./Concecionaria"));
var carro = new Carro_1.default("Konbi", 2);
var moto = new moto_1.default("Kawasaki Ninja", "1500 Cilindradas");
var conc = new Concecionaria_1.default("", []);
moto.acelerar();
carro.acelerar();
console.log(carro);
console.log(moto);
console.log(conc.getHorariosFuncionamento());
