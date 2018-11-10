import ConcecionariaDAO from './ConcecionariaDAO';
import PessoaDAO from './PessoaDAO';
import Concecionaria from './Concecionaria';
import Pessoa from './Pessoa';
import Dao from './Dao'
//let pessoaDao = new PessoaDAO();
//let concecionariaDao = new ConcecionariaDAO();
//console.log(concecionariaDao.insert(new Concecionaria('conc1',[])))
//console.log(pessoaDao.insert(new Pessoa('Fulano','')))  

let dao: Dao<Pessoa> = new Dao<Pessoa>()
let dao2: Dao<Concecionaria> = new Dao<Concecionaria>()

console.log(dao.insert(new Pessoa('Diogo','')))
console.log(dao2.insert(new Concecionaria('FIAT',[])))
