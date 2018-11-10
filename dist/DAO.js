"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = 'tb_T';
    }
    Dao.prototype.insert = function (obj) {
        console.log(obj);
        return true;
    };
    Dao.prototype.update = function (obj) {
        console.log("Atualizado");
        return true;
    };
    Dao.prototype.delete = function (id) {
        console.log("Deletado");
        return true;
    };
    Dao.prototype.findAll = function () {
        console.log("Busca de todos");
        return new Array();
    };
    Dao.prototype.find = function (id) {
        console.log("Busca de um");
        return true;
    };
    return Dao;
}());
exports.default = Dao;
