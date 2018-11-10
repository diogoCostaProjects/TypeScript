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
    Concecionaria.prototype.getHorariosFuncionamento = function () {
        return 'De segunda á sexta das 08:00 às 18:00 e sábado das 08:00 às 12:00';
    };
    return Concecionaria;
}());
exports.default = Concecionaria;
