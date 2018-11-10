"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConcecionariaDAO = /** @class */ (function () {
    function ConcecionariaDAO() {
        this.nomeTabela = 'tb_concecionaria';
    }
    ConcecionariaDAO.prototype.insert = function (obj) {
        console.log(obj.getEndereco() + " Inserido");
        return true;
    };
    ConcecionariaDAO.prototype.update = function (obj) {
        console.log("Atualizado");
        return true;
    };
    ConcecionariaDAO.prototype.delete = function (id) {
        console.log("Deletado");
        return true;
    };
    ConcecionariaDAO.prototype.findAll = function () {
        console.log("Busca de todos");
        return new Array();
    };
    ConcecionariaDAO.prototype.find = function (id) {
        console.log("Busca de um");
        return true;
    };
    return ConcecionariaDAO;
}());
exports.default = ConcecionariaDAO;
