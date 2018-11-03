"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = "";
        this.carroPreferido = "";
        this.carro = "";
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.getCarro = function () {
        return this.carro;
    };
    Pessoa.prototype.setCarro = function (carro) {
        this.carro = carro;
    };
    return Pessoa;
}());
exports.default = Pessoa;
