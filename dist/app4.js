"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concecionaria_1 = __importDefault(require("./Concecionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Dao_1 = __importDefault(require("./Dao"));
//let pessoaDao = new PessoaDAO();
//let concecionariaDao = new ConcecionariaDAO();
//console.log(concecionariaDao.insert(new Concecionaria('conc1',[])))
//console.log(pessoaDao.insert(new Pessoa('Fulano','')))  
var dao = new Dao_1.default();
var dao2 = new Dao_1.default();
console.log(dao.insert(new Pessoa_1.default('Diogo', '')));
console.log(dao2.insert(new Concecionaria_1.default('FIAT', [])));
