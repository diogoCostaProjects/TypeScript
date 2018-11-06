"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var moto_1 = __importDefault(require("./moto"));
var carro = new Carro_1.default("Konbi", 2);
var moto = new moto_1.default("Kawasaki Ninja", "1500 Cilindradas");
moto.acelerar();
carro.acelerar();
console.log(carro);
console.log(moto);
