"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.modelo = "";
        this.velocidade = 0;
    }
    Veiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Veiculo.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Veiculo.prototype.getVelocidade = function () {
        return this.velocidade;
    };
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    return Veiculo;
}());
exports.default = Veiculo;
