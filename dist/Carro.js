"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = /** @class */ (function () {
    function Carro(modelo, np) {
        this.modelo = "";
        this.np = 0;
        this.velocidade = 0;
        this.modelo = modelo;
        this.np = np;
    }
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.getNp = function () {
        return this.np;
    };
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.getVelocidade = function () {
        return this.velocidade;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    return Carro;
}());
exports.default = Carro;
