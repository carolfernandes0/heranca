import { PessoaFisica } from "./src/model/PessoaFisica";
import { PessoaJuridica} from "./src/model/PessoaJuridica";

const um = new PessoaJuridica (`Carolina`, `74321905`);
um.setNome(`juca`)
um.setCnpj(`2889154`)
console.log(um.getNome());
console.log(um.getCnpj());

const dois = new PessoaFisica (`luca`, `388106354`);
dois.setNome(`Carol`);
dois.setCpf(`28893892764`);
console.log(dois.getNome());
console.log(dois.getCpf());