"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nomeTabela = 'tb_Pessoa';
    }
    PessoaDAO.prototype.insert = function (obj) {
        console.log(obj.getNome() + " Inserido");
        return true;
    };
    PessoaDAO.prototype.update = function (obj) {
        console.log("Atualizado");
        return true;
    };
    PessoaDAO.prototype.delete = function (id) {
        console.log("Deletado");
        return true;
    };
    PessoaDAO.prototype.findAll = function () {
        console.log("Busca de todos");
        return new Array();
    };
    PessoaDAO.prototype.find = function (id) {
        console.log("Busca de um");
        return true;
    };
    return PessoaDAO;
}());
exports.default = PessoaDAO;
