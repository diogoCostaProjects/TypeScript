"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concecionaria = /** @class */ (function () {
    function Concecionaria(endereco, listaCarros) {
        this.endereco = "";
        this.listaCarros = [];
        this.listaClientes = [];
        this.endereco = endereco;
        this.listaCarros = listaCarros;
    }
    Concecionaria.prototype.getEndereco = function () {
        return this.endereco;
    };
    Concecionaria.prototype.getListaCarros = function () {
        return this.listaCarros;
    };
    Concecionaria.prototype.setListaCarros = function (listaCarros) {
        this.listaCarros = listaCarros;
    };
    Concecionaria.prototype.setListaClientes = function (listaClientes) {
        this.listaClientes = listaClientes;
    };
    return Concecionaria;
}());
exports.default = Concecionaria;
